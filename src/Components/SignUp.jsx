import { useContext } from 'react';
import { UserContext } from './UserContext';

function SignUp() {
  const { showSignUp, setShowSignUp } = useContext(UserContext);

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className={`flex items-center justify-center ${showSignUp ? 'absolute' : 'relative'} -right-px -left-px -top-px -bottom-px`}>
      {showSignUp && <div className="fixed left-0 right-0 bottom-0 top-0 pointer-none backdrop-blur-sm" />}
      <div className={`bg-white font-poppins text-center border-2 border-black px-16 py-20 rounded-3xl ${showSignUp ? 'relative' : 'hidden'}`}>
        <button onClick={handleToggleSignUp} className="cursor-pointer border-none font-bold outline-none bg-none text-2xl absolute right-5 top-3" id="close-button">
          &times;
        </button>
        <img src="https://i.pinimg.com/originals/5c/ae/c6/5caec6f372267b0d147ff14ca8b97a39.jpg" className="w-20 mx-auto" />
        <label className="pl-2 flex text-center">First Name</label>
        <input className="indent-3 border-solid border-2 border-black rounded-xl" type="text" />
        <label className="pl-2 flex text-center">Last Name</label>
        <input className="indent-3 border-solid border-2 border-black rounded-xl" type="text" />
        <label className="pl-2 flex text-center">Username / E-Mail</label>
        <input className="indent-3 border-solid border-2 border-black rounded-xl" type="email" />
        <label className="pl-2 flex">Password</label>
        <input className="indent-3 border-solid border-2 border-black rounded-xl" type="password" />
        <div className="flex justify-center">
          <input className="mt-5 border-2 rounded-3xl px-4 border-black py-1" type="button" value="NEXT" />
        </div>
        <p className="mt-5 text-xs underline">
          <a href="">LOG IN</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
