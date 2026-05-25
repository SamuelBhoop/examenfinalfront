import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import DragonList from '../components/DragonList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
import { fetchDragons } from '../services/DragonService'

export default function Home() {
    const [dragons, setDragons] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [search, setSearch] = useState('')

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true)
                setError(null)
                const data = await fetchDragons()
                setDragons(data)
            } catch (err: any) {
                setError(err.message || 'Error al cargar los dragones (o pokemones tipo dragon)')
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [])

    const filtered = dragons.filter((dragon: any) => 
        dragon.name.toLowerCase().includes(search.toLowerCase())
    )
    
    return (
        <div className="p-4">
            <SearchBar onSearch={setSearch} />

            {loading && <Loader />}
            {error && !loading && <ErrorMessage message={error} />}
            {!loading && !error && filtered.length === 0 && <EmptyState />}
            {!loading && !error && filtered.length > 0 && (
                <DragonList dragons={filtered} />
            )}
        </div>
    )
}