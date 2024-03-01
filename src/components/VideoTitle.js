import React from 'react';

const VideoTitle = ( {title,overview} ) => {
  return (
    <div className='w-screen aspect-video absolute pt-48 px-12 bg-gradient-to-r md:bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold text-white'> {title} </h1>
      <p className='mt-8 mb-4 md:w-2/5 text-white'> {overview} </p>
      <div>
        <button className='mr-4 p-1 px-4 bg-white text-black border-2 rounded-sm border-black hover:opacity-80'> Play </button>
        <button className='bg-white text-black ml-1 p-1 border-2 rounded-sm border-black hover:opacity-60'> ⓘ More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle
