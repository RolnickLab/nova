# Nova UI Kit

Nova UI Kit is a React library with components related to insect monitoring. We use [shadcn/ui](https://ui.shadcn.com/) as a component reference. Components are built using [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). We use [Storybook](https://storybook.js.org/) as a visual and interactive documentation of the code version of the UI Kit.

- Storybook: https://nova-ui-kit.netlify.app/
- NPM package: https://www.npmjs.com/package/nova-ui-kit

## To use the library in your app

### 1. Add Tailwind and its configuration

Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files:

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

Add this import header to your main css file:

```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 2. Install Nova UI Kit

```bash
npm install nova-ui-kit
```

### 3. Configure styles

Include some base styles in your root component:

```bash
import 'nova-ui-kit/dist/style.css'
```

Update Tailwind config with theme settings:

```bash
import { CONSTANTS } from 'nova-ui-kit'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/nova-ui-kit/**/*.js',
  ],
  theme: {
    colors: CONSTANTS.COLORS,
    extend: {
      backgroundImage: CONSTANTS.GRADIENTS,
      colors: CONSTANTS.COLOR_THEME,
    },
  },
  plugins: [require("tailwindcss-animate")]
}
```

The theme can be tweaked as needed for the specific project.

## For development

### System requirements

- Node
- NPM

The `.nvmrc` file in project root describes the recommended Node version for this project.

### Run example app

```bash
# Install dependencies
npm install

# Run app in development mode
npm run dev
```

The example app will now be available in a browser on http://localhost:5173/. Hot reload will be enabled by default.

### Run Storybook

```bash
# Install dependencies
npm install

# Run Storybook in development mode
npm run storybook
```

Storybook will now be available in a browser on http://localhost:5174/.

### Publish Storybook

Storybook is automatically published when changes are pushed to branch `main`.

### Add a new component

First, checkout the list of [available components](https://ui.shadcn.com/docs/components). Then use the CLI to add a component to the project. This will create a new component in folder `/src/components/ui` and install any dependencies it might have. Since the component is copied to the project, not installed as a dependency, it can be tweaked as needed.

```bash
npx shadcn-ui@latest add [component-name]
```

### Publish to NPM

First, make sure you have a NPM user and have access to update the package `nova-ui-kit`. Then, make your changes and bump the version in `package.json`. To publish the changes:

```bash
# Login to NPM from terminal
npm login

# Generate package files
npm run pre-publish

# Publish the changes
npm publish
```

Go to https://www.npmjs.com/package/nova-ui-kit and checkout the changes!
