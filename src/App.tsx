import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/Home'
import Header from './assets/pages/Header'
import Footer from './assets/pages/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
