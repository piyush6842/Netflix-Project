import { useEffect } from 'react'
import { ApiOptions } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTopRatedMovies } from '../utils/MovieSlice';

const useTopRatedMoviesApi = () => {
  const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)
    const dispatch = useDispatch();
  const TopRatedMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',ApiOptions);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(()=>{
    if(!topRatedMovies) TopRatedMovies();
  },[])
}

export default useTopRatedMoviesApi;
