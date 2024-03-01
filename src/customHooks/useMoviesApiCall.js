import { useEffect } from 'react'
import { ApiOptions } from '../utils/Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/MovieSlice'

const useMoviesApiCall = () => {
  const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)
    const dispatch = useDispatch();
  const MoviesApiCall = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',ApiOptions);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }
  useEffect(()=>{
    if(!nowPlayingMovies) MoviesApiCall();
  },[])
}

export default useMoviesApiCall;
