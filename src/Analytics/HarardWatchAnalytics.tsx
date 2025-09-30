import React from 'react';
import Sidebar from '../Dashboard/Sidebar';
import HazardTrends from './HazardTrends';
import ReportCredibility from './ReportCredibility';
import ReportSources from './Reportsources';
import HazardDensityMap from './HazardDensityMap';

const sidebarItems = [
  { icon: 'dashboard', label: 'Dashboard', active: false, href: '/' },
    { icon: 'map', label: 'Live Map', active: false, href: '#' },
    { icon: 'article', label: 'Reports', active: false, href: '#' },
    { icon: 'bubble_chart', label: 'Clusters/Events', active: false, href: '#' },
    { icon: 'notifications', label: 'Alerts & Notifications', active: false, href: '#' },
    { icon: 'analytics', label: 'Analytics', active: true, href: '/analytics' }, // Set Analytics to active
    { icon: 'settings', label: 'Settings', active: false, href: '#' },
    { icon: 'add_circle', label: 'Add Hazard', active: false, href: '/add' }
];

const HazardWatchAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-display">
      <div className="flex min-h-screen">
        <Sidebar sidebarItems={sidebarItems} />
        <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 p-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Analytics Dashboard</h1>
          <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-2">
            <div className="col-span-1 lg:col-span-2"><HazardTrends /></div>
            <div className="col-span-1 lg:col-span-2"><HazardDensityMap /></div>
            <ReportCredibility />
            <ReportSources />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HazardWatchAnalytics;
