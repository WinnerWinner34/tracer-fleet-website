# 🧭 Tracer Website – Updated Product Specification Document (v2.0)

## 1. Project Status & Overview

**BACKEND STATUS: ✅ COMPLETE AND RUNNING**
- Node.js/Express server is built and operational
- SQLite database is configured and working
- All API endpoints are functional and tested
- Server runs on localhost:3000

**FRONTEND NEEDED:** Create a complete website frontend that connects to our existing backend APIs.

Tracer is a fleet telematics company. The frontend will:
- Present product information professionally
- Connect to existing lead capture API at `/api/leads`
- Integrate with existing savings calculator API at `/api/calculator`
- Include order placement preparation for future Stripe integration
- Mimic the visual and structural design of Motive's telematics page

**Reference Design:** https://gomotive.com/products/features/fleet-telematics/

## 2. Backend API Endpoints (Already Built)

### Lead Capture API
**Endpoint:** `POST /api/leads`
**Request Format:**
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

### Savings Calculator API  
**Endpoint:** `POST /api/calculator`
**Request Format:**
```json
{
  "fleet_size": 50,
  "monthly_fuel_cost": 12000,
  "efficiency_improvement": 15
}
```

**Response Format:**
```json
{
  "estimated_monthly_savings": 1800,
  "estimated_annual_savings": 21600,
  "tracer_monthly_cost": 1250,
  "net_monthly_savings": 550,
  "roi_months": 8.3,
  "success": true
}
```

### Health Check
**Endpoint:** `GET /api/health`

## 3. Pages & Navigation Structure

### Pages to Build (Frontend Files Needed)
- **Home** (`index.html`) - Main landing page with hero, features, calculator
- **Products** (`products.html`) - Product information and features  
- **About Tracer** (`about.html`) - Company information
- **Order Now** (`order.html`) - Placeholder order form for future Stripe
- **Resources** (`resources.html`) - Documentation, guides, support

### Navigation Bar Requirements
- Sticky header (remains visible while scrolling)
- Matches layout and spacing of Motive's site
- Logo (left-aligned) 
- Page links (right-aligned): Home, Products, About, Order Now, Resources
- "Order Now" button styled prominently

## 4. Page Content & Functionality

### Home Page Structure
1. **Hero Section:** Compelling headline, subheadline, primary CTA button
2. **Feature Sections:** Alternating image/text rows highlighting telematics benefits
3. **Icon Grid:** Key features with icons and descriptions
4. **Customer Stats/Testimonials:** Social proof section
5. **Savings Calculator:** Interactive calculator connecting to `/api/calculator` 
6. **Lead Capture Form:** "Request More Information" form connecting to `/api/leads`

### Savings Calculator Integration
- **Frontend:** Interactive form with fleet size, monthly fuel cost, efficiency sliders/inputs
- **Backend Connection:** POST to `/api/calculator` endpoint
- **Results Display:** Show estimated savings, ROI, and Tracer costs dynamically
- **Placement:** Bottom section of homepage

### Lead Capture Form Integration
- **Form Fields:** Name (required), Email (required), Company, Phone, Message, Fleet Size, Current Solution
- **Backend Connection:** POST to `/api/leads` endpoint
- **Validation:** Client-side validation + server response handling
- **Success State:** Thank you message on successful submission
- **Placement:** Prominent section on homepage, possibly modal or dedicated section

### Order Now Page
- Placeholder order form interface
- Prepare for future Stripe integration (style buttons/forms appropriately)
- Collection of basic order information

## 5. Design & Styling Requirements

### Visual Design
- **Clone layout, spacing, and flow** from Motive's fleet telematics page
- **Responsive design:** Works perfectly on mobile and desktop
- **Framework:** Use TailwindCSS for styling (utility classes only)

### Branding Elements

#### Logo Usage
- Use full-color "Tracer Fleet" SVG logo (primary)
- Fallback to black/white version for different backgrounds

#### Font Stack
```css
font-family: 'Inter', 'Roboto', -apple-system, Arial, sans-serif;
```

#### Color Palette
- **Primary Blue:** #1E90FF (from logo arrow)
- **Background White:** #FFFFFF  
- **Text Black:** #111827
- **Accent Grey:** #E5E7EB

## 6. Technical Implementation Requirements

### Frontend Technology Stack
- **HTML5** with semantic markup
- **TailwindCSS** for styling (utility classes only)
- **Vanilla JavaScript** for API connections and interactivity
- **Responsive design** for all device sizes

### API Integration Requirements
- **Fetch API** for connecting to backend endpoints
- **Error handling** for failed API calls
- **Loading states** for form submissions
- **Client-side validation** before API calls
- **CORS handling** (backend already configured)

### File Structure for Frontend
```
public/
├── index.html              # Homepage
├── products.html           # Products page  
├── about.html              # About page
├── order.html              # Order page
├── resources.html          # Resources page
├── css/
│   ├── styles.css          # Main styles
│   └── tailwind.min.css    # TailwindCSS
├── js/
│   ├── main.js             # Main JavaScript
│   ├── calculator.js       # Calculator functionality
│   └── forms.js            # Form handling
└── images/
    ├── logo.svg            # Tracer logo
    └── [feature-images]    # Product images
```

## 7. Specific Functionality Requirements

### Interactive Elements
- **Sticky navigation** across all pages
- **Smooth scrolling** for anchor links
- **Form validation** with real-time feedback
- **Calculator with live updates** as user types
- **Responsive mobile menu** (hamburger menu)
- **Loading indicators** during API calls

### Form Behavior
- **Lead capture form:** 
  - Show loading spinner during submission
  - Display success message on completion
  - Handle and display error messages
  - Reset form after successful submission

- **Savings calculator:**
  - Update results in real-time as inputs change
  - Format currency values properly
  - Show ROI timeline visually
  - Include call-to-action to contact sales

### Content Guidelines
- **Copy:** Professional, benefit-focused messaging for fleet managers
- **Tone:** Authoritative but approachable, technical but accessible
- **CTAs:** Clear action-oriented language ("Get Started", "Request Demo", "Calculate Savings")

## 8. Deployment Configuration

### Static File Serving
- All frontend files go in `/public/` directory
- Backend serves static files automatically
- No additional configuration needed

### Local Development
- Backend runs on `http://localhost:3000`
- Frontend automatically served by Express
- API calls go to same domain (no CORS issues)

### Production Readiness
- Files ready for deployment to any server
- Backend handles both frontend serving and API endpoints
- Database included and configured

## 9. Future Enhancement Hooks

### Stripe Integration Ready
- Order form structure prepared for payment processing
- Placeholder buttons and forms styled appropriately
- Backend endpoints stubbed for future implementation

### Email Notifications
- Backend configured for lead notification emails
- Environment variables prepared for SMTP setup

### Analytics Ready
- Structure prepared for Google Analytics integration
- Event tracking hooks for calculator usage and form submissions

## 10. Success Criteria

### Functional Requirements
✅ All pages load and navigate correctly  
✅ Lead capture form successfully submits to backend  
✅ Calculator connects to API and displays results  
✅ Responsive design works on mobile and desktop  
✅ Visual design closely matches Motive reference  

### Performance Requirements
✅ Fast page load times  
✅ Smooth animations and interactions  
✅ Accessible design with proper semantic markup  
✅ SEO-friendly structure and content  

---

## Ready for Frontend Development!

The backend is complete and running. The frontend needs to be built to connect to these existing, tested APIs. Focus on creating a professional, conversion-optimized website that matches the Motive design reference while integrating seamlessly with our Node.js backend.