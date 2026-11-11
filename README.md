# Opportunity Portal - Single-Page Job Board

A lightweight, high-performance job board with a minimalist white aesthetic and `#4846e9` brand accents.

---

## ⚡ Features
- **99 Verified Job Opportunities** across 8 key domains (`Software engineering`, `Other engineering`, `Arts & Design`, `Business operations`, `Medicine`, `Data analysis`, `Finance`, `Life, Physical, and Social Science`, `Humanities`, `Law`).
- **Interactive Domain Filter**: Filter instantly by clicking any domain category pill or the domain dropdown menu.
- **Smart Sorting**:
  - `Newest`: Orders by actual posting recency (hours $\rightarrow$ days $\rightarrow$ months $\rightarrow$ newest ID).
  - `Highest Pay`: True normalized highest compensation (annual salaries normalized to hourly equivalent).
  - `Lowest Pay`: Normalized ascending compensation.
  - `Alphabetical (A-Z)`: Instant title sorting.
- **Live Search**: Instant substring search across role titles, domains, and full job descriptions.
- **Dedicated Modal & Direct Apply**:
  - Clicking any card opens the complete Job Description modal (Key Responsibilities, Qualifications, Contract & Payment Terms, and About).
  - Clicking the **`Apply ↗`** badge opens the direct application link in a new tab without opening the modal.
- **Dynamic Referral Tracking**: Pass `?ref=...` in the URL to override or test referral links on the fly.

---

## 🚀 Deploy to Netlify (Ready Out of the Box!)

The project is fully configured for zero-configuration deployment to **Netlify**:
* Includes `netlify.toml` with caching headers and security policies.
* Includes `_redirects` (`/*  /index.html  200`) for seamless client-side single-page routing.
* Zero build steps, zero npm dependencies, 100% static HTML5/CSS3/ES6+.

### Option 1: Drag & Drop (Fastest - 30 seconds)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`job website`) directly onto the page.
3. Your site is instantly live with a free SSL certificate!

### Option 2: Connect via GitHub / GitLab
1. Push this folder to a GitHub repository.
2. In Netlify, click **"Add new site"** $\rightarrow$ **"Import an existing project"**.
3. Choose your repository.
4. Leave **Build command** empty and set **Publish directory** to `.` (or root).
5. Click **Deploy**. Netlify automatically deploys every time you push changes!

---

## 💻 Local Testing
Double-click [`index.html`](file:///c:/Users/Abhishek/Downloads/job%20website/index.html) or run:
```powershell
python -m http.server 8080
```
Open **`http://localhost:8080/`** in your browser.
