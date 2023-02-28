import { Pokemons } from './components'

function App () {
  return (
    <>
      <header className='bg-red-500 p-4'>
        <div className='container flex flex-col items-center gap-4'>
          <div className='flex justify-between items-center w-full'>
            <h1 className='font-bold text-3xl text-center'>Pokemon API</h1>
            <div>
              <a href=''>hola</a>
              <a href=''>Favoritos</a>
            </div>
          </div>
          <form>
            <input
              type='search'
              name='search'
              id=''
              className='py-2 px-2 border rounded-tr-none rounded-br-none border-r-0 border-gray-600 rounded-lg focus:outline-none'
            />
            <button className='border border-gray-600 py-2 px-4 rounded-lg rounded-tl-none rounded-bl-none text-gray-600 hover:text-white hover:bg-gray-600'>
              <i class='fa-solid fa-magnifying-glass' />
            </button>
          </form>
        </div>
      </header>
      <Pokemons />
    </>
  )
}

export default App
