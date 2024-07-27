import React, { useState } from 'react';

const eSignPlans = [
  { eSigns: '10', description: 'Ideal for personal use.', priceInInr: '₹100', priceInUsd: '$1.11' },
  { eSigns: '100', description: 'Perfect for small teams.', priceInInr: '₹800', priceInUsd: '$8.88' },
  { eSigns: '500', description: 'Great for growing businesses.', priceInInr: '₹3000', priceInUsd: '$33.33' },
  { eSigns: '1000', description: 'Best for large enterprises.', priceInInr: '₹4000', priceInUsd: '$44.44' },
  { eSigns: 'Unlimited', description: 'Unlimited usage for ultimate flexibility.', priceInInr: '₹7000', priceInUsd: '$77.77' },
];

const ESignPlans = () => {
  const [currency, setCurrency] = useState('inr');

  const handleCurrencyToggle = () => {
    setCurrency(currency === 'usd' ? 'inr' : 'usd');
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-3xl font-bold">E Sign Plans</h1>
      <button
        onClick={handleCurrencyToggle}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-transform duration-300 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
      >
        {currency === 'usd' ? '$' : '₹'}
      </button>
      <div className="flex flex-wrap justify-center">
        {eSignPlans.map((plan, index) => (
          <div key={index} className="border shadow-sm w-full max-w-sm p-4 m-2 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-opacity-0 hover:text-blue-500" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">{plan.eSigns} E-signs</h3>
              <p className="text-sm">{plan.description}</p>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between">
                <span>Price</span>
                <span>{currency === 'usd' ? plan.priceInUsd : plan.priceInInr}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ESignPlans;
