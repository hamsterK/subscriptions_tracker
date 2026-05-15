import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/Home'
import Header from './assets/pages/Header'
import Footer from './assets/pages/Footer'
import NotFound from './assets/pages/NotFound'

function App() {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
