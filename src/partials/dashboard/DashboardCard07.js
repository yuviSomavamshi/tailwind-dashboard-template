import React from "react";

function DashboardCard07() {
  return (
    <div className="col-span-full xl:col-span-8 bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800">Top Projects</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-gray-400 bg-gray-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Project</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Test Cases</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Pass</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Fail</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Skipped</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-gray-100">
              {/* Row */}
              <Row name="5GC Simulatior" total={126} pass={119} fail={5} skipped={2} />
              {/* Row */}
              <Row name="TDD Simulator" total={10} pass={10} fail={0} skipped={0} />
              {/* Row */}
              <Row name="F1 Setup Simulator" total={10} pass={10} fail={0} skipped={0} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;

function Row({ name, total, pass, fail, skipped }) {
  return (
    <tr>
      <td className="p-2">
        <div className="flex items-center">
          <svg className="shrink-0 mr-2 sm:mr-3" width="36" height="36" viewBox="0 0 36 36">
            <circle fill={templateListColor[name.charAt(0).toLowerCase()]} cx="18" cy="18" r="18" />
            <text x="10" y="22">
              {name.charAt(0).toUpperCase() + name.charAt(name.length - 1).toUpperCase()}
            </text>
          </svg>
          <div className="select-all text-gray-800">{name}</div>
        </div>
      </td>
      <td className="p-2">
        <div className="text-center text-light-blue-500">{total}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-green-500">{pass}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-red-500">{fail}</div>
      </td>
      <td className="p-2">
        <div className="text-center text-yellow-300">{skipped}</div>
      </td>
    </tr>
  );
}

const templateListColor = {
  a: "#E25142",
  b: "#51B9D0",
  c: "#F39B39",
  d: "#51B9D0",
  e: "#E25142",
  f: "#D73964",
  g: "#8F38A9",
  h: "#D73964",
  i: "#E25142",
  j: "#8F38A9",
  k: "#D1DA59",
  l: "#F39B39",
  m: "#68AB5B",
  n: "#8F38A9",
  o: "#68AB5B",
  p: "#D1DA59",
  q: "#E25142",
  r: "#F39B39",
  s: "#8F38A9",
  t: "#51B9D0",
  u: "#D73964",
  v: "#F39B39",
  w: "#D1DA59",
  x: "#51B9D0",
  y: "#D73964",
  z: "#D1DA59",
  1: "#E25142",
  2: "#51B9D0",
  3: "#F39B39",
  4: "#51B9D0",
  5: "#E25142",
  6: "#D73964",
  7: "#8F38A9",
  8: "#D73964",
  9: "#E25142",
  0: "#8F38A9"
};
