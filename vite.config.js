import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le site est servi à la racine du domaine personnalisé (public/CNAME), donc base = '/'.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
