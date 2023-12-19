import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Background from "./components/Background";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="background">
          <Background />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App;