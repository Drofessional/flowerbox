// import logo from './logo.svg';
import "./App.css";
import React from "react";
import BigPicture from "./components/BigPicture";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmallPicture from "./components/SmallPicture";
import data from "./ImageData";

export default function App() {
  return (
    <div className="App">
      {/* <header className="header">
        <Navbar />
      </header>
      <div className="big-image">
        <BigPicture />
      </div> */}
      <Navbar />
      <BigPicture />
      <div className="grid-images">
        {data.map((image, index) => (
          <SmallPicture key={index} imageData={image} />
        ))}
      </div>
      <Footer />
      
      {/* <footer className="footer">
        <Footer />
      </footer> */}
    </div>
  );
}
