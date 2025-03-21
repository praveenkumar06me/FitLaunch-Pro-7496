import React from 'react';
import { motion } from 'framer-motion';

const AppShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">Your Fitness Journey in One App</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Track workouts, monitor progress, and achieve your fitness goals with our comprehensive mobile app.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {['https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500',
            'https://images.unsplash.com/photo-1594882645126-14020914d58d?w=500',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500'
          ].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={img} 
                alt={`App Screenshot ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;