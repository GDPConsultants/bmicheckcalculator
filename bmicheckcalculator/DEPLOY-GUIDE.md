# 🚀 BMI Check Calculator — Complete Deployment & Setup Guide
## bmicheckcalculator.com

---

## STEP 1 — Register Your Domain

**Recommended registrars:**
- **Cloudflare Registrar** (cloudflare.com/products/registrar) — At-cost pricing (~$9.77/yr for .com), free WHOIS privacy, free DNS management
- **Namecheap** (namecheap.com) — ~$10–12/yr, free WHOIS privacy
- **GoDaddy** — widely known, slightly more expensive

**Search for:** `bmicheckcalculator.com`

> If .com is taken, try: .net, .health, .site, or a variant like `bmi-check-calculator.com`

---

## STEP 2 — Deploy Your Website (Choose ONE)

### Option A: GitHub Pages (Free — Recommended for Beginners)

**Time: ~10 minutes | Cost: Free | HTTPS: Automatic**

1. Create a free account at **github.com**

2. Click **"New repository"**
   - Name it: `bmicheckcalculator` (or anything)
   - Set to **Public**
   - Click **"Create repository"**

3. **Upload your files:**
   - Click **"uploading an existing file"**
   - Drag ALL your HTML files + sitemap.xml + robots.txt + favicon.svg + manifest.json
   - Click **"Commit changes"**

4. **Enable GitHub Pages:**
   - Go to repo **Settings** → scroll to **Pages**
   - Source: **Deploy from a branch** → Branch: `main` → folder: `/ (root)`
   - Click **Save**
   - Your site is live at: `https://yourusername.github.io/bmicheckcalculator/`

5. **Connect your custom domain:**
   - In GitHub Pages settings → **Custom domain** → enter `bmicheckcalculator.com` → Save
   - At your domain registrar's DNS settings, add these records:
     ```
     Type: A     Name: @    Value: 185.199.108.153
     Type: A     Name: @    Value: 185.199.109.153
     Type: A     Name: @    Value: 185.199.110.153
     Type: A     Name: @    Value: 185.199.111.153
     Type: CNAME Name: www  Value: yourusername.github.io
     ```
   - Wait 1–24 hours for DNS propagation
   - Check **"Enforce HTTPS"** once it becomes available

---

### Option B: Netlify (Free — Easiest)

**Time: ~5 minutes | Cost: Free | HTTPS: Automatic | CDN: Global**

1. Go to **netlify.com** → Sign up free
2. Click **"Add new site"** → **"Deploy manually"**
3. **Drag your entire project folder** onto the upload area
4. Site is instantly live at a random URL like `random-name-123.netlify.app`
5. **Connect custom domain:**
   - Site settings → **Domain management** → **Add custom domain**
   - Enter `bmicheckcalculator.com`
   - Netlify will show you the DNS records to add at your registrar
   - Free SSL/HTTPS happens automatically

---

### Option C: Cloudflare Pages (Free — Best Performance)

**Time: ~10 minutes | Cost: Free | HTTPS: Automatic | 200+ edge locations worldwide**

1. Go to **pages.cloudflare.com**
2. Click **"Create a project"** → **"Upload assets"**
3. Name project: `bmi-check-calculator`
4. Upload all files → **Deploy site**
5. Your site is live at `bmi-check-calculator.pages.dev`
6. **Custom domain:** Go to project → **Custom domains** → Add `bmicheckcalculator.com`
   - If using Cloudflare for DNS (recommended), it connects in seconds

> ✅ **Recommendation:** Use Cloudflare Pages if you're also using Cloudflare Registrar (seamless integration). Use Netlify if you want the simplest drag-and-drop experience.

---

## STEP 3 — Verify Deployment

After deploying, check every page loads correctly:

```
✅ https://bmicheckcalculator.com/                    (homepage)
✅ https://bmicheckcalculator.com/bmi-by-age.html
✅ https://bmicheckcalculator.com/bmi-children.html
✅ https://bmicheckcalculator.com/ideal-weight.html
✅ https://bmicheckcalculator.com/calorie-calculator.html
✅ https://bmicheckcalculator.com/bmr-calculator.html
✅ https://bmicheckcalculator.com/body-fat.html
✅ https://bmicheckcalculator.com/bmi-chart.html
✅ https://bmicheckcalculator.com/waist-hip-ratio.html
✅ https://bmicheckcalculator.com/weight-loss-calculator.html
✅ https://bmicheckcalculator.com/macro-calculator.html
✅ https://bmicheckcalculator.com/about-bmi.html
✅ https://bmicheckcalculator.com/who-guidelines.html
✅ https://bmicheckcalculator.com/privacy-policy.html
✅ https://bmicheckcalculator.com/terms.html
✅ https://bmicheckcalculator.com/contact.html
✅ https://bmicheckcalculator.com/sitemap.xml
✅ https://bmicheckcalculator.com/robots.txt
✅ https://bmicheckcalculator.com/favicon.svg
```

---

## STEP 4 — Google Search Console

**Why:** Tells Google your site exists. Speeds up indexing dramatically.

1. Go to **search.google.com/search-console**
2. Click **"Add property"** → URL prefix → enter `https://bmicheckcalculator.com`
3. **Verify ownership** — easiest method:
   - Choose **"HTML tag"** verification
   - Copy the meta tag (looks like `<meta name="google-site-verification" content="...">`)
   - Paste it in the `<head>` of your `index.html`, just before the closing `</head>` tag
   - Re-upload the file and click **Verify**
4. **Submit your sitemap:**
   - Left menu → **Sitemaps**
   - Enter: `sitemap.xml`
   - Click **Submit**
5. **Request indexing** for your homepage:
   - Paste `https://bmicheckcalculator.com/` in the search bar at top
   - Click **"Request Indexing"**

---

## STEP 5 — Google Analytics 4

**Why:** Track how many visitors you get, which pages perform best, where traffic comes from.

1. Go to **analytics.google.com**
2. Click **"Start measuring"** → Set up an account
3. Create a **property** for bmicheckcalculator.com
4. Choose **"Web"** as platform → Enter your URL → Create stream
5. Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`)

6. **Activate in all HTML files:**
   - In every `.html` file, find these lines (they're already in your files, just commented out):
     ```html
     <!-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX', {...});
     </script> -->
     ```
   - Remove the `<!--` and `-->` comment tags
   - Replace both instances of `G-XXXXXXXXXX` with your real Measurement ID
   - Do this for ALL HTML files (or use find/replace in a text editor)

**Quick terminal command to activate all at once:**
```bash
# Replace G-XXXXXXXXXX with your real GA4 ID in all files
sed -i 's/<!-- <script async src="https:\/\/www.googletagmanager/\<script async src="https:\/\/www.googletagmanager/g' *.html
sed -i 's/G-XXXXXXXXXX/G-YOUR_REAL_ID/g' *.html
```

---

## STEP 6 — Google AdSense

**Why:** Monetize your traffic. Each 1,000 visitors = $2–$15+ depending on audience location.

### 6a. Apply for AdSense
1. Go to **adsense.google.com**
2. Click **"Get started"**
3. Enter `https://bmicheckcalculator.com` as your site URL
4. Enter your email and country
5. Add the AdSense code snippet to your site when prompted — a tag like:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
   ```
6. Paste this in the `<head>` of ALL your HTML files (these are already pre-marked in your files)
7. Submit and wait for approval (1–14 days typically)

### 6b. Once Approved — Activate Ad Units
In every HTML file, find the ad placeholder comments like:
```html
<div class="ad-unit ad-leaderboard">
  <!-- REPLACE with real AdSense:
  <ins class="adsbygoogle" style="display:block" 
       data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
       data-ad-slot="XXXXXXXXXX" 
       data-ad-format="auto" 
       data-full-width-responsive="true"></ins>
  <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
  -->
  <span>Advertisement · 728×90</span>
</div>
```

Replace with your real ad unit code from the AdSense dashboard.

### Ad Slots Per Page (5 per page × 18 pages = 90 ad slots)
| Position | Format | Expected RPM |
|---|---|---|
| Top leaderboard | 728×90 responsive | $2–8 |
| Sidebar rectangle | 300×250 | $3–10 |
| In-content (after results) | 336×280 | $4–12 |
| Content bottom | 300×250 | $2–6 |
| Sticky tall sidebar | 300×600 | $5–15 |

---

## STEP 7 — Submit to Bing Webmaster Tools

1. Go to **bing.com/webmasters**
2. Sign in with Microsoft account
3. Add site → enter `https://bmicheckcalculator.com`
4. Submit sitemap: `https://bmicheckcalculator.com/sitemap.xml`

---

## STEP 8 — Test Everything

Run these free checks:
- **PageSpeed:** pagespeed.web.dev — aim for 90+ on mobile
- **Rich Results:** search.google.com/test/rich-results — confirms schema.org markup
- **Mobile Friendly:** search.google.com/test/mobile-friendly
- **Broken Links:** deadlinkchecker.com
- **HTTPS:** ssllabs.com/ssltest

---

## Quick Reference — Your Site URLs

| Page | Target Keyword | URL |
|---|---|---|
| Homepage | "bmi calculator" | /index.html |
| BMI by Age | "bmi calculator by age" | /bmi-by-age.html |
| Children's BMI | "bmi calculator for children" | /bmi-children.html |
| Ideal Weight | "ideal weight calculator" | /ideal-weight.html |
| Calorie Calculator | "daily calorie calculator" | /calorie-calculator.html |
| BMR Calculator | "bmr calculator" | /bmr-calculator.html |
| Body Fat | "body fat percentage calculator" | /body-fat.html |
| BMI Chart | "bmi chart printable" | /bmi-chart.html |
| Waist-Hip Ratio | "waist to hip ratio calculator" | /waist-hip-ratio.html |
| Weight Loss | "how long to lose weight" | /weight-loss-calculator.html |
| Macro Calculator | "macro calculator" | /macro-calculator.html |
| About BMI | "what is bmi" | /about-bmi.html |
| WHO Guidelines | "who bmi classification" | /who-guidelines.html |
| Privacy Policy | — (AdSense requirement) | /privacy-policy.html |
| Terms of Use | — (AdSense requirement) | /terms.html |
| Contact | — (trust signal) | /contact.html |

---

## Files to Upload (18 total)

```
index.html
bmi-by-age.html
bmi-children.html
ideal-weight.html
calorie-calculator.html
bmr-calculator.html
body-fat.html
bmi-chart.html
waist-hip-ratio.html
weight-loss-calculator.html
macro-calculator.html
about-bmi.html
who-guidelines.html
privacy-policy.html
terms.html
contact.html
404.html
sitemap.xml
robots.txt
favicon.svg
apple-touch-icon.svg
manifest.json
shared.css
shared.js
```

---

## Expected Timeline

| Week | Milestone |
|---|---|
| Week 1 | Site live, sitemap submitted, Google Search Console verified |
| Week 2 | AdSense applied, GA4 active, Bing submitted |
| Week 2–3 | Google starts indexing pages |
| Week 3–6 | First organic visitors from Google |
| Month 2–3 | AdSense approval, first ad revenue |
| Month 3–6 | 1,000–10,000 monthly visitors depending on SEO effort |
| Month 6–12 | 10,000–50,000+ monthly visitors with content expansion |

---

*Generated for bmicheckcalculator.com · BMI Check Calculator*
