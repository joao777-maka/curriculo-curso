import data from '../data'

function IconEmail() {
  return (
    <svg width="14" height="14" fill="none" stroke="#e8c96e" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="14" height="14" fill="none" stroke="#e8c96e" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="14" height="14" fill="none" stroke="#e8c96e" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconGithub() {
  return (
    <svg width="14" height="14" fill="#e8c96e" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
}

export default function Sidebar() {
  return (
    <aside style={{ width: 270, minWidth: 270, background: '#1a1a2e', padding: '32px 22px', display: 'flex', flexDirection: 'column', gap: 22 }}>

      {/* Avatar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 84, height: 84, borderRadius: '50%', background: 'linear-gradient(135deg,#e8c96e,#c4a84f)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, fontWeight: 700, color: '#1a1a2e', marginBottom: 14, border: '3px solid rgba(232,201,110,0.3)' }}>
          {data.iniciais}
        </div>
        <h1 style={{ color: '#fff', fontSize: 15, fontWeight: 700, lineHeight: 1.4, textAlign: 'center', marginBottom: 8 }}>
          {data.nomeCompleto}
        </h1>
        <span style={{ color: '#e8c96e', fontSize: 10.5, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', background: 'rgba(232,201,110,0.12)', padding: '4px 12px', borderRadius: 99, border: '1px solid rgba(232,201,110,0.25)' }}>
          {data.cargo}
        </span>
      </div>

      {/* Contato */}
      <div>
        <h3 style={{ color: '#e8c96e', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 11, borderBottom: '1px solid rgba(232,201,110,0.25)', paddingBottom: 7 }}>Contato</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {[
            { icon: <IconEmail />, text: data.contato.email },
            { icon: <IconPhone />, text: data.contato.telefone },
            { icon: <IconLocation />, text: data.contato.cidade },
            { icon: <IconGithub />, text: data.contato.github },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              {item.icon}
              <span style={{ color: 'rgba(255,255,255,0.72)', fontSize: 11.5 }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tecnologias */}
      <div>
        <h3 style={{ color: '#e8c96e', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 11, borderBottom: '1px solid rgba(232,201,110,0.25)', paddingBottom: 7 }}>Tecnologias</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          {data.habilidades.map((h, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 12 }}>{h.nome}</span>
                <span style={{ color: '#e8c96e', fontSize: 10, fontWeight: 600 }}>{h.nivel}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: `${h.nivel}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Idiomas */}
      <div>
        <h3 style={{ color: '#e8c96e', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 11, borderBottom: '1px solid rgba(232,201,110,0.25)', paddingBottom: 7 }}>Idiomas</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.idiomas.map((l, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.82)', fontSize: 12 }}>{l.idioma}</span>
              <span style={{ background: 'rgba(232,201,110,0.13)', color: '#e8c96e', fontSize: 10, padding: '2px 8px', borderRadius: 99, border: '1px solid rgba(232,201,110,0.28)' }}>{l.nivel}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Formação */}
      <div>
        <h3 style={{ color: '#e8c96e', fontSize: 10, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 11, borderBottom: '1px solid rgba(232,201,110,0.25)', paddingBottom: 7 }}>Formação</h3>
        {data.formacao.map((f, i) => (
          <div key={i}>
            <p style={{ color: '#fff', fontSize: 12.5, fontWeight: 600, marginBottom: 2 }}>{f.curso}</p>
            <p style={{ color: '#e8c96e', fontSize: 11.5, fontWeight: 500, marginBottom: 6 }}>{f.instituicao}</p>
            <span style={{ background: 'rgba(232,201,110,0.13)', color: '#e8c96e', fontSize: 10, padding: '2px 8px', borderRadius: 99, border: '1px solid rgba(232,201,110,0.28)' }}>{f.periodo}</span>
          </div>
        ))}
      </div>

    </aside>
  )
}