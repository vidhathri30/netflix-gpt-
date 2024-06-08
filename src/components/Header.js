import React ,{useEffect} from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { addUser ,removeUser} from '../utils/userSlice';
import { onAuthStateChanged } from 'firebase/auth';



import { LOGO_URL } from '../utils/constants';


const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
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
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
    <img className="w-[200px] mx-auto md:mx-0" src={LOGO_URL} alt="logo" />
    {user&& (<div className='flex p-4'><img
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