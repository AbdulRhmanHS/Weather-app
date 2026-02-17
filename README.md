# 🚀 Webpack Starter Template

A modern, "Ihsan"-driven boilerplate designed to help you **Engez** (accomplish) your project setup in seconds. This template provides a professional-grade foundation with pre-configured build tools, linting, and formatting.

## ✨ Features

- **Webpack 5**: Smart split configuration (`common`, `dev`, `prod`) for an optimized workflow.
- **ESLint 9**: Implementation of the new "Flat Config" system (`eslint.config.mjs`) for high-standard code quality.
- **Prettier**: Integrated formatting to ensure your code remains clean and readable.
- **Babel**: Modern JavaScript support across different environments.
- **Optimized Assets**:
  - `MiniCssExtractPlugin` for separate production CSS files.
  - `CssMinimizerPlugin` for tiny production bundles.
  - `HtmlWebpackPlugin` with template support.
  - Efficient asset management for images and icons using `asset/resource`.

---

## 🛠️ Getting Started

### 1. Use this Template

Click the green **"Use this template"** button on GitHub to create a new repository based on this codebase.

### 2. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

### 3. Development Mode

To start a local development server with Hot Module Replacement (HMR) and live reloading:

```bash
npm run dev
```

_Your app will be available at `http://localhost:8080`._

### 4. Production Build

To create a minified, production-ready bundle with cache-busting filenames in the `/dist` folder:

```bash
npm run build
```

### 5. Deployment

To deploy your `/dist` folder to GitHub Pages:

```bash
npm run deploy
```

---

## 📂 Folder Structure

- `src/index.js`: The main entry point for your JavaScript.
- `src/template.html`: The base HTML template.
- `webpack.common.js`: Configuration shared between dev and production.
- `webpack.dev.js`: Fast development setup with source maps.
- `webpack.prod.js`: Optimized configuration for deployment.
- `eslint.config.mjs`: Modern ESLint flat configuration.
- `.prettierrc`: Prettier formatting rules.

---

## 📜 License

This project is licensed under the ISC License.

---

_Built with the intention to please Allah by creating beneficial tools for the Ummah. May your projects be successful and full of Barakah!_
