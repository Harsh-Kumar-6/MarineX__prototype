import React, { useEffect } from 'react';
import Sidebar from '../Dashboard/Sidebar';
import Header from './Header';
import HazardForm from './HazardForm';

const AddHazardForm: React.FC = () => {
  const sidebarItems = [
    { icon: 'dashboard', label: 'Dashboard', active: false, href: '/' },
    { icon: 'map', label: 'Live Map', active: false, href: '#' },
    { icon: 'article', label: 'Reports', active: false, href: '#' },
    { icon: 'bubble_chart', label: 'Clusters/Events', active: false, href: '#' },
    { icon: 'notifications', label: 'Alerts & Notifications', active: false, href: '#' },
    { icon: 'analytics', label: 'Analytics', active: false, href: '/analytics' },
    { icon: 'settings', label: 'Settings', active: false, href: '#' },
    { icon: 'add_circle', label: 'Add Hazard', active: true, href: '#' },
  ];

  useEffect(() => {
    if (!document.querySelector('link[href*="material-symbols"]')) {
      const link = document.createElement('link');
      link.href =
        'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0';
      link.rel = 'stylesheet';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-display">
      <div className="flex min-h-screen">
        <Sidebar sidebarItems={sidebarItems} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 md:p-10">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <HazardForm />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AddHazardForm;
