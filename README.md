# Madina Engineering Works - Web Platform

This is a premium, mobile-first business website built for **Madina Engineering Works** (Mehandwas, Tonk, Rajasthan), a manufacturer of tractor-mounted front-end hydraulic loaders and agricultural attachments.

The platform is designed to prioritize mobile speed, user experience, and high lead-conversion (calls & WhatsApp queries) for farmers and industrial contractors.

---

## 🛠️ Technology Stack & Architecture

- **Core:** Semantic HTML5 & Vanilla ES6+ JavaScript modules.
- **Styling:** Custom Vanilla CSS3 using a unified design token system.
- **Build Tool:** [Vite](https://vitejs.dev/) (v5) for compilation, minification, and asset bundling.
- **Visuals:** Highly compressed custom WebP/PNG images and lightweight SVGs.

---

## 📁 Directory Structure

```text
/LOADAR
├── PROJECT_REQUIREMENTS.md     # Detailed Product Requirements Document (PRD)
├── README.md                   # Installation and operational guide (this file)
├── index.html                  # Main entry point (SEO & JSON-LD schema integrated)
├── package.json                # Project dependencies & operational scripts
├── vite.config.js              # Vite server & bundling configuration
├── assets/                     # Media asset directory
│   └── images/                 # Compressed loader, grabber, and workshop images
├── css/                        # Modular styles
│   └── index.css               # Global stylesheet (themes, metrics, components)
└── js/                         # JavaScript source files
    ├── main.js                 # Global scroll triggers, navigation drawer, & tabs
    ├── compatibility.js        # Tractor compatibility selection matrix engine
    └── contact.js              # Callback & Dealer registration validation
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 2. Install Dependencies
Navigate to the directory and install Vite:
```bash
npm install
```

### 3. Run Development Server
Start the local server (typically runs on [http://localhost:3000](http://localhost:3000)):
```bash
npm run dev
```

### 4. Build for Production
Compile and minify code bundles into the `/dist` directory for static deployment:
```bash
npm run build
```

---

## 💎 Features Implemented

1. **Tractor Compatibility Matcher (`js/compatibility.js`):** Client-side calculator checking brand compatibility (Swaraj, John Deere, Mahindra, Massey Ferguson, etc.) and Horsepower ranges to output mechanical specs and a custom pre-filled WhatsApp link.
2. **Lead Funnels & Forms (`js/contact.js`):** Validation routines for callback request forms and dealer applications, checking phone patterns and state selection.
3. **Responsive Visual System (`css/index.css`):** Hardware-accelerated CSS reveals, mobile bottom action dock, layout tables, and dark industrial accents.
4. **SEO Schema Integration (`index.html`):** Embedded JSON-LD structures for `LocalBusiness` and `Product` search index engines.
