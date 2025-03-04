import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Components from './pages/Components'
import Main from './pages/Main'
import PWAPrompt from './components/PWAPrompt'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Main />} />
          <Route path="/components" element={<Components />} />
        </Routes>
        <PWAPrompt />
      </BrowserRouter>
    </div>
  )
}

export default App