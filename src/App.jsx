import { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
