import React, { useState } from 'react'

const GuessTheMovie = () => {
  const [movie, setMovie] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [guess, setGuess] = useState('')
  const [attempts, setAttempts] = useState(5)
  const [message, setMessage] = useState('')

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
    setGuess('')
    setAttempts(5)
    setMessage('')
  }

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value)
  }

  const handleGuessChange = event => {
    setGuess(event.target.value)
  }

  const handleGuessSubmit = event => {
    event.preventDefault()
    if (guess.toLowerCase() === movie.title.toLowerCase()) {
      setMessage(`Congratulations! You guessed the movie "${movie.title}"!`)
      setMovie(null)
    } else {
      setAttempts(attempts - 1)
      if (attempts === 1) {
        setMessage(`Sorry, you're out of attempts. The movie was "${movie.title}".`)
        setMovie(null)
      } else {
        setMessage(`Sorry, that's not the right movie. You have ${attempts - 1} attempts left.`)
      }
    }
  }

  return (
    <div>
      {movie ? (
        <div>
          <img id="posterPreview" src={movie.posterUrlPreview} alt="Movie poster" />
          <h2>Guess the movie!</h2>
          <p>Release date: {movie.releaseDate}</p>
          <p>Actors: {movie.actors.join(', ')}</p>
          <p>Director: {movie.director}</p>
          <p>Rating: {movie.rating}</p>
          <form onSubmit={handleGuessSubmit}>
            <label>
              Guess the movie:
              <input type="text" value={guess} onChange={handleGuessChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Search for a movie"
            value={searchTerm}
            onChange={handleSearchTermChange}
            list="movie-titles"
          />
          <datalist id="movie-titles">
            <option value="sa" />
            <option value="godfather1" />
            <option value="shawshank" />
            <option value="not a movie" />
          </datalist>
          <button onClick={fetchMovie}>Get random movie</button>
        </div>
      )}
    </div>
  )
}

export default GuessTheMovie