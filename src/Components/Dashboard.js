import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import Table from "./Table";

const Dashboard = () => {
  const [totalExpense, setTotalExpense] = useState("");
  const [monthlyExpense, setMonthlyExpense] = useState("");
  const [dailyExpense, setDailyExpense] = useState("");
  const filteredData = useSelector((state) => state.selectedData.selectedData);
  const bar = useSelector((state) => state.showGraph.bar);
  const pie = useSelector((state) => state.showGraph.pie);
  const line = useSelector((state) => state.showGraph.line);
  const date = new Date();
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //   {
  //     filteredData && console.log(filteredData[0]?.date);
  //   }
  const [userChartData, setUserChartData] = useState({
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Expense in Rupees",
        data: data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  });
  const graphData = () => {
    for (var i = 0; i < filteredData.length; i++) {
      const userDate = new Date(filteredData[i].date);
      data[userDate.getMonth()] += parseInt(filteredData[i].expense);
    }
    console.log(data);
    setUserChartData({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Expense in Rupees",
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(1, 16, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
            "rgba(255, 9, 132, 0.2)",
            "rgba(255, 0, 0, 0.2)",
            "rgba(55, 205, 86, 0.2)",
            "rgba(175, 19, 192, 0.2)",
            "rgba(54, 50, 135, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(1, 16, 235)",
            "rgb(153, 102, 255)",
            "rgba(201, 203, 207)",
            "rgba(255, 9, 132)",
            "rgba(255, 0, 0)",
            "rgba(55, 205, 86)",
            "rgba(175, 19, 192)",
            "rgba(54, 16, 135)",
          ],
          borderWidth: 1,
        },
      ],
    });
  };
  const getTotalExpense = () => {
    var res = 0;
    for (var i = 0; i < filteredData.length; i++) {
      res += parseInt(filteredData[i].expense);
    }
    setTotalExpense(res);
  };
  const getMonthlyExpense = () => {
    var res = 0;
    for (var i = 0; i < filteredData.length; i++) {
      const userDate = new Date(filteredData[i].date);
      if (
        (userDate.getMonth() == date.getMonth()) &
        (userDate.getFullYear() == date.getFullYear())
      ) {
        res += parseInt(filteredData[i].expense);
      }
    }
    setMonthlyExpense(res);
  };
  const getTodaysExpense = () => {
    var res = 0;
    for (var i = 0; i < filteredData.length; i++) {
      const userDate = new Date(filteredData[i].date);
      if (userDate.toDateString() === date.toDateString()) {
        res += parseInt(filteredData[i].expense);
      }
    }
    setDailyExpense(res);
  };
  useEffect(() => {
    graphData();
    getTotalExpense();
    getMonthlyExpense();
    getTodaysExpense();
  }, [filteredData]);
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h5>Dashboard</h5>
        <span>Hello, Naman Welcome to the Expense Dashboard</span>
      </div>
      <div className="card-container">
        <div className="total-expense card">
          <span>Total Expense</span>
          <h3>{totalExpense ? totalExpense : "- - - -"}</h3>
        </div>
        <div className="monthly-expense card">
          <span>Monthly Expense</span>
          <h3>{monthlyExpense ? monthlyExpense : "- - - -"}</h3>
        </div>
        <div className="todays-expense card">
          <span>Today's Expense</span>
          <h3>{dailyExpense ? dailyExpense : "- - - -"}</h3>
        </div>
      </div>

      {bar && <BarChart chartData={userChartData}></BarChart>}
      {pie && <PieChart chartData={userChartData}></PieChart>}
      {line && <LineChart chartData={userChartData}></LineChart>}
      <Table></Table>
    </div>
  );
};

export default Dashboard;
