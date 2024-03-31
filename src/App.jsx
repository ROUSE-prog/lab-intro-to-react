import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Contacts from "./Components/Contacts";
import Posts from "./Components/Posts";

function App() {
  return (
    <>
      <NavBar />
      <div className="w-screen h-[90vh] grid grid-cols-[4fr_2fr] grid-rows-3">
      <UserProfile />
      <Posts/>
      <Contacts/>
      </div>
    </>
  )
}

export default App;