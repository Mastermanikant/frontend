import { DEFAULT_STYLE } from './componentLibrary';

export const TEMPLATE_CATEGORIES = [
  'All',
  'SaaS & AI',
  'Portfolio / Personal',
  'Agency',
  'E-Commerce',
  'Course & Blog',
  'Business & Services'
];

export const TEMPLATES = [
  // ── 1. SAAS & AI FULL PAGE WEBSITE ─────────────────────────────────────
  {
    id: 'tpl-ai-saas',
    name: 'AI Image & Text Generator SaaS',
    category: 'SaaS & AI',
    thumbnailBg: 'from-purple-950 via-slate-900 to-indigo-950',
    description: 'Full-page AI SaaS website with Navbar, Hero Banner, 3 Feature Cards, Pricing Grid, and Footer.',
    isFullPage: true,
    pageData: {
      navbar: { logo: '⚡ GenAI Studio', links: ['Features', 'Pricing', 'Docs', 'Showcase'], cta: 'Get Started' },
      hero: {
        badge: '✨ Powered by Gemini 3.5 & GPT-4o',
        headline: 'Generate Production-Ready Frontends with Artificial Intelligence',
        subheadline: 'Describe your vision or select visual components. Generate clean React + Tailwind CSS code instantly.',
        primaryBtn: '🚀 Launch AI Studio Free',
        secondaryBtn: 'View Components'
      },
      features: [
        { icon: '✨', title: 'Visual Canva Stage', desc: 'Drag and drop elements with live CSS token updates.' },
        { icon: '⚡', title: '1-Click React Code', desc: 'Export production-ready JSX code without bloat.' },
        { icon: '🎨', title: '100+ Google Fonts', desc: 'Instant font search and live typography tuning.' }
      ],
      pricing: [
        { plan: 'Starter', price: '$0', desc: 'Free forever for hobbyists', cta: 'Get Started Free' },
        { plan: 'Pro SaaS', price: '$29/mo', desc: 'For indie hackers & freelancers', cta: 'Start 14-Day Trial', highlight: true },
        { plan: 'Agency', price: '$99/mo', desc: 'Unlimited team seats & exports', cta: 'Contact Sales' }
      ],
      footer: { copyright: '© 2026 GenAI Studio Inc. All rights reserved.', links: ['Privacy', 'Terms', 'GitHub', 'Twitter'] }
    }
  },

  // ── 2. PORTFOLIO / PERSONAL FULL PAGE WEBSITE ──────────────────────────
  {
    id: 'tpl-dev-portfolio',
    name: '3D Developer & Vibe Portfolio',
    category: 'Portfolio / Personal',
    thumbnailBg: 'from-cyan-950 via-slate-900 to-emerald-950',
    description: 'Complete Developer portfolio with Hero Bio, Tech Stack Grid, Featured Projects & Contact Form.',
    isFullPage: true,
    pageData: {
      navbar: { logo: '👨‍💻 Manikant.dev', links: ['About', 'Projects', 'Tech Stack', 'Contact'], cta: 'Hire Me' },
      hero: {
        badge: '🟢 Available for Full-Stack & UI Projects',
        headline: 'Senior UI Architect & SaaS Product Engineer',
        subheadline: 'Building $50K SaaS Web Applications, Design Systems, and High-Performance Frontend Labs.',
        primaryBtn: '💼 View Portfolio Projects',
        secondaryBtn: 'Download Resume'
      },
      features: [
        { icon: '🚀', title: 'Frontend Architecture', desc: 'React 18, Vite, Tailwind CSS, System Design.' },
        { icon: '⚡', title: 'Performance Optimization', desc: 'Sub-second load times, 100/100 Lighthouse scores.' },
        { icon: '🎨', title: 'UI/UX Design Systems', desc: 'Canva-style drag and drop tools & component labs.' }
      ],
      pricing: [
        { plan: 'Hourly Consulting', price: '$85/hr', desc: 'Code audits & UI redesigns', cta: 'Book Hour Session' },
        { plan: 'Full MVP Development', price: '$4,999', desc: 'Complete React + Node web app in 2 weeks', cta: 'Start Project', highlight: true },
        { plan: 'Enterprise Advisory', price: '$9,999/mo', desc: 'Dedicated team fractional CTO & lead engineer', cta: 'Schedule Call' }
      ],
      footer: { copyright: '© 2026 Manikant. All rights reserved.', links: ['GitHub', 'Twitter', 'LinkedIn', 'Email'] }
    }
  },

  // ── 3. AGENCY FULL PAGE WEBSITE ────────────────────────────────────────
  {
    id: 'tpl-agency-bento',
    name: 'Bento Grid Creative Agency',
    category: 'Agency',
    thumbnailBg: 'from-pink-950 via-slate-900 to-rose-950',
    description: 'Full-page Agency layout with Bento Grid showcase, Client Testimonials & Strategy Booking.',
    isFullPage: true,
    pageData: {
      navbar: { logo: '🔥 Vibe Agency', links: ['Services', 'Case Studies', 'Process', 'Contact'], cta: 'Book Call' },
      hero: {
        badge: '🏆 Award-Winning Product Design Agency',
        headline: 'We Craft Digital Products That Drive Millions in Revenue',
        subheadline: 'From stealth startups to fortune 500 brands, we design scalable web & mobile experiences.',
        primaryBtn: '📅 Schedule 15-Min Call',
        secondaryBtn: 'Explore Case Studies'
      },
      features: [
        { icon: '🎨', title: 'Product Strategy & UX', desc: 'In-depth user research and interactive wireframes.' },
        { icon: '💻', title: 'Full-Stack Web Dev', desc: 'React, Next.js, Cloudflare Edge infrastructure.' },
        { icon: '📈', title: 'Growth & CRO', desc: 'Conversion rate optimization and landing page audits.' }
      ],
      pricing: [
        { plan: 'Landing Page Sprint', price: '$2,500', desc: 'Delivered in 5 business days', cta: 'Book Sprint' },
        { plan: 'Full Product Design', price: '$7,500', desc: 'Complete SaaS UI/UX design & React code', cta: 'Start Product', highlight: true },
        { plan: 'Monthly Retainer', price: '$12,000/mo', desc: 'Dedicated design & dev squad', cta: 'Contact Founder' }
      ],
      footer: { copyright: '© 2026 Vibe Agency Inc. All rights reserved.', links: ['Dribbble', 'Behance', 'Twitter', 'Contact'] }
    }
  },

  // ── 4. E-COMMERCE FULL PAGE WEBSITE ────────────────────────────────────
  {
    id: 'tpl-ecommerce-store',
    name: 'Modern Web3 E-Commerce Store',
    category: 'E-Commerce',
    thumbnailBg: 'from-amber-950 via-slate-900 to-yellow-950',
    description: 'Full online store page with Featured Product Hero, Specs Grid, Price Tiers & Checkout CTA.',
    isFullPage: true,
    pageData: {
      navbar: { logo: '🎧 Aura Audio', links: ['Headphones', 'Earbuds', 'Accessories', 'Support'], cta: 'Cart (0)' },
      hero: {
        badge: '🔥 New Release — ANC Studio Pro',
        headline: 'Immersive Active Noise-Canceling Wireless Headphones',
        subheadline: '50-hour battery life, spatial audio, and handcrafted leather memory foam earcups.',
        primaryBtn: '🛒 Buy Now — $299',
        secondaryBtn: 'View 3D Demo'
      },
      features: [
        { icon: '🔋', title: '50-Hour Battery', desc: 'Fast charge 10 mins for 5 hours playback.' },
        { icon: '🎧', title: 'Spatial Audio 360', desc: 'Head-tracking immersive studio acoustics.' },
        { icon: '🛡️', title: '2-Year Warranty', desc: 'Risk-free 30-day money-back guarantee.' }
      ],
      pricing: [
        { plan: 'Studio Pro', price: '$299', desc: 'Wireless ANC Headphones + Travel Case', cta: 'Order Studio Pro', highlight: true },
        { plan: 'Studio Ultra', price: '$399', desc: 'Includes Lossless DAC Cable & Stand', cta: 'Order Studio Ultra' }
      ],
      footer: { copyright: '© 2026 Aura Audio Inc. All rights reserved.', links: ['Shipping', 'Returns', 'Warranty', 'Support'] }
    }
  }
];
