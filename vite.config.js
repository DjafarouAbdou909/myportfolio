import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Le site est servi à la racine du domaine personnalisé (public/CNAME), donc base = '/'.
// Le build va dans docs/ : GitHub Pages publie ce dossier directement depuis la branche main
// (Settings → Pages → Deploy from a branch → main → /docs). Lancer `npm run build` avant chaque commit.
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
