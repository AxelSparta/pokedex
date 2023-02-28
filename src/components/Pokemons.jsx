import React, { useEffect, useState } from 'react'
import { PokemonCard } from './'

const Pokemons = () => {
  const [pokemons, setPokemons] = useState(null)
  const [loader, setLoader] = useState(false)

  const getPokemons = url => {
    setLoader(true)
    fetch(url)
      .then(res => res.json())
      .then(json => setPokemons(json))
      .catch(err => console.error(err))
      .finally(() => setLoader(false))
  }
  useEffect(() => {
    getPokemons('https://pokeapi.co/api/v2/pokemon')
  }, [])

  return (
    <div className='max-w-5xl mx-auto'>
      {loader && <p className='text-center text-lg'>Cargando...</p>}
      {pokemons && (
        <>
          <div className='flex flex-wrap gap-4 justify-center p-4'>
            {pokemons.results.map(pokemon => (
              <PokemonCard
                name={pokemon.name}
                url={pokemon.url}
                key={pokemon.name}
              />
            ))}
          </div>
          <div className='flex p-4 justify-center gap-2'>
            <button
              className='pagBtn'
              disabled={!pokemons.previous}
              onClick={() => {
                getPokemons(pokemons.previous)
              }}
            >
              Prev
            </button>
            <button
              className='pagBtn'
              disabled={!pokemons.next}
              onClick={() => {
                getPokemons(pokemons.next)
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Pokemons
