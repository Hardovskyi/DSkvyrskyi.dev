# Daniil Skvyrskyi — Portfolio Website

Personal portfolio site showcasing AI, computer vision, embedded systems work, and projects.

## Local preview

Open `index.html` in a browser, or use a simple local server:

```bash
# Python
python -m http.server 8080

# Node (if installed)
npx serve .
```

Then visit `http://localhost:8080`.

## Deploy to GitHub Pages (recommended)

GitHub Pages is an excellent choice for this site because:

- **Free** hosting with HTTPS
- **Integrates with your GitHub profile** — recruiters often check both
- **No build step** — this is plain HTML/CSS/JS, so deployment is trivial
- **Custom domain** support (e.g. `daniilskvyrskyi.com`) if you want one later

### Option A: User/organization site (`username.github.io`)

Best if this **is** your main portfolio URL.

1. Create a repo named **`YOUR_GITHUB_USERNAME.github.io`** (must match exactly).
2. Push all files from this folder to the `main` branch.
3. Go to **Settings → Pages** — it should deploy automatically.
4. Site live at: `https://YOUR_GITHUB_USERNAME.github.io`

### Option B: Project site (any repo name)

Use if you want the site at `username.github.io/portfolio` or keep code in a named repo.

1. Create any repo (e.g. `portfolio`).
2. Push files to `main`.
3. **Settings → Pages → Source**: Deploy from branch `main`, folder `/ (root)`.
4. Site live at: `https://YOUR_GITHUB_USERNAME.github.io/portfolio`

### Quick deploy commands

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git push -u origin main
```

### After deploying

1. Set your GitHub username in `js/main.js` → `GITHUB_USERNAME` so GitHub links work.
2. Add the live URL to your resume, LinkedIn, and job applications.

## Other deployment options

| Platform   | Pros                                      | Best for                          |
|-----------|-------------------------------------------|-----------------------------------|
| **GitHub Pages** | Free, simple, ties to your GitHub      | Static portfolios (this site)     |
| **Vercel**     | Fast CDN, auto-deploy from Git           | If you add React/Next.js later    |
| **Netlify**    | Similar to Vercel, drag-and-drop option  | Quick experiments                 |

For your goals (portfolio + polished GitHub presence), **GitHub Pages is the best starting point**.

## Customization

- **GitHub links**: Edit `GITHUB_USERNAME` in `js/main.js`
- **Colors/accent**: CSS variables at top of `css/styles.css`
- **Content**: Edit sections directly in `index.html`
- **Add project images**: Place in `assets/` and reference in project cards

## Structure

```
daniilwebsite/
├── index.html      # Main page
├── css/
│   └── styles.css  # All styles
├── js/
│   └── main.js     # Nav, scroll effects, GitHub link
└── README.md
```

## License

Personal portfolio — © Daniil Skvyrskyi
