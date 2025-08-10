import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/movies/moviesSlice.js'

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
})

// Persist movies slice to localStorage (simple demo persistence)
if (typeof window !== 'undefined' && window.localStorage) {
  store.subscribe(() => {
    try {
      const state = store.getState()
      localStorage.setItem('moviesState', JSON.stringify(state.movies))
    } catch (e) {
      // ignore write errors
    }
  })
}

export default store