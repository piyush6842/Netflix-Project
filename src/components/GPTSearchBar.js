import React, { useRef } from 'react'
import { ApiOptions } from '../utils/Constants';
import { useDispatch } from 'react-redux';
import { addGPTMovieResult } from '../utils/GPTSlice';

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  console.log(searchText);
  const handleGPTSearchClick = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+searchText.current.value,ApiOptions);
    const json = await data.json();
    const results = (json.results);
    console.log(results);
    dispatch(addGPTMovieResult(results));
  }
  return (
      <div className='flex justify-center md:pt-[4%]'>    
      <form className='w-full md:w-1/2 grid grid-cols-12 bg-black ' onSubmit={(e)=>e.preventDefault()}>
         <input type="text" 
          ref={searchText}
          className=' bg-gray-800 border rounded-sm p-3 m-4 col-span-9 text-white hover:opacity-80'
          placeholder='What do you want to search?'/>
          <button className='mr-4 md:mr-0 bg-red-700 text-white rounded-md col-span-3 ml-3 hover:opacity-80 font-bold text-lg md:text-xl'
           onClick={handleGPTSearchClick}>
            Search
          </button>
      </form>
    </div>
  )
}

export default GPTSearchBar;
