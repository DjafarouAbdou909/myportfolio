import { CV_LINKS } from '../data/config.js';

export default function BottomNav({ t, lang, page, onNavigate }) {
  const navClass = id => `nav-item${page === id ? ' active' : ''}`;

  return (
    <nav className="bottom-nav">
      <button className={navClass('home')} onClick={() => onNavigate('home')}>
        <svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" /><path d="M9 21V12h6v9" /></svg>
        <span>{t.navHome}</span>
      </button>
      <button className={navClass('projects')} onClick={() => onNavigate('projects')}>
        <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
        <span>{t.navProjects}</span>
      </button>
      <a className="nav-item" href={CV_LINKS[lang]} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>
        CV
      </a>
      <div className="nav-center-dot"></div>
      <a className="nav-item" href="https://www.linkedin.com/in/djafarou/" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="3" /><line x1="8" y1="11" x2="8" y2="17" /><line x1="8" y1="7" x2="8" y2="8" /><path d="M12 11v6M12 11a3 3 0 016 0v6" /></svg>
        LinkedIn
      </a>
      <a className="nav-item" href="https://github.com/DjafarouAbdou909" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
        GitHub
      </a>
    </nav>
  );
}
