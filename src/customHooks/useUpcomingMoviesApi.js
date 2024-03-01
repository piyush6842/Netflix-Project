import { useEffect } from 'react'
import { ApiOptions } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies } from '../utils/MovieSlice'

const useUpcomingMoviesApi = () => {
  const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)
    const dispatch = useDispatch();
  const UpcomingMovies = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',ApiOptions);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }
  useEffect(()=>{
    if(!upcomingMovies) UpcomingMovies();
  },[])
}

export default useUpcomingMoviesApi;
