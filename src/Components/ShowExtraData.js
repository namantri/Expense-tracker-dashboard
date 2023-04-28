import React, { useEffect, useState } from "react";
import "./ShowExtraData.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";

import { showGraphAction } from "../Store/showGraph";
import { useDispatch } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);
const ShowExtraData = () => {
  const dispatch = useDispatch();
  const [entertainment, setEntertainment] = useState("");
  const [necessary, setNecessary] = useState("");
  const bar = useSelector((state)=>state.showGraph.bar);
  const pie = useSelector((state)=>state.showGraph.pie);
  const line = useSelector((state)=>state.showGraph.line);
  const [Edata, setEData] = useState({
    labels: ["Necessary Expense", "Entertainment Expense"],
    datasets: [
      {
        label: "Necessary-Entertainment Expense",
        data: [0, 0],
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  });
  const filteredData = useSelector((state) => state.selectedData.selectedData);
  const getCategoryExpense = () => {
    var res = 0;
    var nes = 0;
    for (var i = 0; i < filteredData.length; i++) {
      if (filteredData[i].category === "Entertainment") {
        res += parseInt(filteredData[i].expense);
      } else {
        nes += parseInt(filteredData[i].expense);
      }
    }
    setEntertainment(res);
    setNecessary(nes);
    setEData({
      labels: ["Necessary Expense", "Entertainment Expense"],
      datasets: [
        {
          label: "Necessary-Entertainment Expense",
          data: [nes, res],
          backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    });
  };
  useEffect(() => {
    getCategoryExpense();
  }, [filteredData]);

  return (
    <div className="showExtraData-container">
      <div className="circle-card">
        <div className="graph">
          <Doughnut data={Edata} options={{ cutoutPercentage: 40 }} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div> Entertainment: {entertainment ? entertainment : "- - - -"}</div>

          <div style={{ marginTop: "10px" }}>
            {" "}
            Necessary: {necessary ? necessary : "- - - -"}
          </div>
        </div>
      </div>

      <div className="graph-list">
        <ul class="show-dropdown main-navbar">
          <div class="selector-active">
            <div class="top"></div>
            <div class="bottom"></div>
          </div>
          <li className={bar?"show-graph active":"show-graph"} onClick={() => dispatch(showGraphAction.showBar())}>
            <i
              class="fa fa-bar-chart"
              style={{ marginRight: "15px" }}
              aria-hidden="true"
            ></i>
            Bar Chart
          </li>
          <li className={line?"show-graph active":"show-graph"} onClick={() => dispatch(showGraphAction.showLine())}>
            <i
              class="fa fa-line-chart"
              style={{ marginRight: "15px" }}
              aria-hidden="true"
            ></i>
            Line Chart
          </li>
          <li className={pie?"show-graph active":"show-graph"} onClick={() => dispatch(showGraphAction.showPie())}>
            <i
              class="fa fa-pie-chart"
              style={{ marginRight: "15px" }}
              aria-hidden="true"
            ></i>
            Pie Chart
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShowExtraData;
