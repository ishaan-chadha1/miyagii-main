import React, { useState } from "react";
import { motion } from "framer-motion";

const uploadPlans = [
  { uploads: "10", description: "Perfect for small projects.", priceInInr: "₹500", priceInUsd: "$5.55" },
  { uploads: "100", description: "Great for medium-sized projects.", priceInInr: "₹4000", priceInUsd: "$44.44" },
  { uploads: "500", description: "Ideal for large projects.", priceInInr: "₹15000", priceInUsd: "$166.67" },
  { uploads: "1000", description: "Best for enterprise use.", priceInInr: "₹20000", priceInUsd: "$222.22" },
  { uploads: "5000", description: "Ultimate plan for extensive use.", priceInInr: "₹50000", priceInUsd: "$555.55" },
];

const UploadPlans = () => {
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

      {/* Upload Plans */}
      <div className="flex flex-wrap justify-center gap-6">
        {uploadPlans.map((plan, index) => (
          <div
            key={index}
            className="border shadow-sm w-[375px] h-[225px] p-4 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-opacity-0 hover:text-blue-500"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">{plan.uploads} Uploads</h3>
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

export default UploadPlans;
