import DragonCard from './DragonCard'

export default function DragonList({ dragons }: { dragons: any[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {dragons.map((dragon) => (
        <DragonCard key={dragon.name} dragon={dragon} />
      ))}
    </div>
  )
}
