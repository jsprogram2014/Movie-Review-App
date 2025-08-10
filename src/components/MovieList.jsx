import { useSelector } from 'react-redux'
import { selectMovies, selectAverageRating } from '../features/movies/moviesSlice.js'
import MovieCard from './MovieCard.jsx'

export default function MovieList() {
  const movies = useSelector(selectMovies)
  return (
    <div className="grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} avg={selectAverageRating(m)} />
      ))}
    </div>
  )
}