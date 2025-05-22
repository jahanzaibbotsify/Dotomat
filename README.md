# Vocallify

![Vocallify Logo](/public/logo.png)

## Business Automation Till The Last Dot

Vocallify is a modern web application built with React, TypeScript, and Vite that showcases business automation solutions.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Production Build](#production-build)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Customization](#customization)

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for services, about, and contact information
- Easy navigation with smooth scrolling
- Optimized for performance

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **ESLint** - Code linting

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/vocallify.git
   cd vocallify
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

This will start the development server at [http://localhost:5173](http://localhost:5173).

### Production Build

Create a production-ready build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
vocallify/
├── dist/                # Production build output
├── public/              # Static assets
│   └── logo.png         # Logo image
├── src/
│   ├── components/      # React components
│   │   ├── About.tsx    # About section
│   │   ├── Contact.tsx  # Contact section
│   │   ├── Footer.tsx   # Footer component
│   │   ├── Header.tsx   # Header/Navigation component
│   │   ├── Hero.tsx     # Hero section
│   │   └── Services.tsx # Services section
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main App component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of the `dist` directory to your web server.

3. If you're using a single-page application routing, configure your web server to redirect all requests to `index.html`.

### XAMPP Deployment

If you're using XAMPP:

1. Copy the contents of the `dist` directory to your XAMPP `htdocs` folder:
   ```bash
   cp -r dist/* /Applications/XAMPP/xamppfiles/htdocs/your-site-folder/
   ```

2. Access your site at `http://localhost/your-site-folder`

## Customization

### Changing Colors

The color scheme can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#0f172a',
      'primary-light': '#1e293b',
      'primary-darker': '#0b1222',
      accent: '#00ff88',
    },
  },
},
```

### Adding New Sections

To add a new section:

1. Create a new component in the `src/components` directory
2. Import and add the component to `App.tsx`
3. Update the navigation in `Header.tsx` if needed

---

© 2023 Vocallify. All rights reserved. 