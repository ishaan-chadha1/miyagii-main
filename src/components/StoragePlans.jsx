import React, { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "5 GB",
    description: "Basic plan",
    prices: {
      monthly: { usd: "$0.167", inr: "₹15" },
      yearly: { usd: "$1.67", inr: "₹150" },
      sixYears: { usd: "$5", inr: "₹450" },
      forever: { usd: "$10", inr: "₹900" },
    },
    info: "This plan is suitable for light users.",
  },
  {
    name: "25 GB",
    description: "Standard plan",
    prices: {
      monthly: { usd: "$0.833", inr: "₹75" },
      yearly: { usd: "$8.33", inr: "₹750" },
      sixYears: { usd: "$25", inr: "₹2250" },
      forever: { usd: "$50", inr: "₹4500" },
    },
    info: "Ideal for small businesses or personal use.",
  },
  {
    name: "50 GB",
    description: "Pro plan",
    prices: {
      monthly: { usd: "$1.67", inr: "₹150" },
      yearly: { usd: "$16.7", inr: "₹1500" },
      sixYears: { usd: "$50", inr: "₹4500" },
      forever: { usd: "$100", inr: "₹9000" },
    },
    info: "Best for professionals with moderate storage needs.",
  },
  {
    name: "100 GB",
    description: "Advanced plan",
    prices: {
      monthly: { usd: "$3.33", inr: "₹300" },
      yearly: { usd: "$33.3", inr: "₹3000" },
      sixYears: { usd: "$100", inr: "₹9000" },
      forever: { usd: "$200", inr: "₹18000" },
    },
    info: "Perfect for larger businesses and heavy users.",
  },
  {
    name: "200 GB",
    description: "Premium plan",
    prices: {
      monthly: { usd: "$6.67", inr: "₹600" },
      yearly: { usd: "$66.7", inr: "₹6000" },
      sixYears: { usd: "$200", inr: "₹18000" },
      forever: { usd: "$400", inr: "₹36000" },
    },
    info: "Great for enterprise-level storage requirements.",
  },
  {
    name: "1 TB",
    description: "Ultimate plan",
    prices: {
      monthly: { usd: "$33.33", inr: "₹3000" },
      yearly: { usd: "$333.33", inr: "₹30000" },
      sixYears: { usd: "$1000", inr: "₹90000" },
      forever: { usd: "$2000", inr: "₹180000" },
    },
    info: "For those who need massive storage capacity.",
  },
];

const StoragePlans = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");
  const [currency, setCurrency] = useState("usd");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const handleCurrencyToggle = () => {
    setCurrency(currency === "usd" ? "inr" : "usd");
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-8">
      {/* Period and Currency Toggle */}
      <div className="flex flex-wrap items-center justify-center gap-6">
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800">
          <motion.div
            className="absolute top-0 bottom-0 w-1/4 bg-white rounded-full"
            animate={{
              left: `${
                ["monthly", "yearly", "sixYears", "forever"].indexOf(
                  selectedPeriod
                ) * 25
              }%`,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
          {["monthly", "yearly", "sixYears", "forever"].map((period) => (
            <button
              key={period}
              onClick={() => handlePeriodChange(period)}
              className={`relative z-10 px-4 py-2 text-sm font-medium ${
                selectedPeriod === period ? "text-blue-500" : "text-white"
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>

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
      </div>

      {/* Pricing Cards */}
      <div
        className={`flex flex-wrap justify-center gap-6 px-6`}
      >
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="w-[260px] h-[240px] p-6 bg-transparent text-white border border-blue-500 rounded-lg shadow-lg relative overflow-hidden group"
          >
            {/* Hover Background Animation */}
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              {/* Heading */}
              <h3 className="text-lg font-bold text-white group-hover:text-black text-center mb-4">
                {plan.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-white group-hover:text-black text-center leading-6">
                {plan.info}
              </p>

              {/* Price */}
              <div className="flex justify-between mt-4 text-white group-hover:text-black">
                <span className="font-medium">Price</span>
                <span className="font-bold">
                  {plan.prices[selectedPeriod][currency]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoragePlans;
