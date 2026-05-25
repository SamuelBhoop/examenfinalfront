import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchDragonDetail } from '../services/DragonService'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import { useFavorites } from '../context/FavoritesContext'

export default function DragonDetail() {
  const { name } = useParams()
  const [dragon, setDragon] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()

  useEffect(() => {
    if (!name) return
    const load = async () => {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchDragonDetail(name)
        setDragon(data)
      } catch (err: any) {
        setError(err.message || 'Error cargando el dragón :C')
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [name])

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />
  if (!dragon) return null

  const fav = isFavorite(dragon.name)
  const toggleFavorite = () => {
    if (fav) removeFavorite(dragon.name)
    else addFavorite(dragon)
  }

  // TODO: Botón de favorito

  return (
    <div className="p-4">
      <Link to="/" className="text-yellow-400">← Volver</Link>
      {/* Contenido del detalle */}
    </div>
  )
}