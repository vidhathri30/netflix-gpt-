import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="px-24 pt-[170px] absolute text-white bg-gradient-to-r from-black 'w-screen aspect-video">
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
        <button className="bg-white text-black p-4 px-12 text-xl font-bold rounded-lg hover:bg-opacity-80">Play</button>
        <button className="m-2 bg-gray-400 text-white p-4 px-12  font-bold bg-opacity-40 text-xl rounded-lg hover:bg-opacity-80 ">  More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle