import React, { useEffect } from "react";
import Header from "../components/Header";
import AnimatedBackground from "../components/AnimatedBackground";
import Upload from "../components/Upload";

function VerificationPricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AnimatedBackground>
      <Header />
      <div className="min-h-screen flex flex-col justify-start overflow-y-auto">
        {/* Add padding to prevent overlap */}
        <div className="pt-[8rem] pb-[4rem]">
          <Upload />
        </div>
      </div>
    </AnimatedBackground>
  );
}

export default VerificationPricing;
