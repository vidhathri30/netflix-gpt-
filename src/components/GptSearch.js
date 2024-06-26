import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion';
import GptSearchBar from './GptSearchBar';
import {BG_URL} from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
      <div className='absolute -z-10'>
       <img alt="img" src={BG_URL}/>
       </div>
      <GptSearchBar/>
      
      <GptMovieSuggestion/> 
    </div>
  )
}

export default GptSearch