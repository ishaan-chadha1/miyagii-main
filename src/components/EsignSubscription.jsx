import React from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import ESignPlans from "./EsignPlans";

function EsignSubscription() {
  return (
    <AnimatedBackground>
      <Header />
      <div className="pt-[8rem] pb-[4rem]">
        {/* Added a wrapper with min-h-full to allow scrolling */}
        <div className="min-h-full flex flex-col items-center justify-start">
          <div className="max-w-7xl mx-auto text-center mb-12 px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
              Blockchain-Based Esign <br />
              <span className="text-blue-500">Subscription</span>
            </h2>
          </div>
          <ESignPlans />
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default EsignSubscription;
