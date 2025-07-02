# Tracer Fleet Telematics Platform

## Overview

Tracer Fleet is a modern fleet telematics website built as a full-stack application. The project consists of a complete Node.js/Express backend with functional APIs and a React frontend that presents fleet telematics solutions professionally. The architecture follows a monorepo structure with shared schemas and a clear separation between client and server code.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod schemas for request/response validation
- **Storage**: In-memory storage implementation with interface for future database integration

### Design System
- **Component Library**: Shadcn/ui "new-york" style
- **Color Scheme**: Custom "Tracer" brand colors (blue primary, neutral grays)
- **Typography**: Inter font family
- **Responsive**: Mobile-first design approach

## Key Components

### Backend Components
1. **API Routes** (`server/routes.ts`)
   - Health check endpoint (`/api/health`)
   - Lead capture endpoint (`/api/leads`)
   - Savings calculator endpoint (`/api/calculator`)

2. **Data Storage** (`server/storage.ts`)
   - Interface-based storage abstraction
   - In-memory implementation for development
   - User and lead management capabilities

3. **Schema Validation** (`shared/schema.ts`)
   - Drizzle ORM table definitions
   - Zod validation schemas
   - Type-safe data models

### Frontend Components
1. **Page Components**
   - Home page with full website layout
   - 404 Not Found page

2. **Feature Components**
   - Navigation with smooth scrolling
   - Hero section with CTA buttons
   - Features showcase sections
   - Statistics display
   - Savings calculator with real-time calculations
   - Lead capture form with validation
   - Team/role-based sections
   - Footer with company information

3. **UI Components**
   - Complete Shadcn/ui component library
   - Custom branded components
   - Form components with validation
   - Toast notifications

## Data Flow

### Lead Capture Flow
1. User fills out contact form on frontend
2. Form validates using Zod schema
3. Data sent via POST to `/api/leads`
4. Backend validates and stores lead data
5. Success response triggers UI confirmation

### Savings Calculator Flow
1. User inputs fleet parameters (size, fuel cost, efficiency improvement)
2. Real-time form validation
3. Data sent to `/api/calculator`
4. Backend calculates ROI, savings, and costs
5. Results displayed immediately in UI

### Navigation Flow
- Single-page application with smooth scrolling navigation
- Wouter handles client-side routing
- Section-based navigation using element IDs

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Vite for build tooling and development server
- Express.js for backend API
- Drizzle ORM for database management

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography
- Class Variance Authority for component variants

### Data Management
- TanStack Query for server state management
- Zod for schema validation and type safety
- Date-fns for date manipulation

### Database and Storage
- Neon Database as PostgreSQL provider
- Drizzle Kit for schema migrations
- Connect-pg-simple for session storage

## Deployment Strategy

### Development Environment
- Vite dev server for frontend with HMR
- Express server with TypeScript compilation via tsx
- Shared build process for client and server
- Environment variable management for database connection

### Production Build
1. Frontend builds to `dist/public` directory
2. Backend compiles to `dist/index.js` using esbuild
3. Single Node.js process serves both static files and API
4. Database migrations handled via Drizzle Kit

### Environment Configuration
- `NODE_ENV` determines development vs production mode
- `DATABASE_URL` required for PostgreSQL connection
- Replit-specific configurations for deployment platform

## Changelog

```
Changelog:
- July 02, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```