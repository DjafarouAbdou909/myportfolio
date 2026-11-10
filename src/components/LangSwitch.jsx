export default function LangSwitch({ lang, onChange }) {
  return (
    <div className="lang-switch">
      <button className={lang === 'fr' ? 'active-lang' : undefined} onClick={() => onChange('fr')}>FR</button>
      <button className={lang === 'en' ? 'active-lang' : undefined} onClick={() => onChange('en')}>EN</button>
    </div>
  );
}
