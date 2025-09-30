import React from 'react';

const sourceData = [
  { source: 'App', percentage: 60, width: '60%' },
  { source: 'Social Media', percentage: 40, width: '40%' }
];

const ReportSources: React.FC = () => {
  return (
  <div className="col-span-1">
                <div className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800"> {/* Updated card styling */}
                  <p className="text-xl font-bold text-gray-800 dark:text-white mb-2">Report Sources</p>
                  <p className="text-base font-medium text-gray-800 dark:text-white">App vs Social Media Reports</p>
                  <p className="text-4xl font-bold text-gray-900 dark:text-white truncate">60/40</p>
                  <div className="flex items-center mt-1">
                    <p className="text-base text-gray-500 dark:text-gray-400">Last 30 Days</p>
                    <p className="ml-2 text-base font-medium text-green-500">+10%</p>
                  </div>
                  <div className="mt-8 space-y-4" style={{ height: '180px' }}>
                    {sourceData.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <p className="w-24 text-xs font-bold text-gray-500 dark:text-gray-400">{item.source}</p>
                        <div className="w-full h-4 rounded-full bg-blue-600/20 dark:bg-blue-600/30">
                          <div className="h-4 rounded-full bg-blue-600" style={{ width: item.width }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                </div>
  );
};

export default ReportSources;
