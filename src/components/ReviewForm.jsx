import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addReview } from '../features/movies/moviesSlice.js'
import '../styles/Forms.css'

export default function ReviewForm({ movieId }) {
  const [author, setAuthor] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault()
    dispatch(addReview({ movieId, author, rating, text }))
    setAuthor(''); setRating(5); setText('')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h3>Add a Review</h3>
      <div className="row">
        <label>Name</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Your name" />
      </div>
      <div className="row">
        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {[5,4,3,2,1].map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </div>
      <div className="row">
        <label>Review</label>
        <textarea rows="3" value={text} onChange={(e) => setText(e.target.value)} />
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}