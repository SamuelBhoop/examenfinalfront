import { createContext, useContext, useState } from 'react'

type FavoritesContextType = {
  favorites: any[]
  addFavorite: (dragon: any) => void
  removeFavorite: (dragonName: string) => void
  isFavorite: (dragonName: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<any[]>([])

  const addFavorite = (dragon: any) => {
    setFavorites((prev) => {
      if (prev.some((d) => d.name === dragon.name)) return prev
      return [...prev, dragon]
    })
  }

  const removeFavorite = (dragonName: string) => {
    setFavorites((prev) => prev.filter((d) => d.name !== dragonName))
  }

  const isFavorite = (dragonName: string) => {
    return favorites.some((d) => d.name === dragonName)
  }

  const value: FavoritesContextType = {
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
