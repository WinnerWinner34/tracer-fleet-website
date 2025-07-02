# 🚛 Tracer Fleet Website Backend

A complete Node.js backend for the Tracer fleet telematics website with lead capture, savings calculator, and future e-commerce capabilities.

## 🚀 Quick Start

### Local Development Setup

1. **Clone/Download** this project to your local machine

2. **Install Node.js** (if not installed):
   - Download from https://nodejs.org/
   - Choose LTS version (recommended)

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Environment Setup**:
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env with your settings (optional for basic usage)
   ```

5. **Start the Server**:
   ```bash
   # Development mode (auto-restarts on changes)
   npm run dev
   
   # OR production mode
   npm start
   ```

6. **Access Your Site**:
   - Website: http://localhost:3000
   - Admin Panel: http://localhost:3000/api/admin/leads
   - Health Check: http://localhost:3000/api/health

### Frontend Setup

Place your HTML, CSS, and JavaScript files in the `public/` folder:

```
public/
├── index.html          # Main homepage
├── products.html       # Products page
├── about.html          # About page
├── order.html          # Order page
├── resources.html      # Resources page
├── css/
│   └── styles.css      # Your TailwindCSS styles
├── js/
│   └── main.js         # Your JavaScript
└── images/
    └── logo.svg        # Tracer logo
```

## 📊 Database Schema

### Leads Table
- `id` - Auto-incrementing primary key
- `name` - Lead's full name (required)
- `email` - Lead's email address (required)
- `company` - Company name (optional)
- `phone` - Phone number (optional)
- `message` - Additional message (optional)
- `fleet_size` - Number of vehicles (optional)
- `current_solution` - Current telematics solution (optional)
- `created_at` - Timestamp
- `status` - Lead status (new, contacted, qualified, etc.)

### Calculator Usage Table
- `id` - Auto-incrementing primary key
- `fleet_size` - Number of vehicles
- `monthly_fuel_cost` - Monthly fuel expenses
- `efficiency_improvement` - Expected efficiency gain percentage
- `estimated_savings` - Calculated annual savings
- `created_at` - Timestamp
- `lead_id` - Foreign key to leads table (optional)

## 🔌 API Endpoints

### Public Endpoints

#### `POST /api/leads`
Submit a new lead from the "Request More Information" form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@company.com",
  "company": "ABC Logistics",
  "phone": "+1-555-123-4567",
  "message": "Interested in fleet tracking",
  "fleet_size": 25,
  "current_solution": "Excel spreadsheets"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you! We'll be in touch soon.",
  "leadId": 123
}
```

#### `POST /api/calculator`
Calculate potential savings based on fleet parameters.

**Request Body:**
```json
{
  "fleet_size": 50,
  "monthly_fuel_cost": 12000,
  "efficiency_improvement": 15
}
```

**Response:**
```json
{
  "fleet_size": 50,
  "monthly_fuel_cost": 12000,
  "efficiency_improvement": 15,
  "estimated_monthly_savings": 1800,
  "estimated_annual_savings": 21600,
  "tracer_monthly_cost": 1250,
  "net_monthly_savings": 550,
  "roi_months": 8.3,
  "success": true
}
```

### Admin Endpoints

#### `GET /api/admin/leads`
Retrieve all leads (add authentication in production).

#### `GET /api/admin/calculator-stats`
Get calculator usage statistics.

#### `GET /api/health`
Health check endpoint.

## 🚀 Deployment Options

### Option 1: Your Personal Machine
```bash
# Run locally
npm start

# Access at http://localhost:3000
```

### Option 2: Replit
1. Create new Node.js Repl
2. Upload all files
3. Run `npm install`
4. Click "Run"

### Option 3: Your Server
```bash
# On your server
git clone [your-repo-url]
cd tracer-website
npm install
npm start

# For production, use PM2 or similar
npm install -g pm2
pm2 start server.js --name tracer-website
```

## 🔧 Configuration

### Environment Variables (.env)

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `EMAIL_*` - Email configuration for lead notifications
- `STRIPE_*` - Stripe keys for future payment integration

### Email Notifications

To enable email notifications when leads are submitted:

1. Update `.env` with your email settings:
   ```bash
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=leads@tracerfleet.com
   ENABLE_EMAIL_NOTIFICATIONS=true
   ```

2. For Gmail, use an App Password instead of your regular password.

## 🛡️ Security Features

- **Rate Limiting**: Prevents form spam (5 submissions per 15 minutes per IP)
- **Input Validation**: Validates email format and required fields
- **Helmet.js**: Adds security headers
- **CORS**: Configurable cross-origin resource sharing
- **SQL Injection Protection**: Uses parameterized queries

## 🔮 Future Enhancements

### Ready for Implementation:
- **Stripe Integration**: Payment processing endpoints are stubbed
- **Email Notifications**: Nodemailer is included and configured
- **Admin Authentication**: Basic structure ready for login system
- **Advanced Analytics**: Database schema supports detailed tracking

### To Add:
- User authentication for admin panel
- Email templates for lead notifications
- Stripe payment processing
- Advanced lead management features
- A/B testing for the savings calculator

## 📁 File Structure

```
tracer-website/
├── server.js              # Main Express server
├── package.json            # Dependencies and scripts
├── .env.example           # Environment configuration template
├── .env                   # Your actual environment config (create this)
├── tracer.db              # SQLite database (auto-created)
├── public/                # Frontend files go here
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── images/
├── scripts/               # Utility scripts
└── README.md              # This file
```

## 🆘 Troubleshooting

### Common Issues:

1. **Port already in use**:
   ```bash
   # Change PORT in .env file or kill existing process
   lsof -ti:3000 | xargs kill
   ```

2. **Database permission errors**:
   ```bash
   # Ensure write permissions in project directory
   chmod 755 .
   ```

3. **Module not found errors**:
   ```bash
   # Reinstall dependencies
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📞 Support

For questions about this backend:
- Check the console output for error messages
- Verify all environment variables are set correctly
- Ensure Node.js version is 16+ (`node --version`)

Ready to build something amazing! 🚀