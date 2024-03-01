import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryConatiner from './SecondaryConatiner';
import useMoviesApiCall from '../customHooks/useMoviesApiCall'
import usePopularMoviesApi from '../customHooks/usePopularMoviesApi';
import useUpcomingMoviesApi from '../customHooks/useUpcomingMoviesApi';
import useTopRatedMoviesApi from '../customHooks/useTopRatedMoviesApi';
import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGPTSearch = useSelector(store=>store.GPT.showGPTSearch);
  useMoviesApiCall();
  useTopRatedMoviesApi();
  usePopularMoviesApi();
  useUpcomingMoviesApi();
  return (
    <div>
      <Header />
      {showGPTSearch ? <GPTsearch />: (
        <>
        <MainContainer />
        <SecondaryConatiner />
        </>
      )}
      
      
    </div>
  )
}

export default Browse;
