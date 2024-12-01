import React, { useState } from "react";

const uploadPlans = [
  { uploads: "10", description: "Perfect for small projects.", priceInInr: "₹500", priceInUsd: "$5.55" },
  { uploads: "100", description: "Great for medium-sized projects.", priceInInr: "₹4000", priceInUsd: "$44.44" },
  { uploads: "500", description: "Ideal for large projects.", priceInInr: "₹15000", priceInUsd: "$166.67" },
  { uploads: "1000", description: "Best for enterprise use.", priceInInr: "₹20000", priceInUsd: "$222.22" },
  { uploads: "5000", description: "Ultimate plan for extensive use.", priceInInr: "₹50000", priceInUsd: "$555.55" },
];

const UploadPlans = () => {
  const [currency, setCurrency] = useState("inr");

  const handleCurrencyToggle = () => {
    setCurrency(currency === "usd" ? "inr" : "usd");
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <button
        onClick={handleCurrencyToggle}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-transform duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white text-white bg-transparent hover:bg-blue-500 hover:text-black h-10 px-4 py-2"
      >
        {currency === "usd" ? "$" : "₹"}
      </button>
      <div className="flex flex-wrap justify-center gap-6"> {/* Added gap-6 for spacing */}
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
