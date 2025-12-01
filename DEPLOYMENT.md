# Deployment Guide - Movies Listing Pages to Vercel

This guide will help you deploy the Movies Listing Pages application to Vercel.

## Prerequisites

- GitHub account with the project repository
- Vercel account (free tier available at vercel.com)
- Node.js 16+ installed locally (for testing)

## Quick Start - One-Click Deployment

### Option 1: Deploy from Vercel Dashboard (Recommended)

1. **Sign in to Vercel**
   - Go to https://vercel.com
   - Sign in with your GitHub account

2. **Import Your Repository**
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Search for and select `Gopal335/movies-listing-pages`
   - Click "Import"

3. **Configure Project Settings**
   - **Framework Preset**: Next.js (auto-detected)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
   - **Environment Variables**: (Leave empty unless needed)

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete (~2-3 minutes)
   - Your site will be live at `https://movies-listing-pages.vercel.app`

### Option 2: Deploy Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Authenticate with Vercel**
   ```bash
   vercel login
   ```

3. **Deploy Your Project**
   ```bash
   cd /path/to/movies-listing-pages
   vercel
   ```

4. **Follow the prompts**
   - Confirm you want to deploy to production
   - Accept default settings or customize as needed

## Project Structure

```
movies-listing-pages/
├── src/
│   └── app/
│       ├── favicon.ico
│       ├── globals.css       # Global styles
│       ├── layout.tsx        # Root layout with Google Fonts
│       └── page.tsx          # Main page component
├── public/                   # Static assets
├── vercel.json              # Vercel configuration (auto-detected)
├── .env.example             # Environment variables template
├── next.config.ts           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies
└── DEPLOYMENT.md            # This file
```

## Environment Variables

The project doesn't require any environment variables for basic functionality. However, if you need to add any:

1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. In Vercel Dashboard: Settings → Environment Variables
4. Add your variables matching those in `.env.example`

## Build Information

### Dependencies
- **Next.js**: 16.0.6 - React framework
- **React**: 19.2.0 - UI library
- **TypeScript**: 5 - Type safety
- **Tailwind CSS**: 4 - Utility-first CSS
- **PostCSS**: 4 - CSS transformation
- **Google Fonts (Geist)**: Sans and Mono fonts

### Build Time
- Average build time: ~2-3 minutes
- Build size: ~3-5 MB
- Output: `.next/` directory

## Key Features

✅ **Already Production-Ready**
- ✓ TypeScript for type safety
- ✓ Tailwind CSS for styling
- ✓ React Server Components optimized
- ✓ Image optimization via Next.js Image component
- ✓ ESLint configured for code quality
- ✓ `.gitignore` properly configured

## Production Checklist

- [ ] All code committed and pushed to GitHub
- [ ] No uncommitted changes in working directory
- [ ] `.env.local` NOT committed (security best practice)
- [ ] `.next/` directory NOT committed
- [ ] `node_modules/` NOT committed
- [ ] All dependencies in `package.json` pinned to versions
- [ ] Tests passing locally (if applicable)

## Post-Deployment Steps

1. **Verify Deployment**
   - Visit your Vercel URL
   - Check that all pages load correctly
   - Verify styling is applied
   - Test responsive design

2. **Custom Domain (Optional)**
   - Go to Vercel Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions
   - Wait for DNS propagation (5-48 hours)

3. **Monitor Performance**
   - Use Vercel Analytics (Pro plan)
   - Monitor Web Vitals
   - Check build logs for warnings

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Verify all dependencies are in `package.json`
- Ensure TypeScript types are correct: `npm run build` locally
- Clear build cache: Settings → Advanced → Clear Build Cache

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `globals.css` is imported in `layout.tsx`
- Clear browser cache (Ctrl+Shift+Delete)

### Slow Performance
- Enable Image Optimization in Vercel
- Reduce bundle size by removing unused dependencies
- Use dynamic imports for heavy components

## Continuous Deployment

Vercel automatically deploys when you:
- Push to the main branch
- Create a pull request (preview deployment)
- Merge a pull request

**Disable auto-deployments:**
- Settings → Git → Ignore Command
- Example: `git diff --quiet HEAD^ HEAD -- docs/` (ignore docs folder)

## Rollback

To rollback to a previous deployment:
1. Go to Vercel Deployments tab
2. Find the previous successful deployment
3. Click the menu (•••) → "Promote to Production"

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS Docs**: https://tailwindcss.com/docs
- **GitHub Issues**: For project-specific issues

## FAQ

**Q: Is my site secure on Vercel?**
A: Yes, Vercel provides HTTPS by default, DDoS protection, and automatic SSL certificates.

**Q: Can I use a custom domain for free?**
A: Yes, you can use custom domains on the free plan. You only need to configure DNS.

**Q: How do I add environment variables?**
A: Go to Project Settings → Environment Variables → Add a new variable.

**Q: Can I use Vercel for production?**
A: Absolutely! Vercel is built by the Next.js creators and powers thousands of production applications.

---

**Last Updated**: December 2024
**Project**: Movies Listing Pages
**Framework**: Next.js 16
