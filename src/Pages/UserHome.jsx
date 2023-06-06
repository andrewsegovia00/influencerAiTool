import React, { useState, useEffect } from "react";
import { Nav } from "../Components";
import { Sidebar } from "../Components/Sidebar"
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Scripts/firebase";
import { useNavigate } from "react-router-dom";

const UserHome = () => {
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        console.log("User is not signed in! Navigate to root");
        // TODO: for now navigate to home, might be better to show log in screen
        navigate("/");
      }
    });
  }, []);

  return (
    <>
      <div>
        <Nav />
        <Sidebar />
        <div className="p-4 sm:ml-64">
          <div>Content that only signed in users can see.</div>
          <button onClick={handleSignout}>Log Out</button>
        </div>
      </div>
    </>
  );
};

export default UserHome;
