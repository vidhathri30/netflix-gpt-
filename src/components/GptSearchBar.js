import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import config from '../utils/configSlice'
import { useSelector } from 'react-redux'
import openai from '../utils/openAi'


const GptSearchBar = () => {
    const langKey=useSelector(store=>store.config.lang)
    const searchText=useRef(null);
    const handleGptSearchClick= async()=>{
      console.log(searchText.current.value)
     

    }
  return (
    <div className='pt-[10%] flex justify-center'>
       
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='col-span-3 py-2 px-4 bg-red-700 text-white rounded-lg m-2 ' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar