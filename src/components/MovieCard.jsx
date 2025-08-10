import { Link } from 'react-router-dom'
import RatingStars from './RatingStars.jsx'
import '../styles/MovieCard.css'

export default function MovieCard({ movie, avg }) {
  return (
    <article className="card">
      <div className="card__body">
        <h3 className="card__title">
          {movie.title} <span className="muted">({movie.year})</span>
        </h3>
        <p className="muted">{movie.genre}</p>
        <RatingStars value={avg} />
        <Link className="btn" to={`/movie/${movie.id}`}>
          Details & Reviews
        </Link>
      </div>
    </article>
  )
}