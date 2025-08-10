import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMovie } from '../features/movies/moviesSlice.js'
import '../styles/Forms.css'

export default function AddMovieForm() {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('')
  const dispatch = useDispatch()

  function onSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    dispatch(addMovie({ title, year, genre }))
    setTitle(''); setYear(''); setGenre('')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <h2>Add a Movie</h2>
      <div className="row">
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Movie title" />
      </div>
      <div className="row">
        <label>Year</label>
        <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2010" inputMode="numeric" />
      </div>
      <div className="row">
        <label>Genre</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Sci‑Fi" />
      </div>
      <button className="btn" type="submit">Add</button>
    </form>
  )
}