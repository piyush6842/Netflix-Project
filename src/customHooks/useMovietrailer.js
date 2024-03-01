
import { useDispatch, useSelector } from 'react-redux';
import { ApiOptions } from '../utils/Constants';
import { useEffect } from 'react';
import { addTrailerVideo } from '../utils/MovieSlice';

const useMovieTrailer = (movieId) => {
    const trailerVideo = useSelector(store=>store.movies.trailerVideo)
    const dispatch = useDispatch();
    const getMovieVideos = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', ApiOptions)
        const json = await data.json();
        const filterData = json.results.filter(video=>video.type==="Trailer")
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        if(!trailerVideo) getMovieVideos();
    },[])
}

export default useMovieTrailer;
