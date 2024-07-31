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
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [currency, setCurrency] = useState('usd');

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const handleCurrencyToggle = () => {
    setCurrency(currency === 'usd' ? 'inr' : 'usd');
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-6">
      <h1 className="text-3xl font-bold">Storage Plans</h1>
      <div className="flex space-x-4 items-center">
        <button onClick={() => handlePeriodChange('monthly')} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${selectedPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'} h-10 px-4 py-2`}>
          Monthly
        </button>
        <button onClick={() => handlePeriodChange('yearly')} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${selectedPeriod === 'yearly' ? 'bg-blue-500 text-white' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'} h-10 px-4 py-2`}>
          Yearly
        </button>
        <button onClick={() => handlePeriodChange('sixYears')} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${selectedPeriod === 'sixYears' ? 'bg-blue-500 text-white' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'} h-10 px-4 py-2`}>
          Sexennial
        </button>
        <button onClick={() => handlePeriodChange('forever')} className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${selectedPeriod === 'forever' ? 'bg-blue-500 text-white' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'} h-10 px-4 py-2`}>
          Forever
        </button>
        <button onClick={handleCurrencyToggle} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
          {currency === 'usd' ? '$' : '₹'}
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {plans.map((plan) => (
          <div key={plan.name} className="border shadow-sm w-full max-w-sm p-4 m-2 bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-opacity-0 hover:text-blue-500" data-v0-t="card">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="whitespace-nowrap tracking-tight text-lg font-semibold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.description}</p>
              <p className="text-xs">{plan.info}</p>
            </div>
            <div className="p-6 space-y-2">
              <div className="flex justify-between">
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
