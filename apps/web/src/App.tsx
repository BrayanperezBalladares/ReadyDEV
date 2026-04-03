import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import InterviewPage from './pages/InterviewPage'
import CompletePage from './pages/CompletePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/interview" element={<InterviewPage />} />
      <Route path="/complete" element={<CompletePage />} />
    </Routes>
  )
}

export default App