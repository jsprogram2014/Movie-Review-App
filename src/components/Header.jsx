import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
          <Link to="/" className="logo">🎬 Movie Review</Link>
        <nav className="nav">
          <a href="https://react.dev" target="_blank" rel="noreferrer">React</a>
        </nav>
      </div>
    </header>
  )
}