# David Mohammed Portfolio — Hostinger Deployment Guide

## What's Included

This is a **static, pre-built portfolio** ready to upload to Hostinger. No build process needed.

- `index.html` — Main page (360 KB, all-in-one file with embedded CSS/JS)
- `assets/` — Optimized CSS and JavaScript files
- `.htaccess` — Server configuration for SPA routing and caching

## Deployment Steps

### 1. Upload Files to Hostinger

1. Log in to **Hostinger hPanel**
2. Go to **Files → File Manager**
3. Navigate to `public_html` (or your domain's root directory)
4. **Delete** the old git-deployed files (if any)
5. **Upload** all files from this folder:
   - `index.html`
   - `.htaccess`
   - `assets/` folder (entire folder)

### 2. Verify the .htaccess File

The `.htaccess` file handles:
- **SPA routing** — All navigation routes point to `index.html`
- **Gzip compression** — Reduces file sizes for faster loading
- **Cache headers** — Browser caching for assets
- **MIME types** — Proper file type handling

If you don't see `.htaccess` after upload, enable "Show Hidden Files" in File Manager.

### 3. Test the Site

1. Visit your domain: `https://david.mo-blind.com`
2. Click navigation links (About, Experience, Skills, Projects, Resume, Contact)
3. All routes should work without 404 errors
4. Check **Print / Save PDF** button on the Resume section

### 4. Troubleshooting

**Issue: 404 errors when clicking navigation links**
- Ensure `.htaccess` is uploaded to the root directory
- Check that mod_rewrite is enabled (usually enabled by default on Hostinger)
- Contact Hostinger support if mod_rewrite is disabled

**Issue: Styles or images not loading**
- Clear browser cache (Ctrl+Shift+Delete)
- Verify `assets/` folder is uploaded
- Check browser DevTools (F12) → Network tab for 404s

**Issue: Site is slow**
- Gzip compression should be active (check `.htaccess`)
- Browser cache should be working (check response headers)
- Images are embedded in the HTML, so no external requests needed

## File Sizes

- `index.html` — 360 KB (includes all CSS/JS)
- `assets/index-*.css` — 120 KB (minified)
- `assets/index-*.js` — 667 KB (minified)
- **Total:** ~1.1 MB (gzip: ~304 KB)

## Updates

To update the portfolio in the future:

1. Make changes in the Manus project
2. Run `pnpm run build` locally
3. Copy the new `dist/public/` files to Hostinger
4. Upload the same way as above

---

**Questions?** Contact support or check the Hostinger knowledge base for file manager help.
