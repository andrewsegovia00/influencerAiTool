// import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';

const Nav = () => {
  const { showSignUp, setShowSignUp } = useContext(UserContext);
  const { showLogin, setLogin } = useContext(UserContext);

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  }
  const handleToggleLogin = () => {
    setLogin(!showLogin);
  }

  const imgBird =
    'https://images-platform.99static.com//lfc7hz9ix-6i4_41PoRUDGKYebc=/200x0:760x560/fit-in/500x500/99designs-contests-attachments/29/29200/attachment_29200812';

  return (
    <div 
        className="text-3xl h-full bg-yellow-200 drop-shadow-xl flex justify-center px-5 relative">
        <div 
        className="inline-flex items-center">
            <img 
                className="w-20 mr-24" 
                src={imgBird} 
                alt="logo" 
            />
        </div>
        <ul className="inline-flex items-center ">
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ul>
        <div 
            className="flex items-center ml-24">
            <button 
                className="mr-2 px-3 py-1 text-sm rounded-2xl font-bold font-poppins border-2 border-black hover:text-yellow-200 hover:bg-black inline-flex items-center"                 onClick={handleToggleLogin}>
                LOG IN
            </button>
            <button 
                className="px-3 py-1 text-sm rounded-2xl font-bold font-poppins border-2 border-black hover:text-yellow-200 hover:bg-black inline-flex items-center" 
                onClick={handleSignUpClick}>
                SIGN UP
            </button>

        </div>
    </div>
  );
};

export default Nav
