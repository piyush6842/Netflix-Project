import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-64 md:-mt-56 relative z-20 pl-0 md:pl-8'>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
      </div>
    </div>
    )
  );
}

export default SecondaryContainer;
