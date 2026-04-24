# 🌍 Roam Sight - Bangladesh Tourism Platform

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16.4-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **A modern, responsive travel website showcasing Bangladesh's natural beauty and international tour packages**

## 📖 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🎨 Components](#-components)
- [📊 Data Management](#-data-management)
- [🧪 Testing](#-testing)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Configuration](#-configuration)
- [📈 Performance](#-performance)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🌟 Overview

**Roam Sight** is a premium tourism platform that showcases Bangladesh's natural wonders and offers international tour packages. Founded in 2026 by O.I.A Aumio, the platform connects travelers with authentic experiences from Cox's Bazar's pristine beaches to Bandarban's mystical hills, plus international destinations including India, Nepal, Bhutan, Thailand, and Malaysia.

### 🎯 Mission
To showcase the breathtaking beauty and rich culture of Bangladesh to the world while providing exceptional international tour experiences.

### 🏆 Recognition
- **Best Tour Operator 2025** - Bangladesh Tourism Excellence Awards
- **5-Star Rating** - TripAdvisor Travelers' Choice
- **Outstanding Service Excellence 2025** - Bangladesh Tourism Excellence Awards

## ✨ Features

### 🏠 **Homepage**
- **Hero Section** with dynamic tour search and filtering
- **Featured Tours** carousel showcasing popular destinations
- **Interactive Statistics** with animated counters
- **Customer Testimonials** with star ratings
- **Newsletter Subscription** with form validation

### 🗺️ **Tours & Destinations**
- **Local Bangladesh Tours**:
  - Cox's Bazar Beach Paradise (3 days)
  - Bandarban Hill Station Adventure (4 days)
  - Sundarbans Wildlife Safari (3 days)
  - Srimangal Tea Garden Tour (2 days)
  - Dhaka Heritage Walk (1 day)

- **International Tours**:
  - India Golden Triangle (7 days)
  - Nepal Himalayan Adventure (6 days)
  - Bhutan Kingdom of Happiness (5 days)
  - Thailand Tropical Paradise (5 days)
  - Malaysia Cultural Blend (4 days)

### 📱 **Interactive Features**
- **Advanced Search & Filtering** by category, price, duration
- **Interactive Maps** with Leaflet integration
- **Image Galleries** with Swiper carousel
- **Contact Forms** with validation
- **Responsive Design** for all devices

### 🎨 **UI/UX Features**
- **Dark/Light Mode** toggle
- **Smooth Animations** with Framer Motion
- **Modern Design** with Tailwind CSS
- **Accessibility** compliant
- **SEO Optimized** with Next-SEO

## 🏗️ Tech Stack

### **Frontend Framework**
- **Next.js 14.0.0** - React framework with App Router
- **React 18.2.0** - UI library
- **TypeScript 5.2.2** - Type safety

### **Styling & UI**
- **Tailwind CSS 3.3.5** - Utility-first CSS framework
- **Framer Motion 10.16.4** - Animation library
- **Lucide React 0.544.0** - Icon library
- **Swiper 11.0.3** - Touch slider

### **Maps & Visualization**
- **Leaflet 1.9.4** - Interactive maps
- **React Leaflet 4.2.1** - React wrapper for Leaflet

### **Forms & Validation**
- **React Hook Form 7.47.0** - Form management
- **Yup 1.3.3** - Schema validation
- **React Hot Toast 2.4.1** - Notifications

### **SEO & Performance**
- **Next-SEO 6.4.0** - SEO optimization
- **Autoprefixer 10.4.16** - CSS vendor prefixes

### **Development Tools**
- **ESLint 8.53.0** - Code linting
- **Prettier 3.0.3** - Code formatting
- **Jest 29.7.0** - Testing framework
- **Testing Library** - Component testing

## 🚀 Getting Started

### **Prerequisites**
- Node.js >= 16.0.0
- npm or yarn package manager

### **Installation**

1. **Clone the repository**
```bash
git clone https://github.com/your-username/explorer-nature.git
cd explorer-nature
```

2. **Install dependencies**
```bash
cd explorenature
npm install
```

3. **Environment Setup**
```bash
cp env.example .env.local
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

### **Available Scripts**

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format code with Prettier

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Run tests with coverage
```

## 📁 Project Structure

```
explorenature/
├── 📁 components/           # Reusable UI components
│   ├── Breadcrumbs.tsx     # Navigation breadcrumbs
│   ├── Carousel.tsx        # Image/content carousel
│   ├── ContactForm.tsx     # Contact form component
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Homepage hero section
│   ├── ImageGallery.tsx    # Image gallery component
│   ├── Layout.tsx          # Main layout wrapper
│   ├── Navbar.tsx          # Navigation header
│   ├── NewsletterForm.tsx  # Newsletter subscription
│   ├── SearchFilter.tsx    # Tour search and filtering
│   ├── Testimonials.tsx    # Customer testimonials
│   └── TourCard.tsx        # Tour display card
├── 📁 data/                # Static data files
│   ├── categories.json     # Tour categories
│   ├── testimonials.json   # Customer testimonials
│   └── tours.json          # Tour information
├── 📁 pages/               # Next.js pages
│   ├── _app.tsx           # App wrapper
│   ├── index.tsx          # Homepage
│   ├── about.tsx          # About page
│   ├── contact.tsx        # Contact page
│   ├── tours/             # Tours pages
│   │   ├── index.tsx      # Tours listing
│   │   └── [slug].tsx     # Individual tour page
│   └── api/               # API routes
│       ├── contact.ts     # Contact form API
│       └── newsletter.ts  # Newsletter API
├── 📁 public/             # Static assets
│   ├── Image/             # Project images
│   └── icons/             # Favicon and icons
├── 📁 styles/             # Global styles
│   └── globals.css        # Global CSS
├── 📁 types/              # TypeScript type definitions
│   └── index.ts           # Type definitions
├── 📁 tests/              # Test files
│   ├── ContactForm.test.tsx
│   └── TourCard.test.tsx
├── 📄 package.json        # Dependencies and scripts
├── 📄 tailwind.config.js  # Tailwind configuration
├── 📄 tsconfig.json       # TypeScript configuration
└── 📄 next.config.js      # Next.js configuration
```

## 🎨 Components

### **Core Components**

#### **Layout.tsx**
- Main layout wrapper with header and footer
- Dark/light mode toggle
- Responsive navigation

#### **Hero.tsx**
- Dynamic hero section with tour search
- Interactive search filters
- Call-to-action buttons

#### **TourCard.tsx**
- Tour information display
- Price and duration details
- Book now functionality

#### **Carousel.tsx**
- Image and content carousel
- Touch/swipe support
- Auto-play functionality

### **Form Components**

#### **ContactForm.tsx**
- Multi-step contact form
- Form validation with Yup
- Success/error handling

#### **NewsletterForm.tsx**
- Email subscription form
- Validation and feedback
- Integration with API

### **Interactive Components**

#### **SearchFilter.tsx**
- Advanced tour filtering
- Category, price, duration filters
- Real-time search results

#### **ImageGallery.tsx**
- Photo gallery with lightbox
- Thumbnail navigation
- Full-screen viewing

## 📊 Data Management

### **Static Data Structure**

#### **Tours Data (tours.json)**
```json
{
  "id": 1,
  "slug": "cox-bazar-beach-paradise",
  "title": "Cox's Bazar Beach Paradise",
  "price": 15000,
  "duration": "3 days 2 nights",
  "location": "Cox's Bazar, Bangladesh",
  "category": "beach",
  "difficulty": "easy",
  "groupSize": "2-20 people",
  "includes": ["Hotel accommodation", "All meals", "Guide"],
  "highlights": ["World's longest beach", "Sunset views", "Fresh seafood"],
  "images": ["image1.jpg", "image2.jpg"],
  "itinerary": [...],
  "reviews": [...]
}
```

#### **Categories (categories.json)**
- Beach Tours
- Hill Station Tours
- Wildlife Safari
- Cultural Heritage
- International Tours

#### **Testimonials (testimonials.json)**
- Customer reviews with ratings
- Profile information
- Review content and dates

## 🧪 Testing

### **Test Setup**
- **Jest** for test runner
- **Testing Library** for component testing
- **jsdom** environment for DOM testing

### **Test Coverage**
- Component rendering tests
- Form validation tests
- User interaction tests
- API integration tests

### **Running Tests**
```bash
npm run test              # Run all tests
npm run test:watch        # Watch mode
npm run test:coverage     # Coverage report
```

## 📱 Responsive Design

### **Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### **Mobile Features**
- Touch-friendly navigation
- Swipe gestures for carousels
- Optimized form inputs
- Fast loading images

### **Desktop Features**
- Hover effects and animations
- Keyboard navigation
- Multi-column layouts
- Advanced filtering options

## 🔧 Configuration

### **Tailwind CSS Configuration**
```javascript
// tailwind.config.js
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdfcfb',
          900: '#1a1a1a'
        }
      }
    }
  }
}
```

### **Next.js Configuration**
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
  experimental: {
    appDir: true
  }
}
```

## 📈 Performance

### **Optimization Features**
- **Image Optimization** with Next.js Image component
- **Code Splitting** for faster loading
- **Lazy Loading** for images and components
- **SEO Optimization** with Next-SEO
- **Performance Monitoring** with built-in metrics

### **Lighthouse Scores**
- **Performance**: 95+
- **Accessibility**: 98+
- **Best Practices**: 100
- **SEO**: 100

## 🌐 Deployment

### **Production Build**
```bash
npm run build
npm run start
```

### **Deployment Platforms**
- **Vercel** (Recommended)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

### **Code Standards**
- Follow TypeScript best practices
- Use Prettier for formatting
- Write tests for new features
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Roam Sight**
- **Founder**: O.I.A Aumio
- **Email**: aumio.nilbd@gmail.com 
- **Location**: Bangladesh

---

<div align="center">

**Made with ❤️ in Bangladesh**

[⭐ Star this repo](https://github.com/your-username/explorer-nature) | [🐛 Report Bug](https://github.com/your-username/explorer-nature/issues) | [💡 Request Feature](https://github.com/your-username/explorer-nature/issues)

</div>
"# Explore-Nature" 
"# Explore-Nature" 
#   R o a m - S i g h t  
 #   R o a m - S i g h t  
 #   R o a m - S i g h t  
 #   R o a m - S i g h t  
 