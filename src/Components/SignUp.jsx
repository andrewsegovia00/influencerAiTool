/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Scripts/firebase";

function SignUp() {
  const { showSignUp, setShowSignUp } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleToggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/userhome");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div
      className={`text-grey-1 flex items-center justify-center ${
        showSignUp ? "absolute" : "relative"
      } -right-px -left-px -top-px -bottom-px`}
    >
      {showSignUp && (
        <div
          className="fixed left-0 right-0 bottom-0 top-0 pointer-none backdrop-blur-lg"
          onClick={handleToggleSignUp}
        />
      )}
      <div
        className={`bg-gradient-to-b from-blue-500/80 to-purple-500/60 font-poppins text-center drop-shadow-lg px-4 py-10 rounded-3xl ${
          showSignUp ? "relative" : "hidden"
        }`}
      >
        <form>
          <div className="w-full p-4">
            <button
              onClick={handleToggleSignUp}
              className="cursor-pointer border-none font-bold outline-none bg-none text-2xl absolute right-5 top-3"
              id="close-button"
              type="reset"
            >
              &times;
            </button>
            <div className="text-left font-bold text-3xl">
              Create an Account
            </div>
            <div className="mb-7 text-left ">Let's get started</div>
            <input
              placeholder="First Name"
              className="placeholder-blue-1 text-blue-1 w-full block indent-3 rounded-xl"
              type="text"
            />
            <input
              placeholder="Last Name"
              className="placeholder-blue-1 text-blue-1 w-full mt-5 block indent-3 rounded-xl"
              type="text"
            />
            <input
              placeholder="Username / E-Mail"
              className="placeholder-blue-1 text-blue-1 w-full mt-5 block indent-3 rounded-xl"
              type="email"
              label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              className="placeholder-blue-1 text-blue-1 w-full mt-5 block indent-3 rounded-xl"
              type="password"
              label="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="hover:bg-blue-1 hover:text-grey-1 w-full bg-grey-1 text-blue-1 mt-8 px-4 py-0.5"
                onClick={onSubmit}
              >
                Sign up
              </button>
            </div>
            <p className="mt-5 text-xs text-dark-blue-1">
              Already have an account?
              <a href="" className="hover:underline text-grey-1">
                <span className="ml-1">LOG IN</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
