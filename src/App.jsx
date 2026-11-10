import { useEffect, useState } from 'react';
import { i18n } from './data/i18n.js';
import GridCanvas from './components/GridCanvas.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import LangSwitch from './components/LangSwitch.jsx';
import BottomNav from './components/BottomNav.jsx';

export default function App() {
  const [lang, setLang] = useState('en'); // anglais par défaut
  const [page, setPage] = useState('home');
  const t = i18n[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <>
      <GridCanvas />
      <Hero t={t} active={page === 'home'} />
      <Projects t={t} lang={lang} active={page === 'projects'} />
      <LangSwitch lang={lang} onChange={setLang} />
      <BottomNav t={t} lang={lang} page={page} onNavigate={setPage} />
    </>
  );
}
