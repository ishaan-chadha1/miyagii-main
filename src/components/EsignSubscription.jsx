import React from "react";
import EsignPlans from "./EsignPlans";

function EsignSubscription() {
  return (
    <section className="relative min-h-screen mx-auto">
      <div className="max-w-7xl mx-auto text-center mb-12 px-4 pt-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase leading-tight">
          Blockchain-Based Esign <br />
          <span className="text-blue-500">Subscription</span>
        </h2>
      </div>
      <EsignPlans />
    </section>
  );
}

export default EsignSubscription;
