import React ,{useEffect} from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser} from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { toggleGptSearchView } from '../utils/gptSlice';



import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  const handleSignOut=()=>{
signOut(auth).then(() => {
  
}).catch((error) => {
  // An error happened.
  navigate("/error");
});

  }
 
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL}= user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}
          )
        );
        navigate("/browse");
       
      } 
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe component unmounts
    return ()=>unsubscribe();

  },[]);
  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView ())
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      
    <img className="w-[200px] mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
    
    {user&& (<div className='flex p-4'>
      {showGptSearch &&<select className='p-2 m-2 bg-gray-600 text-white' onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map(lang=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
    <button onClick={handleGptSearch} className='text-white bg-gray-600 px-2 py-2 mx-2 my-2'>
      {showGptSearch? "Home" :"GPT Search"}</button><img
            className="hidden md:block w-12  h-12 "
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            (Sign Out)
          </button></div>
          )}
    </div>
   
  )
}

export default Header;