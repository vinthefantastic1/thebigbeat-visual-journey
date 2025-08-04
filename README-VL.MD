# Deploying to GitHub Pages (Vite + Loveable)

## 1. Build Your Project

Clone your repo and install dependencies:

```sh
npm install
npm run build
```

This generates a `dist` folder containing your production-ready static files.

---

## 2. Deploy the `dist` Folder to GitHub Pages

#### FORGET THE GITHUB STUFF. We're using NETLIFY instead

### Option A: Using the `gh-pages` Branch (Recommended for Vite)

1. **Install the `gh-pages` package:**

    ```sh
    npm install --save-dev gh-pages
    ```

<!-- 2. **Update your `package.json`:**

    ```json
    "homepage": "https://vinthfantastic1.github.io/thebigbeat-visual-journey/",
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ``` -->

3. **Update BrowserRouter `basename`:**

    In your `src/App.tsx`, set:

    ```tsx
    <BrowserRouter basename="/thebigbeat-visual-journey">
    ```

4. **Update your Vite config (`vite.config.ts`):**

    ```ts
    export default defineConfig({
      base: '/thebigbeat-visual-journey/',
      // ...other config
    })
    ```

5. **Deploy:**

    ```sh
    npm run deploy
    ```

Your site will now be live at  
`https://vinthefantastic1.github.io/thebigbeat-visual-journey/`

---

**Note:**  
Setting the correct `base` in your Vite config is crucial. Without it, your site’s JS and CSS won’t load properly on GitHub Pages.

