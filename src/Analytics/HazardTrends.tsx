import React from 'react';

const HazardTrends: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800">
      <p className="text-xl font-bold text-gray-800 dark:text-white mb-2">Hazard Trends</p>
      <p className="text-base font-medium text-gray-800 dark:text-white">Hazard Reports Over Time</p>
      <p className="text-4xl font-bold text-gray-900 dark:text-white truncate">12,345</p>
      <div className="flex items-center mt-1">
        <p className="text-base text-gray-500 dark:text-gray-400">Last 12 Months</p>
        <p className="ml-2 text-base font-medium text-green-500">+5%</p>
      </div>
      {/* Trend SVG chart here */}
      {/* Copy SVG here or create a Chart component */}
    </div>
  );
};

export default HazardTrends;
