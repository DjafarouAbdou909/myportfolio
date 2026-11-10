import { useState } from 'react';
import { projects } from '../data/projects.js';
import ProjectCard from './ProjectCard.jsx';

export default function Projects({ t, lang, active }) {
  const [query, setQuery] = useState('');

  const q = query.toLowerCase();
  const filtered = projects.filter(p =>
    p.name[lang].toLowerCase().includes(q) ||
    p.tags.some(tg => tg.toLowerCase().includes(q)) ||
    p.desc[lang].toLowerCase().includes(q)
  );

  return (
    <section className={`page${active ? ' active' : ''}`} id="projects">
      <div className="section-header">
        <h2>{t.projTitle}</h2>
        <p>{t.projSub}</p>
        <em>{t.projNote}</em>
      </div>

      <div className="search-bar">
        <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input
          type="text"
          id="search-input"
          placeholder={t.searchPlaceholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="projects-grid">
        {filtered.map(p => (
          <ProjectCard key={p.link} project={p} lang={lang} viewMore={t.viewMore} />
        ))}
      </div>
    </section>
  );
}
