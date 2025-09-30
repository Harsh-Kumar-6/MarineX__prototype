import React from "react";

interface Alert {
  title: string;
  severity: string;
  severityColor: string;
  reports: string;
  image: string | null;
}

const AlertsPanel: React.FC<{ alertsData: Alert[] }> = ({ alertsData }) => {
  return (
    <div className="xl:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-4">Active Alerts Panel</h2>
      <div className="flex-1 space-y-4 overflow-y-auto -mr-4 pr-4">
        {alertsData.map((alert, index) => (
          <div key={index} className="flex gap-4">
            <div
              className={`w-24 h-24 rounded-lg bg-cover bg-center shrink-0 ${
                alert.image ? "" : "bg-gray-300 dark:bg-gray-700"
              }`}
              style={alert.image ? { backgroundImage: `url("${alert.image}")` } : {}}
            ></div>
            <div className="flex-1">
              <p className="font-semibold">{alert.title}</p>
              <p className={`text-sm font-medium ${alert.severityColor}`}>{alert.severity}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{alert.reports}</p>
              <button className="mt-2 w-full px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold">
                Validate & Forward
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlertsPanel;
