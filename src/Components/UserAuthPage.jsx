// import React from 'react'
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Scripts/firebase";
import { NavLink, useNavigate } from "react-router-dom";

function Auth() {
  const { showLogin, setLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggleLogin = () => {
    setLogin(!showLogin);
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    //  <div className="flex items-center justify-center h-screen">
    //     <div className="font-poppins text-center border-2 border-black px-16 py-20 rounded-3xl">
    <div
      className={`flex items-center justify-center ${
        showLogin ? "absolute" : "relative"
      } -right-px -left-px -top-px -bottom-px`}
    >
      {showLogin && (
        <div className="fixed left-0 right-0 bottom-0 top-0 pointer-none backdrop-blur-sm" />
      )}
      <form>
        <div className={`bg-white font-poppins text-center border-2 border-black px-16 py-20 rounded-3xl ${showLogin ? "relative" : "hidden"}`}>
          <button onClick={handleToggleLogin} className="cursor-pointer border-none font-bold outline-none bg-none text-2xl absolute right-5 top-3" id="close-button">
            &times;
          </button>
          <img src="https://i.pinimg.com/originals/5c/ae/c6/5caec6f372267b0d147ff14ca8b97a39.jpg" className="w-20 mx-auto"/>
          <label className="pl-2 flex text-center">Email</label>
          <input className="border-solid border-2 border-black rounded-xl" id="email-address" name="email" type="email" required placeholder="Email address" onChange={(e)=>setEmail(e.target.value)}/>
          <label className="pl-2 flex">Password</label>
          <input className="border-solid border-2 border-black rounded-xl" id="passowrd" name="password" type="password" required placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
          <div className="flex justify-center">
            <button onClick={onLogin}>LOG IN</button>
          </div>
          <p className="mt-5 text-xs underline">
            <a href="">SIGN UP</a>
          </p>
        </div>
      </form>
    </div>
  );
}
export default Auth;