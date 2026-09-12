# khalid1v.github.io

Personal portfolio site — built with plain HTML, CSS and JavaScript (no framework, no build step needed).

## Structure
```
portfolio/
├── index.html        → all page content
├── css/style.css      → all styling (light + dark mode)
├── js/script.js       → dark mode toggle + project filter tabs
├── assets/            → images, favicon, cv.pdf
└── README.md
```

## Run locally
No installation needed — just open `index.html` in a browser.
For live-reload while editing, you can use the VS Code extension "Live Server" (optional, not required).

## Deploy
This repo is already named `khalid1v.github.io`, so GitHub Pages serves it automatically once enabled:
Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder `/ (root)` → Save.

Site goes live at: https://khalid1v.github.io

## To edit content
Open `index.html` in any text editor (VS Code recommended — free, separate from Visual Studio) and edit the text directly.
No compiling, no Android Studio, no other software needed — it's a static site, the browser does all the work.

## To-do before publishing
- [ ] Replace the Formspree placeholder in the contact form (`YOUR_FORM_ID` in `index.html`) with a real endpoint from formspree.io (free)
- [ ] Replace `assets/profile.jpg` with a higher-resolution photo (current one is cropped from the CV and low-res)
- [ ] Add `assets/cv.pdf` (your real CV file)
- [ ] Confirm the LinkedIn URL in the contact section is correct
- [ ] Confirm it's OK to publish the INGELEC figures (check with your tuteur)
