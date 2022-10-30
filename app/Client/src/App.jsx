import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Layouts
import MainLayout from './layouts/MainLayout'
// Pages
import Landing from './pages/landing/Landing'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Landing />} />
        </Route>
        <Route path='*' element={<h3>Page not found.</h3>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
