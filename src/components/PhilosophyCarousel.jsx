
import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import './GlideCarousel.css';

const PhilosophyCarousel = () => {
  useEffect(() => {
    const glide = new Glide('#philosophy-carousel', {
      type: 'carousel',
      perView: 3,
      focusAt: 'center',
      breakpoints: {
        800: {
          perView: 2
        },
        480: {
          perView: 1
        }
      }
    });

    glide.mount();

    // Cleanup function to destroy Glide instance on component unmount
    return () => glide.destroy();
  }, []);

  return (
    <div id="philosophy-carousel" className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {/* Testimonial Slide 1 */}
          <li className="glide__slide flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <p className="text-[#807E87] text-base">
                "Aiva's skills in JavaScript and React transformed our web platform. Our users love the new features!"
              </p>
              <h3 className="text-[#5379FE] text-xl font-bold">
                John Doe, Product Manager
              </h3>
            </div>
          </li>
          {/* Testimonial Slide 2 */}
          <li className="glide__slide flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <p className="text-[#807E87] text-base">
                "We were amazed by the efficiency of the blockchain solution Aiva implemented for us."
              </p>
              <h3 className="text-[#5379FE] text-xl font-bold">
                Jane Smith, CEO of Blockify
              </h3>
            </div>
          </li>
          {/* Testimonial Slide 3 */}
          <li className="glide__slide flex items-center justify-center p-6">
            <div className="text-center space-y-4">
              <p className="text-[#807E87] text-base">
                "The development speed and code quality exceeded our expectations. Aiva really knows their stuff!"
              </p>
              <h3 className="text-[#5379FE] text-xl font-bold">
                Mike Johnson, CTO at DevTech
              </h3>
            </div>
          </li>
          {/* Add more slides as needed */}
        </ul>
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">{"<"}</button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">{">"}</button>
      </div>
      
      {/* Pagination Bullets */}
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {/* The bullets will be generated dynamically by Glide.js */}
      </div>
    </div>
  );
};

export default PhilosophyCarousel;