import { useNavigate } from 'react-router-dom'

function CompletePage() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>¡Entrevista completada!</h1>
      <p>Bien hecho. Has respondido todas las preguntas de esta sesión.</p>
      <button onClick={() => navigate('/')}>
        Volver al inicio
      </button>
    </div>
  )
}

export default CompletePage