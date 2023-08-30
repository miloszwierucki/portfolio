import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/email": "https://email-worker.mily-deuce.workers.dev/",
    },
  },
  plugins: [react()],
});
