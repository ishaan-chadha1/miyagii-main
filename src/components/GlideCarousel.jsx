<link rel="stylesheet" href="node_modules/@glidejs/glide/dist/css/glide.core.min.css" />

import React, { useEffect } from 'react';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import './GlideCarousel.css';



const GlideCarousel = () => {

  useEffect(() => {
    const glide = new Glide('#intro', {
      type: 'carousel',
      perView: 4,
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
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div id="intro" className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {/* Your slides here */}
          <li className="glide__slide flex items-center justify-center p-6">
  <div className="text-center space-y-4"> {/* This div wraps your text content */}
    <h1 className="text-[#5379FE] text-2xl font-bold">
      Sign Documents
    </h1>
    <p className="text-[#807E87] text-base">
      Are you tired of the hassles and uncertainties of
      traditional document signing methods? Say goodbye to the
      days of printing, scanning, and mailing documents. Welcome
      to the future of secure, efficient, and tamper-proof
      document signing with Blockchain technology!
    </p>
  </div>
</li>
<li className="glide__slide flex items-center justify-center p-6">
  <div className="text-center space-y-4"> {/* This div wraps your text content */}
    <h1 className="text-[#5379FE] text-2xl font-bold">
      Store Data
    </h1>
    <p className="text-[#807E87] text-base">
        Discover the pinnacle of data security and trust in
        decentralized storage, harnessed by Blockchain. Bid adieu to
        centralized vulnerabilities and reclaim dominion over your
        prized information.
    </p>
  </div>
</li> <li className="glide__slide flex items-center justify-center p-6">
  <div className="text-center space-y-4"> {/* This div wraps your text content */}
    <h1 className="text-[#5379FE] text-2xl font-bold">
    Verify Documents
    </h1>
    <p className="text-[#807E87] text-base">
        Tired of relying on traditional, easily forgeable
        verification methods? Enter a new era of unassailable trust
        and transparency with Blockchain-powered document
        verification ensure authenticity and trust while bidding
        farewell to counterfeiting concerns.
    </p>
  </div>
</li>
          {/* Add more slides as needed */}
        </ul>
      </div>
      {/* <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<">{"<"}</button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">">{">"}</button>
      </div> */}
      
      {/* Pagination Bullets */}
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {/* The bullets will be generated dynamically by Glide.js */}
      </div>
    </div>
  );
};

export default GlideCarousel;
