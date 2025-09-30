import React from 'react';

const credibilityData = [
  { level: 'High', percentage: 45, height: 'h-3/5' },
  { level: 'Medium', percentage: 35, height: 'h-1/2' },
  { level: 'Low', percentage: 20, height: 'h-2/5' }
];

const ReportCredibility: React.FC = () => {
  return (
   <div className="col-span-1">
                <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800"> {/* Updated card styling */}
                  <p className="text-xl font-bold text-gray-800 dark:text-white mb-2">Report Credibility</p>
                  <p className="text-base font-medium text-gray-800 dark:text-white">Credibility Breakdown</p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white truncate">85%</p>
                  <div className="flex items-center mt-1">
                    <p className="text-base text-gray-500 dark:text-gray-400">Current</p>
                    <p className="ml-2 text-base font-medium text-green-500">+2%</p>
                  </div>
                  <div className="grid grid-flow-col gap-6 px-3 mt-8 justify-items-center" style={{ height: '180px' }}>
                    {credibilityData.map((item, index) => (
                      <div key={index} className="flex flex-col items-center self-end h-full">
                        <div className={`w-8 ${item.height} bg-blue-600/20 dark:bg-blue-600/30 rounded-t-lg`} />
                        <p className="mt-2 text-xs font-bold text-gray-500 dark:text-gray-400">{item.level}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
  );
};

export default ReportCredibility;
