// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // or vue, svelte, etc.

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/bharathraj1614/Quizz-App", // ← replace with your repo name
});
