import { useEffect, useState } from 'react';

/* ── TYPING EFFECT ── */
function useTyping(phrases) {
  const [text, setText] = useState('');

  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, timeout;

    function type() {
      const phrase = phrases[pi];
      if (!deleting) {
        ci++;
        setText(phrase.slice(0, ci));
        if (ci === phrase.length) { deleting = true; timeout = setTimeout(type, 2200); return; }
        timeout = setTimeout(type, 55);
      } else {
        ci--;
        setText(phrase.slice(0, ci));
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; timeout = setTimeout(type, 400); return; }
        timeout = setTimeout(type, 28);
      }
    }

    type();
    return () => clearTimeout(timeout); // redémarre proprement au changement de langue
  }, [phrases]);

  return text;
}

export default function Hero({ t, active }) {
  const text = useTyping(t.phrases);

  return (
    <section className={`page${active ? ' active' : ''}`} id="home">
      <div className="hero-card">
        <div className="hero-eyebrow">{t.eyebrow}</div>
        <h1 className="hero-title">{t.greeting}</h1>
        <p className="typing-line">{text}<span className="cursor"></span></p>
      </div>
    </section>
  );
}
