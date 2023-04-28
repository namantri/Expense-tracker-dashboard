import React from "react";

import "chart.js/auto";
import { Chart } from "react-chartjs-2";

import { Bar } from "react-chartjs-2";

const BarChart = (props) => {
  return (
    <div className="graph-show">
      <Bar
        data={props.chartData}
      ></Bar>
    </div>
  );
};

export default BarChart;
