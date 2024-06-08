import React from 'react'
import Header from './Header';
import { BG_URL ,USER_AVATAR} from '../utils/constants';
import { useState ,useRef} from 'react';
import { checkValidData } from '../utils/Validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
 
  const dispatch=useDispatch();
  const [isSignInForm,setisSignInForm]=useState(true);
  const [errorMessage,seterrorMessage]=useState(null);
  const name = useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const toggleSignInForm=()=>
  {
    setisSignInForm(!isSignInForm);

  }
  const handleClick=()=>{
    // console.log(email.current.value);
    // console.log(password.current.value);
    
   const msg=checkValidData(email.current.value,password.current.value);
    seterrorMessage(msg);
    // console.log(msg);
    if(msg) return ;
    //sign up
 if(!isSignInForm)  {
createUserWithEmailAndPassword(auth,email.current.value,password.current.value )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: "name.current.value", photoURL:USER_AVATAR,
    }).then(() => {
      const {uid,email,displayName,photoURL}= auth.currentUser;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
      
      
    }).catch((error) => {
      seterrorMessage(error.message);
    });
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage)
  });
}
if(isSignInForm){
  
signInWithEmailAndPassword(auth,email.current.value,password.current.value )
  .then((userCredential) => {
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode+" "+errorMessage)
  });
}
    
  }
  return (
    <div>
      <Header/>
    <div className="absolute">
      <img src={BG_URL} alt="logo"/>;
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 ">
      <h1 className='font-bold text-3xl p-2'>{isSignInForm? "Sign In":"Sign Up"}
      </h1>
      {!isSignInForm &&<input ref={name} type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-gray-600"
      />}
      <input type="text" ref={email} placeholder='Email Address' className="p-4 my-4 w-full bg-gray-600"
      />
      
      <input ref={password} type='password' placeholder='Password' className="p-4 my-4 w-full  bg-gray-600"
      />
      <p className='text-red-500 font-bold text-lg py-2'>
        {errorMessage}
      </p>
      <button  className="py-4 px-4 my-2 bg-red-700 w-full rounded-lg" onClick={handleClick}>{isSignInForm? "Sign In":"Sign Up"}
      </button>
      <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to netflix? sign up now":"Already registered? Sign in now"}
      </p>
    </form>
      </div>
  )
}

export default Login;