# The Big Beat - Netlify Deployment Guide

A React photography portfolio showcasing travel and automotive photography, built with Vite, React, TypeScript, and shadcn/ui.

## Tech Stack

- **Frontend Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **UI Components**: shadcn/ui + Tailwind CSS
- **Routing**: React Router
- **Deployment**: Netlify

---

## Deploying to Netlify

### Prerequisites

1. **GitHub Repository**: Your code should be pushed to GitHub
2. **Netlify Account**: Sign up at [netlify.com](https://netlify.com)

### Configuration for Netlify

#### 1. Update `vite.config.ts`

Ensure your Vite config is set up for Netlify (no base path needed):

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // No base path needed for Netlify
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

#### 2. Update `src/App.tsx`

Remove the basename from BrowserRouter for Netlify:

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

#### 3. Update `package.json`

Remove GitHub Pages specific configurations:

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

#### 4. Update Image Paths

Ensure all image paths in your components use absolute paths:

```tsx
// In GallerySection.tsx and other components
image: "/images/gallery/your-image.jpg"  // ✅ Correct for Netlify
```

---

## Deployment Methods

### Method 1: GitHub Integration (Recommended)

#### Step 1: Push to GitHub

```sh
# Add and commit all changes
git add .
git commit -m "Configure for Netlify deployment"
git push origin main
```

#### Step 2: Connect to Netlify

1. Go to [Netlify](https://netlify.com) and log in
2. Click **"New site from Git"**
3. Choose **GitHub** as your Git provider
4. Select your repository: `thebigbeat-visual-journey`
5. Configure build settings:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Base directory**: (leave empty)

#### Step 3: Deploy

Netlify will automatically build and deploy your site. Future pushes to the `main` branch will trigger automatic deployments.

### Method 2: Manual Deployment

#### Step 1: Build Locally

```sh
npm install
npm run build
```

#### Step 2: Deploy dist folder

1. Go to [Netlify](https://netlify.com)
2. Drag and drop the `dist` folder to the deploy area
3. Your site will be live immediately

### Method 3: Netlify CLI

#### Step 1: Install Netlify CLI

```sh
npm install -g netlify-cli
```

#### Step 2: Login and Deploy

```sh
# Login to Netlify
netlify login

# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

---

## Post-Deployment Configuration

### Custom Domain (Optional)

1. Go to your site's **Domain settings** in Netlify
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

### Environment Variables

If you need environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add your variables (e.g., `VITE_API_URL`)
3. Redeploy the site

### HTTPS and Security

Netlify automatically provides:
- ✅ SSL/TLS certificates
- ✅ HTTPS redirects
- ✅ CDN distribution

---

## Development Workflow

### Making Changes

1. **Develop locally**:
   ```sh
   npm run dev
   ```
   Access at: `http://localhost:8080/`

2. **Test the build**:
   ```sh
   npm run build
   npm run preview
   ```

3. **Deploy changes**:
   ```sh
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
   
   Netlify will automatically deploy the changes.

### Branch Previews

Netlify can create preview deployments for pull requests:

1. Go to **Site settings** → **Build & deploy**
2. Enable **Deploy previews**
3. Each PR will get its own preview URL

---

## Troubleshooting

### Common Issues

**Mixed Content Warnings**:
- Ensure all image paths start with `/` for absolute paths
- Use HTTPS for any external resources

**404 Errors on Refresh**:
- Netlify automatically handles SPA routing
- If issues persist, create a `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

**Build Failures**:
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Test build locally first: `npm run build`

### Getting Help

- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Vite Docs**: [vitejs.dev](https://vitejs.dev)
- **Build Logs**: Available in Netlify dashboard

---

## Site Information

**Live Site**: [Your Netlify URL will be here]  
**Repository**: https://github.com/vinthefantastic1/thebigbeat-visual-journey  
**Build Status**: [![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)

---

*Last updated: August 1, 2025*
