import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import Layout from "./components/Layout";
import { AboutSection } from "./sections/AboutSection";
import { BuyNowSection } from "./sections/BuyNowSection";
import { RigSection } from "./sections/RigSection";

function App() {
  return (
    <div className="App">
      <Layout>
        <img className="z-0 fixed" src="minigif.gif" alt="" />
        <Element name="test1" className="z-10 element">
          <RigSection />
        </Element>
        <AboutSection />
        <br />
        <br />
        <br />
        <br />
        <Element name="test2" className="element">
          <BuyNowSection />
        </Element>
      </Layout>
    </div>
  );
}

export default App;
