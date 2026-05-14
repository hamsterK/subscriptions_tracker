import { Routes, Route, Link } from 'react-router-dom'
import Home from './assets/pages/Home'
import Header from './assets/pages/Header'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
