import React from 'react';
import './App.css';

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Wallpaper from "./components/Wallpaper";


function App() {
  return (
    <>
    <Navbar></Navbar>
    <section className="header">
      <div className="container">
      <Intro />
      <Wallpaper />
      </div>
    </section>
    </>
  );
}

export default App;
