import MovieList from '../components/MovieList.jsx'
import AddMovieForm from '../components/AddMovieForm.jsx'

export default function Home() {
  return (
    <div className="stack">
      <AddMovieForm />
      <MovieList />
    </div>
  )
}