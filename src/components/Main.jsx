import data from '../data'

function SectionTitle({ title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
      <h3 style={{ fontSize: 15, color: '#1a1a2e', fontWeight: 700, whiteSpace: 'nowrap' }}>{title}</h3>
      <div style={{ flex: 1, height: 1, background: '#e8e5e0' }} />
    </div>
  )
}

export default function Main() {
  return (
    <main style={{ flex: 1, padding: '32px 34px', background: '#faf9f7', display: 'flex', flexDirection: 'column', gap: 28 }}>

      {/* Header */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
          <div style={{ width: 4, height: 52, background: '#1a1a2e', borderRadius: 2 }} />
          <div>
            <h2 style={{ fontSize: 24, color: '#1a1a2e', fontWeight: 700, lineHeight: 1.25 }}>
              João Douglas Vitor Gonçalves Caldeira
            </h2>
            <p style={{ fontSize: 13, color: '#e8c96e', fontWeight: 600, letterSpacing: '0.05em', marginTop: 3 }}>
              Desenvolvedor Front-End
            </p>
          </div>
        </div>
        <p style={{ fontSize: 13, color: '#555', lineHeight: 1.78, padding: '14px 18px', background: '#fff', border: '0.5px solid #e8e5e0', borderRadius: 8, borderLeft: '3px solid #e8c96e' }}>
          {data.resumo}
        </p>
      </section>

      {/* Experiência */}
      <section>
        <SectionTitle title="Experiência Profissional" />
        <div style={{ display: 'grid', gap: 13 }}>
          {data.experiencias.map((exp, i) => (
            <div key={i} style={{ background: '#fff', border: '0.5px solid #e8e5e0', borderRadius: 10, padding: '15px 19px', borderLeft: `3px solid ${i === 0 ? '#e8c96e' : '#1a1a2e'}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 6, marginBottom: 3 }}>
                <div>
                  <h4 style={{ fontSize: 14, fontWeight: 600, color: '#1a1a2e' }}>{exp.cargo}</h4>
                  <p style={{ fontSize: 12.5, color: '#888', fontWeight: 500 }}>{exp.empresa}</p>
                </div>
                <span style={{ fontSize: 11, color: i === 0 ? '#1a1a2e' : '#e8c96e', background: i === 0 ? '#e8c96e' : '#1a1a2e', padding: '3px 10px', borderRadius: 99, fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {exp.periodo}
                </span>
              </div>
              <p style={{ fontSize: 12.5, color: '#666', lineHeight: 1.65, marginTop: 7 }}>{exp.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section>
        <SectionTitle title="Stack Principal" />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {data.stack.map((tech, i) => (
            <span key={i} style={{
              fontSize: 12, fontWeight: 500, padding: '5px 13px', borderRadius: 99,
              background: i % 3 === 0 ? '#1a1a2e' : i % 3 === 1 ? 'rgba(232,201,110,0.13)' : '#fff',
              color: i % 3 === 0 ? '#e8c96e' : '#1a1a2e',
              border: `0.5px solid ${i % 3 === 0 ? '#1a1a2e' : '#ddd'}`
            }}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <div style={{ borderTop: '1px solid #e8e5e0', paddingTop: 13, display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
        <p style={{ fontSize: 10.5, color: '#ccc', letterSpacing: '0.08em' }}>
          Currículo · React + Flexbox + CSS Grid + Tailwind CSS · Prática #8
        </p>
      </div>

    </main>
  )
}