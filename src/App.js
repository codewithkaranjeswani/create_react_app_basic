import React from "react";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  const slides = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
  ];

  return (
    <div className="w-full h-100 relative border-2">
      <img
        src={"/images/bg.jpg"}
        alt={"girl on road"}
        className="w-full h-full absolute object-cover object-center bg-blend-overlay"
      />
      <div className="backdrop-brightness-50">
        <NavBar />
        <div className="flex justify-center text-5xl text-gray-300 font-bold pb-20">
          Hello World
        </div>
        <div className="max-w-lg mx-auto pb-20">
          <Carousel>
            {slides.map((s) => (
              <img src={s} alt={""} />
            ))}
          </Carousel>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
