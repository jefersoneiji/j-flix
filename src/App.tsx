import { MovieCard } from './components/movie-card'
import { Navbar } from './components/navbar'
import './css/_grid.scss'

export function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          {movies.map(({ id }) =>
            <div key={id} className='col-2 col-md-3 col-sm-6' style={{ display: 'flex', justifyContent: 'center' }}>
              <MovieCard id={id} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}


const movies = [
  { "id": 1, "title": "The Matrix", "releaseYear": 1999, "rating": 4.5 },
  { "id": 2, "title": "Inception", "releaseYear": 2010, "rating": 4.8 },
  { "id": 3, "title": "The Shawshank Redemption", "releaseYear": 1994, "rating": 5 },
  { "id": 4, "title": "Pulp Fiction", "releaseYear": 1994, "rating": 4.7 },
  { "id": 5, "title": "The Dark Knight", "releaseYear": 2008, "rating": 4.9 },
  { "id": 6, "title": "Fight Club", "releaseYear": 1999, "rating": 4.6 },
  { "id": 7, "title": "Forrest Gump", "releaseYear": 1994, "rating": 4.8 },
  { "id": 8, "title": "The Lord of the Rings: The Return of the King", "releaseYear": 2003, "rating": 4.9 },
  { "id": 9, "title": "Interstellar", "releaseYear": 2014, "rating": 4.7 },
  { "id": 10, "title": "The Godfather", "releaseYear": 1972, "rating": 4.9 },
  { "id": 11, "title": "Gladiator", "releaseYear": 2000, "rating": 4.6 },
  { "id": 12, "title": "The Silence of the Lambs", "releaseYear": 1991, "rating": 4.8 },
  { "id": 13, "title": "Schindler's List", "releaseYear": 1993, "rating": 4.9 },
  { "id": 14, "title": "The Departed", "releaseYear": 2006, "rating": 4.7 },
  { "id": 15, "title": "The Prestige", "releaseYear": 2006, "rating": 4.8 },
  { "id": 16, "title": "The Green Mile", "releaseYear": 1999, "rating": 4.7 },
  { "id": 17, "title": "Goodfellas", "releaseYear": 1990, "rating": 4.8 },
  { "id": 18, "title": "The Lion King", "releaseYear": 1994, "rating": 4.9 },
  { "id": 19, "title": "The Avengers", "releaseYear": 2012, "rating": 4.7 },
  { "id": 20, "title": "Avatar", "releaseYear": 2009, "rating": 4.5 }
]