import React, { useState } from 'react';

// Updated plans data according to the prices provided in the image
const plans = [
  { name: '5 GB', description: 'Basic plan', prices: { monthly: { usd: '$0.167', inr: '₹15' }, yearly: { usd: '$1.67', inr: '₹150' }, sixYears: { usd: '$5', inr: '₹450' }, forever: { usd: '$10', inr: '₹900' } }, info: 'This plan is suitable for light users.' },
  { name: '25 GB', description: 'Standard plan', prices: { monthly: { usd: '$0.833', inr: '₹75' }, yearly: { usd: '$8.33', inr: '₹750' }, sixYears: { usd: '$25', inr: '₹2250' }, forever: { usd: '$50', inr: '₹4500' } }, info: 'Ideal for small businesses or personal use.' },
  { name: '50 GB', description: 'Pro plan', prices: { monthly: { usd: '$1.67', inr: '₹150' }, yearly: { usd: '$16.7', inr: '₹1500' }, sixYears: { usd: '$50', inr: '₹4500' }, forever: { usd: '$100', inr: '₹9000' } }, info: 'Best for professionals with moderate storage needs.' },
  { name: '100 GB', description: 'Advanced plan', prices: { monthly: { usd: '$3.33', inr: '₹300' }, yearly: { usd: '$33.3', inr: '₹3000' }, sixYears: { usd: '$100', inr: '₹9000' }, forever: { usd: '$200', inr: '₹18000' } }, info: 'Perfect for larger businesses and heavy users.' },
  { name: '200 GB', description: 'Premium plan', prices: { monthly: { usd: '$6.67', inr: '₹600' }, yearly: { usd: '$66.7', inr: '₹6000' }, sixYears: { usd: '$200', inr: '₹18000' }, forever: { usd: '$400', inr: '₹36000' } }, info: 'Great for enterprise-level storage requirements.' },
  { name: '1 TB', description: 'Ultimate plan', prices: { monthly: { usd: '$33.33', inr: '₹3000' }, yearly: { usd: '$333.33', inr: '₹30000' }, sixYears: { usd: '$1000', inr: '₹90000' }, forever: { usd: '$2000', inr: '₹180000' } }, info: 'For those who need massive storage capacity.' },
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
    <div className="flex flex-col items-center p-4 space-y-6">
      <div className="flex space-x-4 items-center pt-10 pb-10">
        {["monthly", "yearly", "sixYears", "forever"].map((period) => (
          <button
            key={period}
            onClick={() => handlePeriodChange(period)}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors ${
              selectedPeriod === period
                ? "bg-blue-500 text-white"
                : "text-white border border-white hover:text-blue-500 hover:border-blue-500"
            } h-10 px-4 py-2`}
          >
            {period.charAt(0).toUpperCase() + period.slice(1)}
          </button>
        ))}
        <button
          onClick={handleCurrencyToggle}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium text-white border border-white hover:text-blue-500 hover:border-blue-500 h-10 px-4 py-2"
        >
          {currency === "usd" ? "$" : "₹"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="border shadow-lg w-[375px] h-[225px] p-8 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-opacity-0 hover:text-blue-500"
          >
            <div className="flex flex-col space-y-2">
              <h3 className="tracking-tight text-lg font-semibold">
                {plan.name}
              </h3>
              <p className="text-sm">{plan.description}</p>
              <p className="text-xs">{plan.info}</p>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between pt-10">
                <span>Price</span>
                <span>{plan.prices[selectedPeriod][currency]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoragePlans;
