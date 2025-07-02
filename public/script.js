// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Calculator form handler
    const calculatorForm = document.getElementById('calculatorForm');
    const calculatorResults = document.getElementById('calculatorResults');
    
    calculatorForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(calculatorForm);
        const data = {
            fleet_size: parseInt(formData.get('fleet_size')),
            fuel_cost: parseFloat(formData.get('fuel_cost')),
            efficiency_improvement: parseFloat(formData.get('efficiency_improvement'))
        };
        
        try {
            showLoading(true);
            
            const response = await fetch('/api/calculator', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Failed to calculate savings');
            }
            
            const result = await response.json();
            
            // Update results display
            document.getElementById('monthlySavings').textContent = `$${result.monthly_savings.toLocaleString()}`;
            document.getElementById('annualSavings').textContent = `$${result.annual_savings.toLocaleString()}`;
            document.getElementById('roi').textContent = `${result.roi}%`;
            document.getElementById('monthlyCost').textContent = `$${result.monthly_cost.toLocaleString()}`;
            
            calculatorResults.style.display = 'block';
            calculatorResults.scrollIntoView({ behavior: 'smooth' });
            
        } catch (error) {
            console.error('Calculator error:', error);
            showMessage('Failed to calculate savings. Please try again.', 'error');
        } finally {
            showLoading(false);
        }
    });
    
    // Contact form handler
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            company: formData.get('company') || null,
            phone: formData.get('phone') || null,
            fleet_size: formData.get('fleet_size') ? parseInt(formData.get('fleet_size')) : null,
            current_solution: formData.get('current_solution') || null,
            message: formData.get('message') || null
        };
        
        try {
            showLoading(true);
            
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Failed to submit contact form');
            }
            
            showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Contact form error:', error);
            showMessage('Failed to send message. Please try again.', 'error');
        } finally {
            showLoading(false);
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Utility function to scroll to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Show/hide loading overlay
function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    overlay.style.display = show ? 'flex' : 'none';
}

// Show success/error messages
function showMessage(text, type = 'success') {
    const message = document.getElementById('successMessage');
    const textElement = message.querySelector('.success-text');
    const iconElement = message.querySelector('.success-icon');
    
    textElement.textContent = text;
    
    // Update icon based on message type
    if (type === 'error') {
        iconElement.setAttribute('data-lucide', 'x-circle');
        message.style.background = '#dc2626';
    } else {
        iconElement.setAttribute('data-lucide', 'check-circle');
        message.style.background = '#000';
    }
    
    // Re-initialize icons for the updated icon
    lucide.createIcons();
    
    message.style.display = 'flex';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        message.style.display = 'none';
    }, 5000);
}

// Handle scroll effects (optional - can add header background change on scroll)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav-container');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#000';
    } else {
        nav.style.backgroundColor = '#000';
    }
});