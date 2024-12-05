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
    <div className="flex flex-col items-center p-6 space-y-8">
      {/* Currency Toggle */}
      <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800">
        <motion.div
          className="absolute top-0 bottom-0 w-1/2 bg-white rounded-full"
          animate={{
            left: `${currency === "inr" ? "0%" : "50%"}`,
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
            className={`relative z-10 px-4 py-2 text-sm font-medium ${
              currency === curr ? "text-blue-500" : "text-white"
            }`}
          >
            {curr.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {uploadPlans.map((plan, index) => (
          <div
            key={index}
            className="w-[260px] h-[240px] p-6 bg-transparent text-white border border-blue-500 rounded-lg shadow-lg relative overflow-hidden group"
          >
            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Heading */}
              <h3 className="text-lg font-bold text-white group-hover:text-black text-center mb-4">
                {plan.uploads} Uploads
              </h3>

              {/* Description */}
              <p className="text-sm text-white group-hover:text-black text-center leading-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="flex justify-between mt-4 text-white group-hover:text-black">
                <span className="font-medium">Price</span>
                <span className="font-bold">
                  {currency === "usd" ? plan.priceInUsd : plan.priceInInr}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadPlans;
