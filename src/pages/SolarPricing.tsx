import React from "react";

interface SolarPlan {
  kw: string;
  price: string;
  subsidy: string;
}

const SolarPricing: React.FC = () => {
  const plans: SolarPlan[] = [
    { kw: "2.5 kW", price: "₹1,10,000", subsidy: "₹40,000+" },
    { kw: "3 kW", price: "₹1,35,000", subsidy: "₹48,000+" },
    { kw: "5 kW", price: "₹2,20,000", subsidy: "₹78,000+" },
  ];

  return (
    <div className="pt-24 pb-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Solar System Pricing</h1>
      <p className="text-center text-gray-600 mb-12">
        Transparent pricing with full installation, subsidy assistance, and maintenance.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-2">{item.kw}</h2>
            <p className="text-xl font-semibold">{item.price}</p>
            <p className="text-gray-600 mt-2">Govt Subsidy: {item.subsidy}</p>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg">
              Request Site Visit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarPricing;
