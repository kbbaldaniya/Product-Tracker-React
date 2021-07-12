import React from "react";

import Chart from "./Chart/Chart";

const DataChart = (props) => {
  const chartData = [
    { label: "Jan", value: "0" },
    { label: "Fab", value: "0" },
    { label: "Mar", value: "0" },
    { label: "Apr", value: "0" },
    { label: "May", value: "0" },
    { label: "Jun", value: "0" },
    { label: "Jul", value: "0" },
    { label: "Aug", value: "0" },
    { label: "Sep", value: "0" },
    { label: "Oct", value: "0" },
    { label: "Nov", value: "0" },
    { label: "Dec", value: "0" },
  ];

  for (const item of props.item) {
    const month = item.date.getMonth();
    chartData[month].value += item.amount;
  }

  return (
    <div>
      <Chart dataPoints={chartData} />
    </div>
  );
};

export default DataChart;
