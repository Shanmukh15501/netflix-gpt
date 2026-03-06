import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'

const Login = () => {
  const [IsSignIn,SetIsSignIn] = useState(true);
  const HandleSignInToggle = () =>  {
    SetIsSignIn(!IsSignIn);
  }
  return (
    <div className='absolute w-full'>
      <Header />

      <img 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/75772f65-58b5-465f-b642-fa858b6168ca/web/IN-en-20260302-TRIFECTA-perspective_26418256-c5f3-4e9a-8160-a6b534228a2f_large.jpg" 
        alt="netflix-header"
        className="w-full"
      />

      <form className="w-3/12 h-[450px] absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 bg-black text-left bg-opacity-80">
        <h1 className="font-bold text-3xl m-2 text-white">{IsSignIn?"Sign-In":"Sign-Up"}</h1>

          {!IsSignIn ? (

          <input 
          type="text" 
          placeholder='Enter Name' 
          className='p-3 m-2 w-[90%] bg-gray-600'
        />
          ):<></>}

         <input 
          type="text" 
          placeholder='Enter Email or Phone Number' 
          className='p-3 m-2 w-[90%] bg-gray-600'
        />

        <input 
          type="password" 
          placeholder='Password' 
          className='p-3 m-2 w-[90%] bg-gray-600'
        />

        <button className='p-3 m-2 w-[90%] bg-red-600 text-white block'>
          {IsSignIn?"Sign-In":"Sign-Up"}
        </button>
  

        <p onClick={HandleSignInToggle} className='p-4 text-white'>
          {IsSignIn ? (
            <>Are you new to Netflix? <a href="#" className="p-2 underline underline-offset-4">Sign-Up</a> Now</>
          ) : (
            <>Already a user? <a href="#" className="p-2 underline underline-offset-4">Sign-In</a> Now</>
          )}
        </p>

      </form>
    </div>
  )
}

export default Login