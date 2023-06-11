import React from "react";
import Menu from "./Menu";
import Carousel from "./components/Carousel";

function App() {
  const slides = [
    "./images/1.png",
    "./images/2.png",
    "./images/3.png",
    "./images/4.png",
  ];

  return (
    <>
      <Menu />
      <div className="flex justify-center text-5xl font-bold">Hello World</div>
      <div className="max-w-lg mx-auto">
        <Carousel>
          {slides.map((s) => (
            <img src={s} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default App;
