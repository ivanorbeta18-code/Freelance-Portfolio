# Portfolio Website — Setup Guide

## File Structure

All files must be kept inside one main folder. Do not move or rename any file or the website will break.

```
portfolio/
├── index.html           ← this is your home page (rename home.html to this)
├── about.html
├── services.html
├── skills.html
├── projects.html
├── contact.html
└── Css/
│   ├── global.css
│   ├── nav.css
│   ├── footer.css
│   ├── home.css
│   ├── about.css
│   ├── services.css
│   ├── skills.css
│   ├── projects.css
│   ├── contact.css
│
└── images/
    ├── ingredient-ai.png
    ├── tiny-battle-start.png
    ├── tiny-battle-map.png
    ├── nemsu-login.png
    ├── nemsu-dashboard.png
    └── nemsu-student.png
```

---

## File Organization Rules

1. All HTML files go directly inside the `portfolio/` folder.
2. All CSS files go directly inside the `portfolio/` folder alongside the HTML files.
3. All images go inside the `images/` folder, which is inside `portfolio/`.
4. Do not rename any file after setting up or links between pages will break.
5. Rename `home.html` to `index.html` — browsers look for `index.html` as the starting page.

---

## How to Run

### Method 1 — Open directly in a browser
1. Open the `portfolio/` folder on your computer.
2. Double-click `index.html`.
3. It will open in your default web browser.

### Method 2 — VS Code Live Server (Recommended)
1. Install [Visual Studio Code](https://code.visualstudio.com/).
2. Go to the **Extensions** tab and search for **Live Server** by Ritwick Dey, then click Install.
3. Click **File → Open Folder** and select your `portfolio/` folder.
4. Right-click `index.html` in the file list on the left.
5. Click **Open with Live Server**.
6. The site opens at `http://127.0.0.1:5500/index.html`.
7. Changes you save will refresh the browser automatically.

---

## Common Problems

| Problem | Cause | Fix |
|---|---|---|
| Images are not showing | `images/` folder is outside `portfolio/` | Move `images/` back inside `portfolio/` |
| CSS is not loading | CSS file was renamed or moved | Make sure all CSS files are inside `portfolio/` with the exact original filename |
| Nav link shows "File not found" | HTML file was renamed | Do not rename any HTML file after setup |
