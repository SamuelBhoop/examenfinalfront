import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export default function DragonCard({ dragon }: { dragon: any }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const fav = isFavorite(dragon.name)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    if (fav) removeFavorite(dragon.name)
    else addFavorite(dragon)
  }

  return (
    <Link
      to={`/dragon/${dragon.name}`}
      className="bg-black rounded-lg shadow p-3 flex flex-col items-center hover:shadow-lg transition relative"
    >
      <button
        onClick={toggleFavorite}
        className="absolute top-2 right-2 text-2xl"
        aria-label="favorito"
      >
        {fav ? '★' : '☆'}
      </button>
      <img src={dragon.image} alt={dragon.name} className="w-24 h-24 object-contain" />
      <p className="capitalize font-semibold mt-2">{dragon.name}</p>
    </Link>
  )
}
