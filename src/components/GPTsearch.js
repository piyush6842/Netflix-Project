import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTSearchRecommendations from './GPTSearchRecommendations'
import { MoviesImage } from '../utils/Constants'

const GPTsearch = () => {
  return (
    <>
      <div className='absolute -z-10'>
      <img className='h-screen object-cover md:w-screen'
       alt='' 
       src={MoviesImage}>
       </img>
      </div>
      <div className='pt-[30%] md:p-0'>
      <GPTSearchBar />
      <GPTSearchRecommendations  />
    </div>
    </>
  )
}

export default GPTsearch
