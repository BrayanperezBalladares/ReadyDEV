import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  const startInterview = (type: string) => {
    navigate('/interview', { state: { type } })
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>ReadyDev</h1>
      <p>Prepárate para tu próxima entrevista técnica.</p>

      <h2>Selecciona el tipo de entrevista</h2>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <button onClick={() => startInterview('technical')}>
          Técnica
        </button>
        <button onClick={() => startInterview('behavioral')}>
          Behavioral
        </button>
      </div>
    </div>
  )
}

export default HomePage