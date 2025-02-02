import React from "react";
import BarChart from "../../charts/BarChart01";

// Import utilities
import { tailwindConfig } from "../../utils/Utils";

function DashboardCard04() {
  const chartData = {
    labels: ["12-01-2020", "01-01-2021", "02-01-2021", "03-01-2021", "04-01-2021", "05-01-2021"],
    datasets: [
      // Light blue bars
      {
        label: "Pass",
        data: [30, 31, 28, 32, 2, 31],
        backgroundColor: tailwindConfig().theme.colors.indigo[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      },
      // Blue bars
      {
        label: "Fail",
        data: [2, 1, 4, 0, 30, 1],
        backgroundColor: tailwindConfig().theme.colors.red[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Direct VS Indirect</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
