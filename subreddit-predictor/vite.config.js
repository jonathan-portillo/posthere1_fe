import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The backend runs on localhost:3000; proxying /api avoids CORS in development.
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
