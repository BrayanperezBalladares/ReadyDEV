import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { createInterview, submitAnswer, completeInterview } from '../services/interviewService'

interface Question {
  id: string
  content: string
  category: string
}

function InterviewPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const type = location.state?.type || 'technical'

  const [sessionId, setSessionId] = useState<string>('')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const startSession = async () => {
      const data = await createInterview('fullstack', type)
      setSessionId(data.session.id)
      setQuestions(data.questions)
      setLoading(false)
    }
    startSession()
  }, [type])

  const handleSubmit = async () => {
    if (!answer.trim()) return
    setSubmitting(true)

    await submitAnswer(sessionId, questions[currentIndex].id, answer)
    setAnswer('')

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1)
    } else {
      await completeInterview(sessionId)
      navigate('/complete')
    }

    setSubmitting(false)
  }

  if (loading) return <p>Cargando entrevista...</p>

  const currentQuestion = questions[currentIndex]

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <p>Pregunta {currentIndex + 1} de {questions.length}</p>
      <h2>{currentQuestion.content}</h2>

      <textarea
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Escribe tu respuesta aquí..."
        rows={6}
        style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
      />

      <button
        onClick={handleSubmit}
        disabled={submitting || !answer.trim()}
        style={{ marginTop: '1rem' }}
      >
        {currentIndex + 1 < questions.length ? 'Siguiente pregunta' : 'Finalizar entrevista'}
      </button>
    </div>
  )
}

export default InterviewPage