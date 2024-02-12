import React, { useEffect, useRef } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "./GlideCarousel.css";

const GlideCarousel = () => {
  const glideRef = useRef(null);

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
          {/* Map through your slides data if available or hardcode slide items */}
          {[...Array(5)].map((_, index) => (
            <li
              key={index}
              className="glide__slide flex items-center justify-center p-6"
              onClick={() => handleSlideClick(index)} // Adding click handler here
            >
              <div className="text-center space-y-4">
                {/* Slide content */}
                {/* Replace the content below with your actual slide content */}
                <h1 className="text-[#5379FE] text-2xl font-bold">Slide Title {index + 1}</h1>
                <p className="text-[#807E87] text-base">Slide Description {index + 1}</p>
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
