import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import DragonDetail from './pages/DragonDetail'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div className="min-h-screen">
      <nav className="bg-yellow-400 p-4 flex gap-4 shadow">
        <Link to="/" className="font-bold">Dragones</Link>
        <Link to="/favorites" className="font-bold">Favoritos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dragon/:name" element={<DragonDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
