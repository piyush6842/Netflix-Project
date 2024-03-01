import React from 'react'
import { Image_URL } from '../utils/Constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40 pr-4'>
      <img  className="" alt='Movie' src={Image_URL+posterPath}/>
    </div>
  )
}

export default MovieCard
