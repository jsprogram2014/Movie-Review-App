export default function RatingStars({ value = 0 }) {
  const filled = Math.round(value)
  const stars = '★'.repeat(filled) + '☆'.repeat(5 - filled)
  return (
    <div className="rating">
      <span className="rating__stars" aria-label={`Rating ${value} out of 5`}>
        {stars}
      </span>
      <span className="rating__value">{value.toFixed(1)}/5</span>
    </div>
  )
}