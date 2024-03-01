import React from 'react';
import { useSelector } from 'react-redux';
import { Image_URL } from '../utils/Constants';

const GPTSearchRecommendations = () => {
const {gptMovies} = useSelector(store=>store.GPT);
console.log(gptMovies);
if(!gptMovies) return null;
return ( 
    <div className=''>
    <div className='mt-20 h-96 flex overflow-y-scroll'>
      {gptMovies.map((movies)=>
      <img className='pr-4 bg-black'
       src={Image_URL+movies.poster_path}
       alt='movie logo'></img>)}
    </div>
  </div>
  )
}

export default GPTSearchRecommendations;





