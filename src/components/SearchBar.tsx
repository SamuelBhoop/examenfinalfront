import { useState } from 'react'

export default function SearchBar({ onSearch }: { onSearch: (value: string) => void }) {
  const [value, setValue] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Buscar dragones..."
      className="w-full p-3 border border-black rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  )
}
