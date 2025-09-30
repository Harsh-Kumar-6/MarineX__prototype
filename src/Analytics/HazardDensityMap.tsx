import React from 'react';

const HazardDensityMap: React.FC = () => {
  return (
  <div className="col-span-1 lg:col-span-2">
                <div
                  className="p-6 bg-white rounded-xl shadow-md dark:bg-gray-800" 
                >
                  <p className="text-xl font-bold text-gray-800 dark:text-white mb-4">Hazard Density Map</p>
                  <div
                    className="w-full overflow-hidden bg-center bg-no-repeat bg-cover rounded-lg aspect-video"
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAhtqcgmqZeT6AFHeyJJ-y0PJiCSqozQyUj33PTXl_f7a6pRDGesslpP58xlJ7GYJMw3AQH_dVLoX1oy0sj2U0yANW1YcUMyR5WHiCJg3PEfC4x8Dia3N9qf3BRCsqXVptIJyf-hmwZh6C_Y36QQJ6fscLsxcBDmUvHS_aPCgnfvcEjIWgu2BHGUP2Vuxg7hRR8fRoe-I7YlluTCw1O5dqH0Kn5IAs7mmFPkXry3Ok5A0-yc0csQT4VH3z5V4IhLw1e6e9rmIBNEg")',
                      minHeight: '300px' 
                    }}
                  ></div>
                </div>
              </div>
  );
};

export default HazardDensityMap;
