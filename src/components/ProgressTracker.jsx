import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const ProgressTracker = () => {
  const weightOption = {
    xAxis: {
      type: 'category',
      data: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      data: [180, 178, 176, 174, 172, 170],
      type: 'line',
      smooth: true,
      color: '#FF4757'
    }],
    tooltip: {
      trigger: 'axis'
    }
  };

  const workoutOption = {
    radar: {
      indicator: [
        { name: 'Strength', max: 100 },
        { name: 'Cardio', max: 100 },
        { name: 'Flexibility', max: 100 },
        { name: 'Endurance', max: 100 },
        { name: 'Balance', max: 100 }
      ]
    },
    series: [{
      type: 'radar',
      data: [{
        value: [80, 70, 60, 85, 75],
        name: 'Progress',
        areaStyle: {
          color: 'rgba(255, 71, 87, 0.2)'
        },
        lineStyle: {
          color: '#FF4757'
        }
      }]
    }]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">Track Your Progress</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualize your fitness journey with detailed analytics and progress tracking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Weight Progress</h3>
            <ReactECharts option={weightOption} style={{ height: '300px' }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4">Fitness Overview</h3>
            <ReactECharts option={workoutOption} style={{ height: '300px' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTracker;