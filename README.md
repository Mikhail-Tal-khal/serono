# SERENO Clearing & Forwarding Ltd Website

Professional website for SERENO Clearing & Forwarding Ltd - Mombasa's premier logistics and customs clearing company.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Local Development

1. **Clone or download the project**

2. **Install dependencies:**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. **Run the development server:**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

The page will auto-update as you edit files.

### Building for Production

To create an optimized production build:

\`\`\`bash
npm run build
# or
yarn build
# or
pnpm build
\`\`\`

To run the production build locally:

\`\`\`bash
npm start
# or
yarn start
# or
pnpm start
\`\`\`

## 📁 Project Structure

\`\`\`
sereno-clearing-website/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main landing page
│   └── globals.css               # Global styles and theme
├── public/
│   └── images/                   # Static images and assets
├── components/
│   └── ui/                       # Reusable UI components (shadcn/ui)
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies and scripts
└── tsconfig.json                 # TypeScript configuration
\`\`\`

## 🎨 Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Animated Backgrounds**: Smooth sliding image animations
- **Contact Form**: Integrated contact form with validation
- **Google Maps**: Embedded location map for easy directions
- **SEO Optimized**: Complete metadata for search engines
- **Performance**: Optimized images and lazy loading
- **Analytics**: Vercel Analytics and Speed Insights integrated

## 🛠️ Technologies Used

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics & Speed Insights

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy is using the Vercel Platform:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

Your site will be live with automatic HTTPS, global CDN, and continuous deployment.

### Other Deployment Options

This Next.js app can also be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean App Platform
- Any platform supporting Node.js

## 📧 Contact Form Setup

The contact form currently logs submissions to the console. To enable email functionality:

1. Choose an email service (Resend, SendGrid, etc.)
2. Add API keys to environment variables
3. Update `app/api/contact/route.ts` with email integration code

## 🎨 Customization

### Colors

Theme colors are defined in `app/globals.css`:
- Primary: `#8B1538` (Maroon)
- Accent: `#D4AF37` (Gold)

### Content

Edit `app/page.tsx` to update:
- Company information
- Services offered
- Contact details
- Images and animations

## 📄 License

© 2025 SERENO Clearing & Forwarding Ltd. All rights reserved.

## 🤝 Support

For technical support or inquiries:
- Email: Serenoclearing@Gmail.Com
- Phone: +254 11 184 2690
- Address: Makadara Building, Mombasa, Kenya
