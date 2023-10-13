import { useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'
import { useRef } from 'react'

export const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const previousSearch = useRef(search)

    //En cada render, la definición de la función se regenerá, por lo que podemos usar useCallback
    const getMovies = useCallback(async ({ search }) => {
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const moviesResponse = await searchMovies({ search })
            setMovies(moviesResponse)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }, [])

    //Esto se va ejecutar en cada render, ya que está dentro del cuerpo de la función
    //es decir en cada cambio de state:
    // const sortedMovies = sort
    //     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    //     : movies
    // console.log('render', sortedMovies)

    //Así, si se cambia el input de busqueda (search) este código se relanzará
    //y solo tendría que ser o bien cuando se pulsa en buscar o en el click de ordenar
    const sortedMovies = useMemo(() => {
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])


    return { movies: sortedMovies, getMovies, loading, error }
}