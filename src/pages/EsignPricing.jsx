import React, { useEffect } from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import EsignSubscription from "../components/EsignSubscription";

function EsignPricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedBackground>
      <Header />
      <div className="min-h-screen flex flex-col justify-start overflow-y-auto">
        {/* Padding to prevent overlap */}
        <div className="pt-[8rem] pb-[4rem]">
          <EsignSubscription />
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default EsignPricing;
