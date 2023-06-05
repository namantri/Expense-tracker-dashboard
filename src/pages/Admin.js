import React, { useEffect,useState } from "react";
import Navbar from "../Components/Navbar";
import Backdrop from "../Components/Backdrop";
import ShowExtraData from "../Components/ShowExtraData";
import Dashboard from "../Components/Dashboard";
import UserList from "../Components/UserList";
import { useDispatch } from "react-redux";
import { dataAction } from "../Store/userData";
import { expenseDataAction } from "../Store/expenseData";
import axios from "axios";
const Admin = ({ toggleSidebar, sidebar, screenSize }) => {
  const [showProfile, setShowProfile] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/all`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );

      dispatch(dataAction.setData(res.data.users));
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
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/expense/allExpense`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );

      dispatch(expenseDataAction.setExpenseData(res.data.users));
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
  }, []);
  return (
    <>
      <Navbar
        toggleSidebar={toggleSidebar}
        screenSize={screenSize}
        setShowProfile={setShowProfile}
      />
      <div className="App">
        {sidebar && <ShowExtraData toggleSidebar={toggleSidebar} />}
        <Dashboard />
        <UserList getData={getData} showProfile={showProfile}/>
        {sidebar && <Backdrop showModal={toggleSidebar}></Backdrop>}
      </div>
    </>
  );
};

export default Admin;
