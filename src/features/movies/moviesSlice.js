import { createSlice, nanoid } from '@reduxjs/toolkit'

function loadSaved() {
  try {
    if (typeof window === 'undefined' || !window.localStorage) return undefined
    const raw = localStorage.getItem('moviesState')
    return raw ? JSON.parse(raw) : undefined
  } catch (e) {
    return undefined
  }
}

const defaultState = {
  byId: {
    m1: {
      id: 'm1',
      title: 'Inception',
      year: 2010,
      genre: 'Sci‑Fi',
      reviews: [
        { id: 'r1', author: 'Admin', rating: 5, text: 'Mind‑bending!', createdAt: new Date().toISOString() },
      ],
    },
    m2: {
      id: 'm2',
      title: 'The Dark Knight',
      year: 2008,
      genre: 'Action',
      reviews: [],
    },
  },
  allIds: ['m1', 'm2'],
}

const initialState = loadSaved() ?? defaultState

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: {
      reducer(state, action) {
        const m = action.payload
        state.byId[m.id] = { ...m, reviews: [] }
        state.allIds.unshift(m.id)
      },
      prepare({ title, year, genre }) {
        const id = 'm_' + nanoid()
        return { payload: { id, title: title?.trim() || 'Untitled', year: Number(year) || '', genre: genre?.trim() || '' } }
      },
    },
    addReview: {
      reducer(state, action) {
        const { movieId, review } = action.payload
        const movie = state.byId[movieId]
        if (movie) {
          movie.reviews.unshift(review)
        }
      },
      prepare({ movieId, author, rating, text }) {
        const review = {
          id: 'r_' + nanoid(),
          author: author?.trim() || 'Anonymous',
          rating: Number(rating) || 0,
          text: text?.trim() || '',
          createdAt: new Date().toISOString(),
        }
        return { payload: { movieId, review } }
      },
    },
  },
})

export const { addMovie, addReview } = moviesSlice.actions
export default moviesSlice.reducer

// Selectors
export const selectMovies = (state) => state.movies.allIds.map((id) => state.movies.byId[id])
export const selectMovieById = (state, id) => state.movies.byId[id]
export const selectAverageRating = (movie) => {
  if (!movie || !movie.reviews || movie.reviews.length === 0) return 0
  const sum = movie.reviews.reduce((a, r) => a + (Number(r.rating) || 0), 0)
  return Math.round((sum / movie.reviews.length) * 10) / 10
}