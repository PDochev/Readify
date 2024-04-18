import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     "/": {
  //       target: "https://readify-api-8f5dbe6a38d9.herokuapp.com/",
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
