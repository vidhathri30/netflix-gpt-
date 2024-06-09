import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(movies===null) return;
    const mainmovie=movies[1];

    
const {original_title, overview ,id}=mainmovie

  return (
    <div><VideoTitle title={original_title} overview={overview}/>
    <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer