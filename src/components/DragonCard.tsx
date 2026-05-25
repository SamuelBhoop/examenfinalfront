import { Link } from 'react-router-dom'
import { useFavorites } from '../context/FavoritesContext'

export default function DragonCard({ dragon }: { dragon: any }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const fav = isFavorite(dragon.name)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    if (fav) removeFavorite(dragon.name)
    else addFavorite(dragon)

  return (
    <div className="...">
      {/* Link a /dragon/{dragon.name} */}
    </div>
  )
  }
}