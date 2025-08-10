import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectMovieById, selectAverageRating } from '../features/movies/moviesSlice.js'
import ReviewForm from '../components/ReviewForm.jsx'
import RatingStars from '../components/RatingStars.jsx'

export default function MoviePage() {
  const { id } = useParams()
  const movie = useSelector((state) => selectMovieById(state, id))

  if (!movie) {
    return (
      <div className="stack">
        <p>Movie not found.</p>
        <Link to="/" className="btn btn--ghost">&larr; Back</Link>
      </div>
    )
  }

  const avg = selectAverageRating(movie)

  return (
    <div className="stack">
      <Link to="/" className="btn btn--ghost">&larr; Back</Link>
      <h2>
        {movie.title} <span className="muted">({movie.year})</span>
      </h2>
      <p className="muted">{movie.genre}</p>
      <RatingStars value={avg} />

      <section>
        <h3>Reviews</h3>
        {movie.reviews.length === 0 ? (
          <p>No reviews yet. Be the first!</p>
        ) : (
          <ul className="list">
            {movie.reviews.map((r) => (
              <li key={r.id} className="review">
                <div className="review__header">
                  <strong>{r.author}</strong> — <small>{new Date(r.createdAt).toLocaleString()}</small>
                </div>
                <div><strong>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</strong></div>
                <p>{r.text}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <ReviewForm movieId={movie.id} />
    </div>
  )
}