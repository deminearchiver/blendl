import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

export default defineConfig({
  clearScreen: false,
  resolve: {
    preserveSymlinks: true
  },
  server: {
    port: 5180,
    strictPort: true
  },
  plugins: [
    solid()
  ]
});
