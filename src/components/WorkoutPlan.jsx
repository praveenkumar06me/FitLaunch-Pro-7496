import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaClock, FaDumbbell } from 'react-icons/fa';

const WorkoutPlan = () => {
  const workouts = [
    {
      title: "Full Body Power",
      duration: "45 min",
      intensity: "High",
      exercises: "8 exercises"
    },
    {
      title: "Core Crusher",
      duration: "30 min",
      intensity: "Medium",
      exercises: "6 exercises"
    },
    {
      title: "Cardio Blast",
      duration: "35 min",
      intensity: "High",
      exercises: "7 exercises"
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
          <h2 className="text-3xl font-bold text-secondary mb-4">Personalized Workout Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from hundreds of workouts tailored to your fitness level and goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {workouts.map((workout, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">{workout.title}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FaClock className="text-primary" />
                  <span>{workout.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaFire className="text-primary" />
                  <span>{workout.intensity}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaDumbbell className="text-primary" />
                  <span>{workout.exercises}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutPlan;