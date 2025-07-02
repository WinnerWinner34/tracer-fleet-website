// server.js - Main Express server for Tracer Website
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false // Allow inline scripts for development
}));

// Rate limiting for form submissions
const formLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 form submissions per windowMs
    message: 'Too many form submissions, please try again later.',
    standardHeaders: true,
    legacyHeaders: false,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Initialize SQLite Database
const dbPath = path.join(__dirname, 'tracer.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        initializeDatabase();
    }
});

// Create tables if they don't exist
function initializeDatabase() {
    const createLeadsTable = `
        CREATE TABLE IF NOT EXISTS leads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            company TEXT,
            phone TEXT,
            message TEXT,
            fleet_size INTEGER,
            current_solution TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'new'
        )
    `;

    const createCalculatorUsageTable = `
        CREATE TABLE IF NOT EXISTS calculator_usage (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fleet_size INTEGER,
            monthly_fuel_cost REAL,
            efficiency_improvement REAL,
            estimated_savings REAL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            lead_id INTEGER,
            FOREIGN KEY (lead_id) REFERENCES leads (id)
        )
    `;

    db.run(createLeadsTable, (err) => {
        if (err) {
            console.error('Error creating leads table:', err.message);
        } else {
            console.log('Leads table ready.');
        }
    });

    db.run(createCalculatorUsageTable, (err) => {
        if (err) {
            console.error('Error creating calculator usage table:', err.message);
        } else {
            console.log('Calculator usage table ready.');
        }
    });
}

// API Routes

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Lead capture endpoint
app.post('/api/leads', formLimiter, (req, res) => {
    const { name, email, company, phone, message, fleet_size, current_solution } = req.body;

    // Validation
    if (!name || !email) {
        return res.status(400).json({ 
            error: 'Name and email are required',
            success: false 
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ 
            error: 'Please provide a valid email address',
            success: false 
        });
    }

    const insertLead = `
        INSERT INTO leads (name, email, company, phone, message, fleet_size, current_solution)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(insertLead, [name, email, company, phone, message, fleet_size, current_solution], function(err) {
        if (err) {
            console.error('Error saving lead:', err.message);
            return res.status(500).json({ 
                error: 'Failed to save your information. Please try again.',
                success: false 
            });
        }

        console.log(`New lead saved: ${name} (${email}) - ID: ${this.lastID}`);

        // TODO: Send email notification here
        // sendLeadNotification({ name, email, company, phone, message, fleet_size, current_solution });

        res.json({ 
            success: true, 
            message: 'Thank you! We\'ll be in touch soon.',
            leadId: this.lastID 
        });
    });
});

// Savings calculator endpoint
app.post('/api/calculator', (req, res) => {
    const { fleet_size, monthly_fuel_cost, efficiency_improvement } = req.body;

    // Validation
    if (!fleet_size || !monthly_fuel_cost || efficiency_improvement === undefined) {
        return res.status(400).json({ 
            error: 'Fleet size, monthly fuel cost, and efficiency improvement are required',
            success: false 
        });
    }

    // Calculate savings
    const annualFuelCost = monthly_fuel_cost * 12;
    const efficiencyDecimal = efficiency_improvement / 100;
    const annualSavings = annualFuelCost * efficiencyDecimal;
    const monthlySavings = annualSavings / 12;

    // Additional calculations
    const tracerMonthlyCost = fleet_size * 25; // Assume $25 per vehicle per month
    const netMonthlySavings = monthlySavings - tracerMonthlyCost;
    const roiMonths = tracerMonthlyCost > 0 ? (tracerMonthlyCost / monthlySavings) : 0;

    const results = {
        fleet_size: parseInt(fleet_size),
        monthly_fuel_cost: parseFloat(monthly_fuel_cost),
        efficiency_improvement: parseFloat(efficiency_improvement),
        estimated_monthly_savings: Math.round(monthlySavings),
        estimated_annual_savings: Math.round(annualSavings),
        tracer_monthly_cost: tracerMonthlyCost,
        net_monthly_savings: Math.round(netMonthlySavings),
        roi_months: Math.round(roiMonths * 10) / 10, // Round to 1 decimal
        success: true
    };

    // Save calculator usage
    const insertUsage = `
        INSERT INTO calculator_usage (fleet_size, monthly_fuel_cost, efficiency_improvement, estimated_savings)
        VALUES (?, ?, ?, ?)
    `;

    db.run(insertUsage, [fleet_size, monthly_fuel_cost, efficiency_improvement, annualSavings], function(err) {
        if (err) {
            console.error('Error saving calculator usage:', err.message);
        }
    });

    res.json(results);
});

// Get all leads (for admin/internal use)
app.get('/api/admin/leads', (req, res) => {
    // TODO: Add authentication here for production
    const query = `
        SELECT id, name, email, company, phone, message, fleet_size, current_solution, created_at, status
        FROM leads 
        ORDER BY created_at DESC
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching leads:', err.message);
            return res.status(500).json({ error: 'Failed to fetch leads' });
        }

        res.json({ leads: rows, count: rows.length });
    });
});

// Get calculator usage statistics
app.get('/api/admin/calculator-stats', (req, res) => {
    // TODO: Add authentication here for production
    const query = `
        SELECT 
            COUNT(*) as total_calculations,
            AVG(fleet_size) as avg_fleet_size,
            AVG(estimated_savings) as avg_estimated_savings,
            DATE(created_at) as date,
            COUNT(*) as daily_count
        FROM calculator_usage 
        GROUP BY DATE(created_at)
        ORDER BY date DESC
        LIMIT 30
    `;

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error('Error fetching calculator stats:', err.message);
            return res.status(500).json({ error: 'Failed to fetch calculator statistics' });
        }

        res.json({ stats: rows });
    });
});

// Placeholder for future Stripe integration
app.post('/api/create-payment-intent', (req, res) => {
    // TODO: Implement Stripe payment intent creation
    res.json({ 
        message: 'Stripe integration coming soon',
        success: false,
        placeholder: true 
    });
});

// Serve the main website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Catch-all handler for SPA routing (if needed)
app.get('*', (req, res) => {
    // If the request is for an API route that doesn't exist
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    
    // Otherwise, serve the main app (useful for single-page applications)
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        success: false 
    });
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down gracefully...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
        process.exit(0);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚛 Tracer server running on port ${PORT}`);
    console.log(`📊 Admin panel: http://localhost:${PORT}/api/admin/leads`);
    console.log(`💾 Database: ${dbPath}`);
});

module.exports = app;