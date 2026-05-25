import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<any[]>([])

  const addFavorite = (dragon: any) => {
    setFavorites((prev) => {
      if (prev.some((d) => d.name === dragon.name)) return prev
      return [...prev, dragon]
    })
  } 

  const removeFavorite = (dragonName: String) => {
    setFavorites((prev) => prev.filter((d) => d.name !== dragonName))

  }
  
  const isFavorite = (dragonName: String) => {
    return favorites.some((d) => d.name === dragonName)
  }

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider')
  }
  return context
}