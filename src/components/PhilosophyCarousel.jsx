import React, { useEffect, useState } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import './GlideCarousel.css';

const testimonialData = [
  {
    description: "Aiva's skills in JavaScript and React transformed our web platform. Our users love the new features!",
    author: 'John Doe, Product Manager',
  },
  {
    description: 'We were amazed by the efficiency of the blockchain solution Aiva implemented for us.',
    author: 'Jane Smith, CEO of Blockify',
  },
  {
    description: 'The development speed and code quality exceeded our expectations. Aiva really knows their stuff!',
    author: 'Mike Johnson, CTO at DevTech',
  },
  // ... more testimonials
];

const PhilosophyCarousel = () => {
  const [testimonials, setTestimonials] = useState(testimonialData);

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
          {testimonials.map((testimonial, index) => (
            <li key={index} className="glide__slide flex items-center justify-center p-6">
              <div className="text-center space-y-4">
                <p className="text-[#807E87] text-base">
                  {testimonial.description}
                </p>
                <h3 className="text-[#5379FE] text-xl font-bold">
                  {testimonial.author}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Pagination Bullets */}
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {/* The bullets will be generated dynamically by Glide.js */}
      </div>
    </div>
  );
};

export default PhilosophyCarousel;
