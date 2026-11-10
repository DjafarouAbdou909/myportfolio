function Screen({ accent }) {
  return (
    <div className="card-thumb-inner">
      <div className="screen-bar">
        <div className="screen-dot" style={{ background: '#ef4444' }}></div>
        <div className="screen-dot" style={{ background: '#f59e0b' }}></div>
        <div className="screen-dot" style={{ background: '#22c55e' }}></div>
      </div>
      <div className="screen-line" style={{ background: `${accent}55`, width: '80%' }}></div>
      <div className="screen-line" style={{ width: '100%' }}></div>
      <div className="screen-line" style={{ width: '65%' }}></div>
      <div className="screen-line" style={{ background: `${accent}33`, width: '90%' }}></div>
      <div className="screen-line" style={{ width: '50%' }}></div>
      <div className="screen-line" style={{ width: '75%' }}></div>
      <div className="screen-line" style={{ background: `${accent}44`, width: '40%' }}></div>
    </div>
  );
}

export default function ProjectCard({ project: p, lang, viewMore }) {
  return (
    <div className="project-card">
      <div className="card-thumb" style={{ background: p.color }}>
        {p.img ? (
          <img src={p.img} alt={p.name[lang]} loading="lazy" />
        ) : (
          <div style={{ height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
            <Screen accent={p.accent} />
          </div>
        )}
        {p.badge && <div className={`card-badge ${p.badge.type}`}>{p.badge[lang]}</div>}
      </div>
      <div className="card-body">
        <h3>{p.name[lang]}</h3>
        <p className="card-desc">{p.desc[lang]}</p>
        <div className="tags">
          {p.tags.map(tg => <span className="tag" key={tg}>{tg}</span>)}
        </div>
      </div>
      <a className="card-footer" href={p.link} target="_blank" rel="noopener noreferrer">{viewMore}</a>
    </div>
  );
}
