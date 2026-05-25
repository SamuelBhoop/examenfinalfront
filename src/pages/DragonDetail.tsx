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

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <Link to="/" className="text-blue-600 font-semibold">← Volver</Link>

      <div className="bg-white rounded-lg shadow p-6 mt-4">
        <div className="flex justify-between items-start">
          <h1 className="text-3xl font-bold capitalize">{dragon.name}</h1>
          <button onClick={toggleFavorite} className="text-3xl" aria-label="favorito">
            {fav ? '★' : '☆'}
          </button>
        </div>

        <img
          src={dragon.image}
          alt={dragon.name}
          className="w-48 h-48 object-contain mx-auto"
        />

        <div className="grid grid-cols-2 gap-4 mt-4">
          <p><strong>Numero en Pokedex:</strong> {dragon.id}</p>
          <p><strong>Altura:</strong> {dragon.height}</p>
          <p><strong>Peso Aproximado:</strong> {dragon.weight}</p>
          <p><strong>Tipos:</strong> {dragon.types.join(', ')}</p>
        </div>

        <h2 className="text-xl font-bold mt-4">Habilidades</h2>
        <ul className="list-disc list-inside capitalize">
          {dragon.abilities.map((a: string) => (
            <li key={a}>{a}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-4">Stats</h2>
        <ul className="list-disc list-inside capitalize">
          {dragon.stats.map((s: { name: string; base: number }) => (
            <li key={s.name}>{s.name}: {s.base}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
