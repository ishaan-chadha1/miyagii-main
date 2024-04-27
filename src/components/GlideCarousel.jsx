import React, { useEffect, useRef, useState } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "./GlideCarousel.css";

const slideData = [
  { title: 'Test Card For Heading', description: 'The content of this slide is to show Farraz what these cards will look like once there is content in them. I dont feel like we need to change the styling but if you feel like we do, then we can. This is just some more test content to show what itll actually look like' },
  { title: 'Getting', description: 'Slide Description 2' },
  { title: 'The Data ', description: 'Slide Description 3' },
  { title: 'To Display', description: 'Slide Description 4' },
  { title: 'Dynamically', description: 'Slide Description 5' },
  // ... add more slides as needed
];

const GlideCarousel = () => {
  const glideRef = useRef(null);
  const [slides, setSlides] = useState(slideData); // Initialize state with your slides data

  useEffect(() => {
    glideRef.current = new Glide("#intro", {
      type: "carousel",
      perView: 4,
      focusAt: "center",
      breakpoints: {
        800: {
          perView: 2,
        },
        480: {
          perView: 1,
        },
      },
    });

    glideRef.current.mount();

    return () => glideRef.current.destroy();
  }, []);

  const handleSlideClick = (index) => {
    glideRef.current.go(`=${index}`);
  };

  return (
    <div id="intro" className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {slides.map((slide, index) => (
            <li
              key={index}
              className="glide__slide flex items-center justify-center p-6"
              onClick={() => handleSlideClick(index)}
            >
              <div className="text-center space-y-4">
                <h1 className="text-[#5379FE] text-2xl font-bold">{slide.title}</h1>
                <p className="text-[#807E87] text-base">{slide.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="glide__bullets" data-glide-el="controls[nav]">
        {/* The bullets will be generated dynamically by Glide.js */}
      </div>
    </div>
  );
};

export default GlideCarousel;
