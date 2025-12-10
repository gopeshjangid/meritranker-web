# MeritRanker - Early Access Landing Page

India's First AI-Powered Platform for Government Job Exam Educators

## 🚀 Overview

This is the early-access waitlist landing page for MeritRanker, designed to capture potential users before the full product launch. The page showcases key features for both educators and students preparing for government and competitive exams (UPSC, SSC, Banking, Railway, State-PSC).

## ✨ Features

- **Stunning Hero Section** - Eye-catching gradient backgrounds with animations
- **Feature Showcase** - Highlighting educator and student features
- **How It Works** - Simple 4-step process visualization
- **Early Access Signup** - Google OAuth + phone number collection
- **Mobile Responsive** - Fully optimized for all devices
- **Privacy-First** - Clear disclaimer about data usage

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 + React 18 + TypeScript
- **Styling**: Tailwind CSS + Framer Motion
- **UI Components**: Radix UI + shadcn/ui
- **Authentication**: AWS Amplify (to be configured)
- **Form Backend**: Formspree (for phone number collection)

## 📋 Setup Instructions

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Formspree

1. Go to [Formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form endpoint
3. Open `/components/early-access-signup.tsx`
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID:

```typescript
const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory with your AWS Amplify and Firebase configuration:

```env
# AWS Amplify Configuration
NEXT_PUBLIC_AMPLIFY_USER_POOL_ID=your_user_pool_id
NEXT_PUBLIC_AMPLIFY_USER_POOL_CLIENT_ID=your_client_id
NEXT_PUBLIC_AMPLIFY_OAUTH_DOMAIN=your_domain.auth.region.amazoncognito.com
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Formspree Configuration (Optional if not using hardcoded ID)
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xblnzpyw
```

### 4. Configure AWS Amplify

1. Set up AWS Amplify Gen2 in your project.
2. Create a Cognito User Pool with Google OAuth enabled.
3. Add the configuration values to your `.env.local` file.

### 5. Google Analytics

Integrated via `nextjs-google-analytics` with ID `G-J4S31YE836`. No extra configuration needed unless you want to change the ID.

### 6. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
/app
  /page.tsx                          # Main landing page
  /layout.tsx                        # Root layout with metadata
  /globals.css                       # Global styles and animations

/components
  /early-access-hero.tsx             # Hero section
  /early-access-features.tsx         # Features showcase
  /how-it-works-early-access.tsx     # How it works section
  /early-access-signup.tsx           # Signup form with OAuth
  /early-access-navbar.tsx           # Simplified navbar
  /early-access-footer.tsx           # Footer with privacy notice
  /ui/*                              # Reusable UI components
```

## 🎨 Customization

### Update Content

- **Hero Section**: Edit `/components/early-access-hero.tsx`
- **Features**: Edit `/components/early-access-features.tsx`
- **Contact Email**: Update in `/components/early-access-footer.tsx`

### Update Colors

The landing page uses a cyan/blue gradient theme. To customize:

1. Edit Tailwind config in `tailwind.config.ts`
2. Update gradient classes in components
3. Modify CSS variables in `app/globals.css`

## 🔒 Privacy & Compliance

The landing page includes:
- Clear privacy disclaimer in footer
- Notice that the platform is not live yet
- Commitment to data safety
- Links to Privacy Policy and Terms of Service

## 📱 Mobile Optimization

The page is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons and forms
- Optimized animations for mobile devices
- Hamburger menu for small screens

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with one click

### Deploy to AWS Amplify Hosting

1. Connect your repository
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `.next`
3. Deploy

## 📊 Analytics (Optional)

To track signups and conversions:

1. Add Google Analytics or Vercel Analytics
2. Track events:
   - Page views
   - Signup button clicks
   - Form submissions
   - Google OAuth attempts

## 🔄 Next Steps

After collecting waitlist signups:

1. **Email Campaign**: Use collected emails for launch announcements
2. **SMS Notifications**: Use phone numbers for launch reminders
3. **Product Development**: Build the actual platform features
4. **Beta Testing**: Invite early access users first

## 📝 Notes

- The Google OAuth is currently a placeholder - implement with AWS Amplify Cognito
- Formspree free tier allows 50 submissions/month - upgrade for more
- Update the Formspree endpoint before going live
- Test the signup flow thoroughly before launch

## 🤝 Support

For questions or issues:
- Email: info@bytechminds.com

## 📄 License

MIT License - See LICENSE file for details

---

Built with ❤️ for educators and students preparing for government exams