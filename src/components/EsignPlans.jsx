import React, { useState } from "react";
import { motion } from "framer-motion"; 
const esignPlans = [
  { esigns: "10", description: "Ideal for personal use.", priceInInr: "₹100", priceInUsd: "$1.11" },
  { esigns: "100", description: "Perfect for small teams.", priceInInr: "₹800", priceInUsd: "$8.88" },
  { esigns: "500", description: "Great for growing businesses.", priceInInr: "₹3000", priceInUsd: "$33.33" },
  { esigns: "1000", description: "Best for large enterprises.", priceInInr: "₹4000", priceInUsd: "$44.44" },
  { esigns: "Unlimited", description: "Unlimited usage for ultimate flexibility.", priceInInr: "₹7000", priceInUsd: "$77.77" },
];

const EsignPlans = () => {
  const [currency, setCurrency] = useState("inr");

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      {/* Animated Currency Toggle */}
      <div className="relative flex items-center gap-4 px-4 py-2 rounded-full bg-gray-800 w-[300px]">
        <motion.div
          className="absolute inset-0 h-full bg-white rounded-full"
          style={{ width: "50%" }}
          animate={{
            left: currency === "usd" ? "50%" : "0%",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
        {["inr", "usd"].map((curr) => (
          <button
            key={curr}
            onClick={() => setCurrency(curr)}
            className={`relative z-10 flex items-center justify-center w-[50%] h-[40px] text-base font-semibold transition-all ${
              currency === curr ? "text-blue-500" : "text-white"
            }`}
          >
            {curr.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Esign Plans */}
      <div className="flex flex-wrap justify-center gap-6">
        {esignPlans.map((plan, index) => (
          <div
            key={index}
            className="border shadow-sm w-[375px] h-[225px] p-4 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-opacity-0 hover:text-blue-500"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">{plan.esigns} E-signs</h3>
              <p className="text-sm">{plan.description}</p>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between">
                <span>Price</span>
                <span>{currency === "usd" ? plan.priceInUsd : plan.priceInInr}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EsignPlans;
