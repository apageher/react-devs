/* eslint-disable react/prop-types */
const ListOfMovies = ({ movies }) => {
    return (
        <ul className="movies">
            {movies.map(movie => {
                return (
                    <li key={movie.id} className="movie">
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <img src={movie.image} alt={movie.title}></img>
                    </li>
                )

            })}
        </ul>
    )
}

const NoMoviesResult = () => {
    return (
        <p>No se encontraron resultados para la búsqueda</p>
    )
}

export const Movies = ({ movies }) => {

    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResult />
    )
}