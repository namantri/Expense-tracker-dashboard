import React from "react";
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";
import LineChart from "../Components/LineChart";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./UserDashboard.css";
import axios from "axios";
import { userExpenseColumn } from "../Components/userExpenseTable";
import Table from "../Components/Table";
const UserDashboard = () => {
  const [totalExpense, setTotalExpense] = useState("");
  const [monthlyExpense, setMonthlyExpense] = useState("");
  const [dailyExpense, setDailyExpense] = useState("");
  const bar = useSelector((state) => state.showGraph.bar);
  const pie = useSelector((state) => state.showGraph.pie);
  const line = useSelector((state) => state.showGraph.line);
  const userExpenseData = useSelector(
    (state) => state.userExpenseData.userExpenseData
  );
  const userData = useSelector((state) => state.userDetailData.userDetailData);

  const date = new Date();
  const data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const getTotalExpense = () => {
    var res = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      res += parseInt(userExpenseData[i].expense);
    }
    setTotalExpense(res);
  };
  const getMonthlyExpense = () => {
    var res = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      const userDate = new Date(userExpenseData[i].date);
      if (
        (userDate.getMonth() == date.getMonth()) &
        (userDate.getFullYear() == date.getFullYear())
      ) {
        res += parseInt(userExpenseData[i].expense);
      }
    }
    setMonthlyExpense(res);
  };
  const getTodaysExpense = () => {
    var res = 0;
    for (var i = 0; i < userExpenseData.length; i++) {
      const userDate = new Date(userExpenseData[i].date);
      if (userDate.toDateString() === date.toDateString()) {
        res += parseInt(userExpenseData[i].expense);
      }
    }
    setDailyExpense(res);
  };
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
    for (var i = 0; i < userExpenseData.length; i++) {
      const userDate = new Date(userExpenseData[i].date);
      data[userDate.getMonth()] += parseInt(userExpenseData[i].expense);
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
  const [expenseData, setExpenseData] = useState([]);
  const getExpenseData = async () => {
    try {
      const response = await axios.get(
        "https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/myExpense",
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );
      console.log(response);
      const userRows = response.data.userExpense.map((arr, index) => {
        return {
          id: index,
          ...arr,
        };
      });
      setExpenseData(userRows);
    } catch (error) {
      alert(error);
    }
  };
  const userColumnExpenseData = [
    ...userExpenseColumn,
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton" onClick={() => {}}>
              Edit
            </div>
            <div className="deleteButton" onClick={() => {}}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  useEffect(() => {
    graphData();
    getTotalExpense();
    getMonthlyExpense();
    getTodaysExpense();
    getExpenseData();
  }, [userExpenseData]);

  return (
    <div className="dashboard-container user-dashboard-container">
      <div className="dashboard">
        <h5>Dashboard</h5>
        <span>Hello, {userData.name} Welcome to the Expense Dashboard</span>
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
      <div className="user-graph-show">
        {bar && <BarChart chartData={userChartData}></BarChart>}
        {pie && <PieChart chartData={userChartData}></PieChart>}
        {line && <LineChart chartData={userChartData}></LineChart>}
      </div>
      <div style={{ marginBottom: "80px" }}>
        <h1 style={{ color: "grey", textAlign: "center" }}>
          Users Expense Data
        </h1>

        <div className="table-container user-expense-table">
          {" "}
          <Table
            userRows={expenseData}
            userColumns={userColumnExpenseData}
          ></Table>{" "}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
