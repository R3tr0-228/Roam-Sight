# Roam Sight - Premium Desert Tours & Adventures

A production-ready Next.js travel website showcasing premium desert tours and cultural adventures in the UAE. Built with modern web technologies and best practices for performance, accessibility, and SEO.

![Roam Sight](https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop)

## 🚀 Features

### Core Features
- **5 Main Pages**: Home, Tours, Tour Details, About, Contact
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Routing**: Tour detail pages with static generation
- **Search & Filter**: Advanced filtering for tours by category, price, duration
- **Contact Form**: Validated contact form with success/error handling
- **SEO Optimized**: Meta tags, sitemap, robots.txt, structured data

### Enhanced Features
- **Dark Mode**: Toggle between light and dark themes
- **Animations**: Smooth transitions with Framer Motion
- **Image Gallery**: Lightbox modal for tour images
- **Breadcrumbs**: Navigation breadcrumbs for better UX
- **Testimonials**: Customer reviews with ratings
- **Newsletter**: Email subscription functionality
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Static Generation**: `getStaticProps` and `getStaticPaths` for optimal performance
- **API Routes**: Mock endpoints for contact and newsletter
- **Form Validation**: React Hook Form with Yup validation
- **Testing**: Jest and React Testing Library tests
- **Code Quality**: ESLint, Prettier, and consistent formatting

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Yup
- **Carousel**: Swiper.js
- **SEO**: Next-SEO
- **Notifications**: React Hot Toast
- **Testing**: Jest + React Testing Library
- **Maps**: Leaflet (ready for integration)

## 📋 Prerequisites

- Node.js 16+ 
- npm or yarn package manager
- Git

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/explorer-nature.git
   cd explorer-nature
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
explorer-nature/
├── components/           # Reusable React components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation component
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section with carousel
│   ├── TourCard.tsx     # Tour card component
│   ├── ContactForm.tsx  # Contact form with validation
│   ├── SearchFilter.tsx # Search and filter component
│   ├── Breadcrumbs.tsx  # Navigation breadcrumbs
│   ├── Carousel.tsx     # Reusable carousel component
│   ├── Testimonials.tsx # Testimonials component
│   └── NewsletterForm.tsx # Newsletter subscription
├── pages/               # Next.js pages
│   ├── index.tsx        # Homepage
│   ├── _app.tsx         # App wrapper
│   ├── about.tsx        # About page
│   ├── contact.tsx      # Contact page
│   ├── tours/
│   │   ├── index.tsx    # Tours listing page
│   │   └── [slug].tsx   # Dynamic tour detail page
│   └── api/             # API routes
│       ├── contact.ts   # Contact form endpoint
│       └── newsletter.ts # Newsletter endpoint
├── data/                # Mock data files
│   ├── tours.json       # Tour data
│   ├── categories.json  # Category data
│   └── testimonials.json # Testimonial data
├── styles/              # Global styles
│   └── globals.css      # Tailwind CSS and custom styles
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared types
├── tests/               # Test files
│   ├── TourCard.test.tsx
│   └── ContactForm.test.tsx
├── public/              # Static assets
│   ├── images/          # Image assets
│   ├── sitemap.xml      # SEO sitemap
│   └── robots.txt       # SEO robots file
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.js
    ├── next.config.js
    ├── jest.config.js
    ├── .eslintrc.js
    └── .prettierrc
```

## 🎨 Design System

### Color Palette
- **Primary**: Desert orange (#f1760a)
- **Gold**: Warm gold (#f59e0b)
- **Sand**: Neutral sand tones (#78716c)
- **Dark Mode**: Full dark theme support

### Typography
- **Headings**: Merriweather (serif)
- **Body**: Inter (sans-serif)
- **Responsive**: Fluid typography scales

### Components
- **Cards**: Soft shadows with hover effects
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Forms**: Consistent styling with validation states
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Available Scripts

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

## 📊 Data Structure

### Tour Object
```typescript
interface Tour {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  duration: string;
  location: string;
  category: string;
  difficulty: 'easy' | 'moderate' | 'challenging';
  groupSize: string;
  includes: string[];
  highlights: string[];
  itinerary: ItineraryItem[];
  images: string[];
  rating: number;
  reviewsCount: number;
  featured: boolean;
}
```

### Category Object
```typescript
interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: 'primary' | 'gold' | 'sand';
  featured: boolean;
}
```

## 🔌 API Endpoints

### Contact Form (`/api/contact`)
- **Method**: POST
- **Body**: `{ name, email, phone?, message, tourInterest? }`
- **Response**: `{ success: boolean, message?: string }`

### Newsletter (`/api/newsletter`)
- **Method**: POST
- **Body**: `{ email }`
- **Response**: `{ success: boolean, message?: string }`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
npm run start
```

### Environment Variables
Create a `.env.local` file for production:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

The project includes tests for:
- **TourCard Component**: Rendering, props, interactions
- **ContactForm Component**: Form validation, submission, error handling

## 🔍 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Sitemap**: Auto-generated sitemap.xml
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD for rich snippets
- **Performance**: Optimized images and code splitting

## ♿ Accessibility

- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: 
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large: 1280px+

## 🎯 Performance

- **Static Generation**: Pre-rendered pages for fast loading
- **Image Optimization**: Next.js Image component
- **Code Splitting**: Automatic route-based splitting
- **Lazy Loading**: Images and components loaded on demand

## 🔧 Customization

### Adding New Tours
1. Add tour data to `data/tours.json`
2. Include tour images in `public/images/`
3. Update sitemap.xml if needed

### Styling Changes
1. Modify `tailwind.config.js` for theme changes
2. Update `styles/globals.css` for custom styles
3. Use Tailwind utility classes for component styling

### Adding New Pages
1. Create new page in `pages/` directory
2. Add to navigation in `components/Navbar.tsx`
3. Update sitemap.xml

## 📈 Analytics Integration

Ready for integration with:
- Google Analytics
- Google Tag Manager
- Facebook Pixel
- Custom analytics solutions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Example Git Commit History

```
feat: initial project setup with Next.js and TypeScript
feat: add Tailwind CSS configuration and base styles
feat: implement responsive navbar with dark mode toggle
feat: create homepage with hero section and featured tours
feat: build tours listing page with search and filter
feat: implement dynamic tour detail pages with static generation
feat: add contact page with validated form and API endpoint
feat: implement SEO optimization with meta tags and sitemap
feat: add unit tests for core components
feat: enhance UI with animations and improved accessibility
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Images**: Unsplash for high-quality desert and travel images
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts for Merriweather and Inter
- **Inspiration**: Modern travel websites and UX best practices

## 📞 Support

For support, email info@roamsight.com or create an issue in the repository.

---

**Built with ❤️ for desert adventure enthusiasts**

