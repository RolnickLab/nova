# Nova UI Kit

This is the start of the code version of Nova UI Kit. We use [shadcn/ui](https://ui.shadcn.com/) as a component reference. Components are built using [Radix UI](https://www.radix-ui.com/) and [Tailwind CSS](https://tailwindcss.com/). We use [Storybook](https://storybook.js.org/) as a visual and interactive documentation of the code version of the UI Kit.

## System requirements

- Node
- NPM

The `.nvmrc` file in project root describes the recommended Node version for this project.

## Run example app

```bash
# Install dependencies
npm install

# Run app in development mode
npm run dev
```

The example app will now be available in a browser on http://localhost:5173/. Hot reload will be enabled by default.

## Run Storybook

```bash
# Install dependencies
npm install

# Run Storybook in development mode
npm run storybook
```

Storybook will now be available in a browser on http://localhost:5174/.

## Publish Storybook

First, export Storybook as a static web app:

```bash
# Install dependencies
npm install

# Generate static files
npm run build-storybook
```

Now, files in the `storybook-static` directory can be deployed to any static site hosting service.

## Add a new component

First, checkout the list of [available components](https://ui.shadcn.com/docs/components). Then use the CLI to add a component to the project. This will create a new component in folder `/src/components/ui` and install any dependencies it might have. Since the component is copied to the project, not installed as a dependency, it can be tweaked as needed.

```bash
npx shadcn-ui@latest add [component-name]
```
