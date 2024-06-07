import React from 'react'
import Header from './Header';
import { BG_URL } from '../utils/constants';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);
  const toggleSignInForm=()=>
  {
    setisSignInForm(!isSignInForm);

  }
  return (
    <div>
      <Header/>
    <div className="absolute">
      <img src={BG_URL} alt="logo"/>;
    </div>
    <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80 ">
      <h1 className='font-bold text-3xl p-2'>{isSignInForm? "Sign In":"Sign Up"}
      </h1>
      {!isSignInForm &&<input type="text" placeholder='Full Name' className="p-4 my-4 w-full bg-gray-600"
      />}
      <input type="text" placeholder='Email Address' className="p-4 my-4 w-full bg-gray-600"
      />
      
      <input type='password' placeholder='Password' className="p-4 my-4 w-full  bg-gray-600"
      />
      <button className="py-4 px-4 my-2 bg-red-700 w-full rounded-lg">{isSignInForm? "Sign In":"Sign Up"}
      </button>
      <p className='py-4 hover:cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to netflix? sign up now":"Already registered? Sign in now"}
      </p>
    </form>
      </div>
  )
}

export default Login;