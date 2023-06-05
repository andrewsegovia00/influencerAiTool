/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Auth() {
  const { showLogin, setLogin} = useContext(UserContext);

  const handleToggleLogin = () => {
    setLogin(!showLogin);
  };


  return (
  <div 
    className={`text-grey-1 flex items-center justify-center ${showLogin ? 'absolute' : 'relative'} -right-px -left-px -top-px -bottom-px`}>
    {showLogin && <div className="fixed left-0 right-0 bottom-0 top-0 pointer-none backdrop-blur-lg" onClick={handleToggleLogin} />}
      <div 
        className={`bg-gradient-to-b from-blue-500/80 to-purple-500/60 drop-shadow-lg font-poppins text-center px-4 py-10 rounded-3xl ${showLogin ? 'relative' : 'hidden'}`}>
        <div className="p-4 w-full">
        <button
            onClick={handleToggleLogin}
            className="cursor-pointer border-none font-bold outline-none bg-none text-2xl absolute right-5 top-3" 
            id="close-button">
            &times;
        </button>
          <div
            className="text-left font-bold text-3xl">
            Welcome Back
          </div>
          <div 
            className="mb-4 text-left">
            Enter your account details below
          </div>
          <input 
            className="mb-4 mt-5 placeholder-blue-1 indent-3 w-full block text-blue-1 rounded-xl" 
            type="email" 
            placeholder="Email"
          />
          <input 
            className="placeholder-blue-1 w-full indent-3 text-blue-1 block rounded-xl mt-2" type="password" 
            placeholder="Password"
          />
          <div 
          className="flex justify-center">
            <input
                className=" hover:bg-blue-1 hover:text-grey-1 hover-bg-grey-1 mt-9 bg-grey-1 py-0.5 w-full font-bold text-blue-1"
                type="button"
                value="LOG IN"/>
          </div>
            <p 
              className="mt-5 text-xs text-dark-blue-1">
              Don't have an account? 
              <a 
              className="hover:underline text-grey-1 " 
              href="">
                <span className='ml-1'>
                SIGN UP
                </span>
              </a>
            </p>
        </div>
    </div>
  </div>
  )
}
export default Auth