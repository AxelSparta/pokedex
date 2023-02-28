import { useState, useEffect } from 'react'

const PokemonCard = ({ url, name }) => {
  const [pokemon, setPokemon] = useState(null)
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    const getPokemon = async () => {
      setLoader(true)
      const res = await fetch(url)
      const json = await res.json()
      setPokemon(json)
      setLoader(false)
    }
    getPokemon()
  }, [])

  return (
    <div className='border border-gray-700 rounded min-w-[150px] text-center py-3 px-2 min-h-[150px]'>
      {loader && <p className='text-lg'>Cargando...</p>}
      {pokemon && (
        <>
          <img
            className='mx-auto'
            src={pokemon.sprites.front_default}
            alt={`Pokemon ${name} image`}
          />
          <h2 className='font-bold text-lg'>{name}</h2>
        </>
      )}
    </div>
  )
}

export default PokemonCard
