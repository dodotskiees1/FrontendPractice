

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Button from './components/button'
import Main from './pages/main'
import Components from './pages/Components'

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
