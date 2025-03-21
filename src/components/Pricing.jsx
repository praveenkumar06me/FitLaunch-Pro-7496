import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: [
        "Basic workout tracking",
        "5 workout plans",
        "Progress photos",
        "Community access"
      ]
    },
    {
      name: "Pro",
      price: "$9.99/mo",
      features: [
        "All Basic features",
        "Unlimited workout plans",
        "Custom workout creation",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "$19.99/mo",
      features: [
        "All Pro features",
        "1-on-1 coaching",
        "Nutrition planning",
        "Video analysis",
        "Personal training"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">Choose Your Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your fitness journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-xl p-8 ${plan.popular ? 'bg-primary text-white' : 'bg-gray-50'}`}
            >
              {plan.popular && (
                <span className="bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? 'text-white' : 'text-secondary'}`}>
                {plan.name}
              </h3>
              <p className="text-3xl font-bold mt-2 mb-6">{plan.price}</p>
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <FaCheck className={plan.popular ? 'text-white' : 'text-primary'} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-8 py-3 rounded-full font-medium
                  ${plan.popular ? 'bg-white text-primary' : 'bg-primary text-white'}`}
              >
                Get Started
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;