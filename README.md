# Amri Azri — Resume Site

Personal resume built with React + Vite. Deployed on Vercel.

## 🚀 Deploy to Vercel (step by step)

### Option A — GitHub + Vercel (recommended)

1. **Push this folder to GitHub**
   ```bash
   cd resume-site
   git init
   git add .
   git commit -m "initial resume site"
   # create a repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/resume-site.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com → New Project
   - Import your GitHub repo
   - Framework: **Vite** (auto-detected)
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click **Deploy** ✅

3. **Every `git push` auto-deploys** from that point.

---

### Option B — Vercel CLI

```bash
npm install -g vercel
cd resume-site
npm install
vercel        # follow prompts
```

---

## 🛠 Local development

```bash
npm install
npm run dev       # http://localhost:5173
```

## 🖨 Save as PDF

Open the live site → click the **"Save as PDF"** button (bottom-right) → Print → Save as PDF.

## ✏️ Update content

All resume content lives in one file:
```
src/data/resume.js
```

Edit that file and push — Vercel redeploys automatically.
