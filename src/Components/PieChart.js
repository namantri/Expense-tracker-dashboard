import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = (props) => {
  return (
    <div
      style={{
        height: `${props?.height}vh`,
        width: "90vw",
        marginLeft: "8vw",
      }}
    >
      <Pie data={props.chartData} />
    </div>
  );
};

export default PieChart;
