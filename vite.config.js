import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This Vite configuration enables the React plugin. No other special
// configuration is required for this simple project. See
// https://vitejs.dev/config/ for additional options.
export default defineConfig({
  plugins: [react()],
});