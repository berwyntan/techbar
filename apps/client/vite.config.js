import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3500",
      // "/api": "https://sore-blue-turtle-hat.cyclic.app",
    },
  },
  plugins: [react()],
});
