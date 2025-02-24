

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Components from './pages/Components'
import Main from './pages/Main'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <BrowserRouter>

          <Routes>

          <Route index element={<Main />} />

           <Route path="/components" element={<Components />} />

            </Routes>

          </ BrowserRouter>
    </div>
  )
}

export default App
