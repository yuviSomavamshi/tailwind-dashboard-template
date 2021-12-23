import React from "react";
import LineChart from "../../charts/LineChart02";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard08() {
  const chartData = {
    labels: [
      "01-01-2021",
      "01-02-2021",
      "01-03-2021",
      "01-04-2021",
      "01-05-2021"
    ],
    datasets: [
      // Indigo line
      {
        label: "Pass",
        data: [127,123,127,10,130],
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[600]
      },
      // Red line
      {
        label: "Fail",
        data: [3,3,3,113,0],
        borderColor: tailwindConfig().theme.colors.red[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.red[600]
      },
      // Yellow line
      {
        label: "Skipped",
        data: [0,4,0,7,0],
        borderColor: tailwindConfig().theme.colors.yellow[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.yellow[600]
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center">
        <h2 className="font-semibold text-gray-800">Daily Automation Trend</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <LineChart data={chartData} width={595} height={180} />
    </div>
  );
}

export default DashboardCard08;
