<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This Vite configuration enables the React plugin. No other special
// configuration is required for this simple project. See
// https://vitejs.dev/config/ for additional options.
export default defineConfig({
  plugins: [react()],
});
=======
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "./",
});
>>>>>>> fullfiles
