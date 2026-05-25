const TYPE_URL = 'https://pokeapi.co/api/v2/type/dragon'
const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function fetchDragons() {
  const res = await fetch(TYPE_URL)
  if (!res.ok) throw new Error('La lista de dragones no pudo ser cargada')
  const data = await res.json()

  const dragons = await Promise.all(
    data.pokemon.map(async (entry: any) => {
      const detailRes = await fetch(entry.pokemon.url)
      if (!detailRes.ok) throw new Error(`No pude cargar :C ${entry.pokemon.name}`)
      const detail = await detailRes.json()
      return {
        id: detail.id,
        name: detail.name,
        image:
          detail.sprites?.other?.['official-artwork']?.front_default ||
          detail.sprites?.front_default,
        types: detail.types.map((t: any) => t.type.name),
      }
    })
  )

  return dragons
}

export async function fetchDragonDetail(name: string) {
    const res = await fetch(`${POKEMON_URL}/${name}`)
    if (!res.ok) throw new Error('No pude cargar el detalle del dragoncito :c, losiento ;c')
    const data = await res.json()
  
    return {
      id: data.id,
      name: data.name,
      image:
        data.sprites?.other?.['official-artwork']?.front_default ||
        data.sprites?.front_default,
      types: data.types.map((t: any) => t.type.name),
      height: data.height,
      weight: data.weight,
      abilities: data.abilities.map((a: any) => a.ability.name),
      stats: data.stats.map((s: any) => ({
        name: s.stat.name,
        base: s.base_stat,
      })),
    }
  }
  
