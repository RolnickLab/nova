import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      include: ["./src/index.ts", "./src/components", "./src/lib/constants.ts"],
      exclude: ["./**/*.stories.tsx", "./src/components/Placeholder"],
    }),
  ],
  build: {
    lib: {
      entry: "./src/index.ts",
      name: "nova-ui-kit",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
