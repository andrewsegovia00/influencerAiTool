// import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import { chatLogo } from "../assets"

const Nav = () => {

  // TODO: add prop isSignedIn for checking if user is signed in. If not signed in, display login and sign up buttons, else show user dropdown
  const { showSignUp, setShowSignUp } = useContext(UserContext);
  const { showLogin, setLogin } = useContext(UserContext);

  const handleSignUpClick = () => {
    setShowSignUp(!showSignUp);
  }
  const handleToggleLogin = () => {
    setLogin(!showLogin);
  }

  return (
    <div 
        className="text-3xl bg-grey-1 flex justify-center px-5 relative">
        <div 
        className="inline-flex items-center">
            <img 
                className="w-20 mr-24" 
                src={chatLogo} 
                alt="logo" 
            />
        </div>
        <ul className="inline-flex items-center text-base font-poppins">
            <li className="list-container "><span>OPTION 1</span></li>
            <li className="list-container "><span>OPTION 2</span></li>
            <li><span>OPTION 3</span></li>
        </ul>
        <div 
            className="flex items-center ml-24">
            <button 
                className="mr-2 px-3 py-1 text-sm rounded-2xl font-bold font-poppins border-2 text-blue-1 border-blue-1 hover:text-grey-1 hover:bg-blue-1 inline-flex items-center"                 onClick={handleToggleLogin}>
                LOG IN
            </button>
            <button 
                className="px-3 py-1 text-sm rounded-2xl font-bold font-poppins border-2 text-blue-1 border-blue-1 hover:text-grey-1 hover:bg-blue-1 inline-flex items-center" 
                onClick={handleSignUpClick}>
                SIGN UP
            </button>

        </div>
    </div>
  );
};

export default Nav
