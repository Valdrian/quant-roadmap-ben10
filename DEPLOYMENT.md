# 🚀 Deployment Guide

This guide will help you deploy the Quant Roadmap Ben 10 application to various platforms.

## 📦 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

## 🌐 Deployment Options

### 1. Vercel (Recommended - Easiest)

#### One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ALGOGUY09/quant-roadmap-ben10)

#### Manual Deploy
1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts to link to your Vercel account

### 2. Netlify

#### One-Click Deploy
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ALGOGUY09/quant-roadmap-ben10)

#### Manual Deploy via CLI
1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Netlify:
```bash
netlify deploy --prod --dir=dist
```

### 3. GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" section
3. Create a new file `.github/workflows/deploy.yml` with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        env:
          BASE_URL: /quant-roadmap-ben10/
          
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

4. Push the workflow file to your repository
5. Enable GitHub Pages in repository settings
6. Your app will be available at: `https://[username].github.io/quant-roadmap-ben10/`

### 4. Render

1. Create a new Web Service on [Render](https://render.com)
2. Connect your GitHub repository
3. Use these settings:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Environment**: Static Site

### 5. Railway

1. Install Railway CLI:
```bash
npm i -g @railway/cli
```

2. Login and initialize:
```bash
railway login
railway init
```

3. Deploy:
```bash
railway up
```

### 6. Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Create a new project
3. Connect your GitHub repository
4. Use these build settings:
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Node Version**: 18

## 🔧 Environment Variables

If you need to set environment variables for any deployment:

1. Create a `.env.production` file:
```env
VITE_API_URL=your-api-url
VITE_APP_NAME=Quant Roadmap Ben 10
```

2. Access in your code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

## 📱 Custom Domain

### For Vercel/Netlify:
1. Go to your project settings
2. Add your custom domain
3. Follow DNS configuration instructions

### For GitHub Pages:
1. Create a `CNAME` file in the `public` folder with your domain
2. Configure DNS with your domain provider

## 🐛 Troubleshooting

### Build Fails
- Ensure Node.js version is 18+
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### 404 Errors on Routes
- For SPAs on GitHub Pages, you may need to add a 404.html that redirects to index.html
- For other platforms, ensure redirects are configured for SPA routing

### Assets Not Loading
- Check the `base` configuration in `vite.config.js`
- Ensure the BASE_URL environment variable matches your deployment path

## 📊 Performance Optimization

1. **Enable Compression**: Most platforms automatically compress assets
2. **Use CDN**: Platforms like Vercel and Netlify include CDN by default
3. **Optimize Images**: Consider using WebP format for images
4. **Enable Caching**: Configure appropriate cache headers

## 🔒 Security

1. Never commit sensitive data to the repository
2. Use environment variables for API keys
3. Enable HTTPS (automatic on most platforms)
4. Set appropriate security headers

## 📈 Monitoring

Consider adding:
- Google Analytics
- Vercel Analytics
- Sentry for error tracking

## 🤝 Support

If you encounter issues:
1. Check the [GitHub Issues](https://github.com/ALGOGUY09/quant-roadmap-ben10/issues)
2. Create a new issue with deployment logs
3. Join our community discussions

---

Happy Deploying! 🚀 It's Hero Time!