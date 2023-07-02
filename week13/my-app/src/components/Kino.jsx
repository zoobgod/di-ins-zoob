import React, { useState } from 'react'

const KinoAll = () => {
  const [movie, setMovie] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchMovie = async () => {
    const response = await fetch('https://api.kinopoisk.dev/v1.3/movie/random', {
      headers: {
        'X-API-KEY': 'TXNBP21-7SS404Z-HZD1MCS-RJ3YR8T'
      }
    })
    const data = await response.json()
    console.log(data)
    setMovie({
      title: data.alternativeName,
      releaseDate: data.year,
      actors: data.persons
        .filter(person => person.enProfession === 'actor')
        .slice(0, 3)
        .map(person => person.name),
      director: data.persons
        .filter(person => person.enProfession === 'director')
        .slice(0, 1)
        .map(person => person.name),
      rating: data.rating?.kp?.toString() || '',
      posterUrlPreview: data.poster.url
    })
  }

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={searchTerm}
        onChange={handleSearchTermChange}
        list="movie-titles"
      />
      <datalist id="movie-titles">
        <option value="movie1" />
        <option value="godfather1" />
        <option value="shawshank" />
        <option value="not a movie" />
      </datalist>
      <button onClick={fetchMovie}>Get random movie</button>
      {movie && (
        <div className="movieRandom">
          <img id="posterPreview" src={movie.posterUrlPreview} alt="Movie poster" />
          <h2>{movie.title}</h2>
          <p>Release date: {movie.releaseDate}</p>
          <p>Actors: {movie.actors.join(', ')}</p>
          <p>Director: {movie.director}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      )}
    </div>
  )
}



export default KinoAll

