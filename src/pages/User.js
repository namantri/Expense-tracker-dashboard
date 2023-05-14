import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { UserDetailDataAction } from "../Store/userDetail";
import { userExpenseDataAction } from "../Store/userExpenseData";
import { useEffect } from "react";
import UserDashboard from "../user/UserDashboard";
import UserLeftPart from "../user/UserLeftPart";
import "./User.css";
import UserDetails from "../user/UserDetails";
const User = () => {
  const [refresh, setRefresh] = useState(false);
  const refreshData = () => {
    setRefresh((prev) => !prev);
  };
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );

      dispatch(UserDetailDataAction.setUserDetailData(res.data.user));
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  const getExpenseData = async () => {
    try {
      const res = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/myExpense`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );

      dispatch(userExpenseDataAction.setUserExpenseData(res.data.userExpense));
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  useEffect(() => {
    getData();
    getExpenseData();
  }, [refresh]);
  return (
    <div className="user-panel">
      <UserLeftPart />
      <UserDashboard refreshData={refreshData} />
      <UserDetails refreshData={refreshData} />
    </div>
  );
};

export default User;
