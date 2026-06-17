"use client";

import { useState } from "react";

const projects = [
  {
    image: "/glow-1.jpg",
    title: "Glow",
    category: "Founder / Brand Strategy • Visual Identity • Product Design",
  },
    {
    image: "/afterglow-1.jpg",
    title: "Afterglow",
    category: "Founder / Brand Strategy • Product Design • App development",
  },
 
  {
    image: "/futura-1.jpg",
    title: "Futura",
    category: "Founder / Vision Development • Brand Strategy",
  },
  {
    image: "/futura-2.jpg",
    title: "Futura",
    category: "Founder / Brand Strategy • Product Design",
  },
 
];

export default function Showcase() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="showcase-section" id="work">

      <div className="showcase-header">
        <span>SELECTED WORK</span>
      </div>

      <div className="carousel">

        <button
          className="carousel-arrow left"
          onClick={prevSlide}
        >
          ←
        </button>

        <div className="carousel-slide">

          <img
            src={projects[current].image}
            alt={projects[current].title}
          />

          <div className="showcase-info">
            <h3>{projects[current].title}</h3>
            <p>{projects[current].category}</p>
          </div>

        </div>

        <button
          className="carousel-arrow right"
          onClick={nextSlide}
        >
          →
        </button>

      </div>

    </section>
  );
}