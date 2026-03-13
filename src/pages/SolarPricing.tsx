import React from "react";
import { motion } from "framer-motion";
import { Sun, ShieldCheck, Wrench, BadgeIndianRupee } from "lucide-react";

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
    <section className="relative pt-28 pb-24 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"/>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/20 blur-[120px] rounded-full"/>

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.6}}
          className="text-center mb-14"
        >

          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-medium">
            SOLAR SYSTEM PACKAGES
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent Solar Pricing
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete rooftop solar solutions with installation,
            subsidy assistance, and maintenance support.
          </p>

        </motion.div>


        {/* GLOW CONTAINER */}
        <div className="relative">

          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-yellow-400/20 blur-2xl rounded-3xl"/>

          <div className="relative grid md:grid-cols-3 gap-8 p-8 rounded-3xl border bg-white/60 backdrop-blur-xl shadow-xl">

            {plans.map((item, index) => {

              const isPopular = index === 1;

              return (

                <motion.div
                  key={index}
                  whileHover={{ y:-10, scale:1.03 }}
                  className={`relative rounded-2xl p-8 border transition-all
                  ${isPopular
                    ? "bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-400 shadow-xl"
                    : "bg-white/80 backdrop-blur-lg"
                  }`}
                >

                  {/* POPULAR TAG */}
                  {isPopular && (
                    <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}

                  {/* PLAN TITLE */}
                  <div className="flex items-center gap-3 mb-4">
                    <Sun className="text-yellow-500"/>
                    <h2 className="text-2xl font-bold text-blue-600">
                      {item.kw}
                    </h2>
                  </div>

                  {/* PRICE */}
                  <div className="flex items-center gap-2 mb-2">
                    <BadgeIndianRupee className="text-blue-600"/>
                    <span className="text-3xl font-bold">{item.price}</span>
                  </div>

                  <p className="text-gray-600 mb-6">
                    Govt Subsidy: <span className="font-semibold">{item.subsidy}</span>
                  </p>

                  {/* FEATURES */}
                  <ul className="space-y-3 text-gray-700 text-sm mb-6">

                    <li className="flex items-center gap-2">
                      <ShieldCheck size={16}/> Government Approved Panels
                    </li>

                    <li className="flex items-center gap-2">
                      <Wrench size={16}/> Complete Installation
                    </li>

                    <li className="flex items-center gap-2">
                      <Sun size={16}/> Subsidy Assistance
                    </li>

                  </ul>

                  {/* BUTTON */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                    Request Site Visit
                  </button>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default SolarPricing;