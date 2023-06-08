/* eslint-disable react/no-unescaped-entities */
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
        navigate("/userhome");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div
      className={`text-grey-1 flex items-center justify-center ${
        showLogin ? "absolute" : "relative"
      } -right-px -left-px -top-px -bottom-px`}
    >
      {showLogin && (
        <div
          className="fixed left-0 right-0 bottom-0 top-0 pointer-none backdrop-blur-lg"
          onClick={handleToggleLogin}
        />
      )}
      <div
        className={`bg-gradient-to-b from-blue-500/80 to-purple-500/60 drop-shadow-lg font-poppins text-center px-4 py-10 rounded-3xl ${
          showLogin ? "relative" : "hidden"
        }`}
      >
        <form>
          <div className="p-4 w-full">
            <button
              onClick={handleToggleLogin}
              className="cursor-pointer border-none font-bold outline-none bg-none text-2xl absolute right-5 top-3"
              id="close-button"
              type="reset"
            >
              &times;
            </button>
            <div className="text-left font-bold text-3xl">Welcome Back</div>
            <div className="mb-4 text-left">Enter your account details below</div>
            <input
              className="mb-4 mt-5 placeholder-blue-1 indent-3 w-full block text-blue-1 rounded-xl"
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="placeholder-blue-1 w-full indent-3 text-blue-1 block rounded-xl mt-2"
              id="passowrd"
              name="password"
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-center">
              <button
                className="hover:bg-blue-1 hover:text-grey-1 hover-bg-grey-1 mt-9 bg-grey-1 py-0.5 w-full font-bold text-blue-1"
                onClick={onLogin}>
                  LOG IN
                </button>
            </div>
            <p className="mt-5 text-xs text-dark-blue-1">
              Don't have an account?
              <a className="hover:underline text-grey-1 " href="">
                <span className="ml-1">SIGN UP</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Auth;
