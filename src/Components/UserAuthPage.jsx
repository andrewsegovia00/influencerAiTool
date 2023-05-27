// import React from 'react'
import { useContext } from 'react';
import { UserContext } from './UserContext';

function Auth() {
  const { showLogin, setLogin} = useContext(UserContext);

  const handleToggleLogin = () => {
    setLogin(!showLogin);
  };


  return (
  //  <div className="flex items-center justify-center h-screen">
  //     <div className="font-poppins text-center border-2 border-black px-16 py-20 rounded-3xl">
  <div className={`flex items-center justify-center ${showLogin ? 'absolute' : 'relative'} -right-px -left-px -top-px -bottom-px`}>
  {showLogin && <div className="fixed left-0 right-0 bottom-0 top-0 pointer-none backdrop-blur-sm" />}
  <div className={`bg-white font-poppins text-center border-2 border-black px-16 py-20 rounded-3xl ${showLogin ? 'relative' : 'hidden'}`}>
    
    <button onClick={handleToggleLogin} className="cursor-pointer border-none font-bold outline-none bg-none text-2xl absolute right-5 top-3" id="close-button">
      &times;
    </button>
        <img src="https://i.pinimg.com/originals/5c/ae/c6/5caec6f372267b0d147ff14ca8b97a39.jpg" className="w-20 mx-auto" />
        <label className="pl-2 flex text-center">Username</label>
        <input className="border-solid border-2 border-black rounded-xl" type="email" />
        <label className="pl-2 flex">Password</label>
        <input className="border-solid border-2 border-black rounded-xl" type="password" />
        <div className="flex justify-center"><input
            className="mt-5 border-2 rounded-3xl px-4 border-black py-1"
            type="button"
            value="LOG IN"/></div>
        <p className="mt-5 text-xs underline">
          <a href="">SIGN UP</a>
        </p>
      </div>
    </div>
  )
}
export default Auth