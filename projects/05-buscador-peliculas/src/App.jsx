import { useEffect, useState, useRef, useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks'
import debounce from 'just-debounce-it'
// import responseWithoutMovies from './mocks/no-results.json'
//https://www.omdbapi.com/?s=matrix&apikey=af9c5d43

const useSearch = () => {

  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  const updateSearch = (query) => {
    setSearch(query)
  }

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracetes')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {

  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , []) //o getMovies

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    event.preventDefault()
    const newSearch = event.target.value
    updateSearch(event.target.value)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de peliculas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{
            border: '1px solid transparent', borderColor: error ? 'red' : 'transparent'
          }}
            value={search} onChange={handleChange} name='query' placeholder='Avengers, Star Wars, Matrix...'></input>
          <input type='checkbox' onChange={handleSort} checked={sort}></input>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading
          ? <p>Cargando...</p>
          : <Movies movies={movies}></Movies>
        }

      </main>

    </div>
  )
}

export default App
