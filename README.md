# Sliding Auth Card

A responsive Sign In / Sign Up card with GSAP animations and Tailwind CSS.

## Folder Structure

```text
sliding-auth/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AuthCard.jsx       # Main container and GSAP logic
│   │   ├── AuthForms.jsx      # SignIn and SignUp form components
│   │   └── AuthOverlays.jsx   # Desktop sliding panel and Mobile toggle
│   ├── App.css
│   ├── App.jsx                # Import <AuthCard/> here
│   ├── index.css              # Tailwind imports go here
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

## Quick Start

**1. Clone the repository**
```bash
git clone https://github.com/dkeshavl/sliding-auth.git
cd sliding-auth
```

**2. Install all dependencies**
```bash
npm install
npm install gsap tailwindcss @tailwindcss/vite
```

**3. Update `vite.config.js`**
Make sure your Vite config includes the Tailwind plugin:
```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**4. Update `src/index.css`**
Add this single line to the top of your CSS file:
```css
@import "tailwindcss";
```

**5. Start the server**
```bash
npm run dev
```