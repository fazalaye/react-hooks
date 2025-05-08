import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 8.8
    },
    {
      title: 'The Shawshank Redemption',
      description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL: 'https://via.placeholder.com/150',
      rating: 9.3
    }
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(title.toLowerCase());
      const ratingMatch = rating === '' || movie.rating >= Number(rating);
      return titleMatch && ratingMatch;
    });
    setFilteredMovies(filtered);
  };

  const addMovie = () => {
    const newMovie = {
      title: prompt('Movie title:'),
      description: prompt('Movie description:'),
      posterURL: prompt('Poster URL:'),
      rating: Number(prompt('Rating (0-10):'))
    };
    setMovies([...movies, newMovie]);
    setFilteredMovies([...filteredMovies, newMovie]);
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <button onClick={addMovie}>Add New Movie</button>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;