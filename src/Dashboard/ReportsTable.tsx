import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface Report {
  id: string;
  hazardType: string;
  location: string;
  timestamp: string;
  credibilityScore: number;
  source: string;
}

const MaterialIcon = ({ children, className = "" }) => (
  <span className={`material-symbols-outlined ${className}`}>{children}</span>
);

const ReportsTable: React.FC<{ reportsData: Report[] }> = ({ reportsData }) => {
  const exportReportsPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("HazardWatch Reports", 14, 22);

    autoTable(doc, {
      head: [["Report ID", "Hazard Type", "Location", "Timestamp", "Credibility", "Source"]],
      body: reportsData.map((r) => [
        r.id,
        r.hazardType,
        r.location,
        r.timestamp,
        r.credibilityScore.toString(),
        r.source,
      ]),
      startY: 30,
      styles: { fontSize: 10 },
    });

    doc.save("HazardWatch_Reports.pdf");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Reports Table</h2>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900 text-blue-600 hover:bg-blue-200 dark:hover:bg-blue-800 text-sm font-semibold">
            <MaterialIcon className="text-base">filter_list</MaterialIcon>
            <span>Filter</span>
          </button>
          <button
            onClick={exportReportsPDF}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold"
          >
            <MaterialIcon className="text-base">download</MaterialIcon>
            <span>Export</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-3 font-semibold">Report ID</th>
              <th className="p-3 font-semibold">Hazard Type</th>
              <th className="p-3 font-semibold">Location</th>
              <th className="p-3 font-semibold">Timestamp</th>
              <th className="p-3 font-semibold">Credibility Score</th>
              <th className="p-3 font-semibold">Source</th>
            </tr>
          </thead>
          <tbody>
            {reportsData.map((report, index) => (
              <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-3 font-medium">{report.id}</td>
                <td className="p-3">{report.hazardType}</td>
                <td className="p-3">{report.location}</td>
                <td className="p-3">{report.timestamp}</td>
                <td className="p-3">{report.credibilityScore}</td>
                <td className="p-3">{report.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportsTable;
