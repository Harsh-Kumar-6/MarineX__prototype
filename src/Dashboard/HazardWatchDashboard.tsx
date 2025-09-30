import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ReportsTable from "./ReportsTable";
import AlertsPanel from "./AlertsPanel";

interface Report {
  id: string;
  hazardType: string;
  location: string;
  timestamp: string;
  credibilityScore: number;
  source: string;
}

interface Alert {
  title: string;
  severity: string;
  severityColor: string;
  reports: string;
  image: string | null;
}

interface SidebarItem {
  icon: string;
  label: string;
  active :boolean;
  path:string;
 
}

interface MaterialIconProps {
  children: React.ReactNode;
  className?: string;
}

const HazardWatchDashboard: React.FC = () => {
  const reportsData: Report[] = [
    {
      id: '#12345',
      hazardType: 'Wildfire',
      location: 'Redwood National Park',
      timestamp: '2024-07-26 14:30',
      credibilityScore: 73,
      source: 'Citizen Report'
    },
    {
      id: '#67890',
      hazardType: 'Flooding',
      location: 'Sacramento Valley',
      timestamp: '2024-07-26 12:00',
      credibilityScore: 60,
      source: 'News Agency'
    },
    {
      id: '#11223',
      hazardType: 'Earthquake',
      location: 'Napa Valley',
      timestamp: '2024-07-26 10:15',
      credibilityScore: 45,
      source: 'Seismic Sensor'
    },
    {
      id: '#44556',
      hazardType: 'Landslide',
      location: 'Big Sur',
      timestamp: '2024-07-25 18:45',
      credibilityScore: 80,
      source: 'Drone Footage'
    },
    {
      id: '#77889',
      hazardType: 'Tsunami',
      location: 'Coastal Region',
      timestamp: '2024-07-25 09:00',
      credibilityScore: 90,
      source: 'Ocean Buoy'
    }
  ];

  const alertsData = [
    {
      title: 'Wildfire near Redwood National Park',
      severity: 'High Severity',
      severityColor: 'text-red-500',
      reports: '12 reports, 15m ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT3GTDIFenKDrWiLYM53cEAOvRlzmveBcECxEZWJwaNQX3xm2QlHUIkTwHKBs0mWTCX7fpZ-GDg9YxM40w5vNC7SCWu31Q-tYe_bkchn9Z-g_BHUUgIsbsAVBpzmjhVeWD0wKD-m0X2ksUnZEFuRGEQkQ_tsFzdex-4fdyfdQwsr32gMyArA41e1_bSQMnQEIusspR-bFMkBpisuAkihlmmkO9VmS25hvMtKX-kIzU4jnGFfw-Nm6tV_NGCSUfzrPK80FFRIbHEA'
    },
    {
      title: 'Flooding in Sacramento Valley',
      severity: 'Medium Severity',
      severityColor: 'text-yellow-500',
      reports: '8 reports, 45m ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDef5h0gRqhKKCAt3TTjGjVf8ITB4L015VqRQu1fbqgn5bOoVMpy4EW0jWryZ58OQBfhHc1efGqelNYp6ad4zKo-M6dfsfEycMDGdjkADnD0HgsGELNMHsXR_REpVd3aP7YuY_-EPnCxAu-JgYJloVXtLBKmPTFZcW_aexEWywvKSEfd3-OFN_UAzIJJ7bXcEd97IRJ1-XVYvmOkEL_rwVRRHJrgWuZ2KIj-9FFMLkOkbasDfGkl06HsgEdg30ZZKEVYgkrvcOj0g'
    },
    {
      title: 'Earthquake near Napa Valley',
      severity: 'Low Severity',
      severityColor: 'text-green-500',
      reports: '5 reports, 2h ago',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjyQm6ljwPaAp3EU-BNY-yimMzniq1GiV_cPDvBNyDHN1nu4ouLHFQtwlH8ZuPBXZtdQxcmP1Qh10FHeYD_xWsZWqSWViltAsIIjEf_UOryyGIIayQSLxoL_JCYX5liiyPOCb0t-sw8c1o82tT0u7gdzURprE2ffPmrSW0tAHdezWlQsaTTr5JYz-5NzdaLKieQN5dM3De0FcMbnsbI6bptcxUcdLuDYKO9OmOY-8jdGG-nUoG-UIGMFybfi1fmZw7i2CUQV7N8w'
    },
    {
      title: 'Chemical Spill on I-80',
      severity: 'High Severity',
      severityColor: 'text-red-500',
      reports: '3 reports, 5h ago',
      image: null
    }
  ];
const sidebarItems = [
    { icon: 'dashboard', label: 'Dashboard', active: true, href: '/' },
    { icon: 'map', label: 'Live Map', active: false, href: '#' },
    { icon: 'article', label: 'Reports', active: false, href: '#' },
    { icon: 'bubble_chart', label: 'Clusters/Events', active: false, href: '#' },
    { icon: 'notifications', label: 'Alerts & Notifications', active: false, href: '#' },
    { icon: 'analytics', label: 'Analytics', active: false, href: '/analytics' }, // Set Analytics to active
    { icon: 'settings', label: 'Settings', active: false, href: '#' },
    { icon: 'add_circle', label: 'Add Hazard', active: false, href: '/add' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-display">
      <div className="flex min-h-screen">
        <Sidebar sidebarItems={sidebarItems} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <div
                className="w-full aspect-video bg-center bg-cover rounded-xl shadow-md"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzgKNUxgBlmvz_1l_4KaNhdLWzW50MWalyC04nf1Td5VxCMBjq3EQDuWuMmJQuvSS917MJuNhEtMGirItWCHfVtQaIRVwNCHLcr8m7_3wfXvaZSe9vXwAReSBg4RolDGGGHWOpLwkgt7R3iP8wsnyWmYtBdoqj9a88SMkf_5-KEPVux__jXuBu_XFVAzbHjLC6mV6r5FkStaoh8QcNYH1h-q2jYZCHvpiiJw4R9VjIs1BJeeopF1YE-lbTIyw7Hbi3X3QgkLOBEQ")'
                }}
              />
              <ReportsTable reportsData={reportsData} />
            </div>
            <AlertsPanel alertsData={alertsData} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HazardWatchDashboard;
