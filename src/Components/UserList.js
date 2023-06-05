import React, { useState } from "react";
import "./UserList.css";
import { useSelector } from "react-redux";
import { selectedDataAction } from "../Store/selectedData";
import { useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const UserList = ({ showProfile }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const expenseData = useSelector((state) => state.expenseData.expenseData);
  const data = useSelector((state) => state.data.data);
  const showData = (user) => {
    const filteredData = expenseData.filter((arr) => {
      return arr.user === user._id;
    });
    setUser(user);
    dispatch(selectedDataAction.setSelectedData(filteredData));
  };
  return (
    <>
      <div
        className={
          showProfile
            ? "userList-container admin active"
            : "userList-container admin"
        }
      >
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          width="100"
          height="100"
          className="user-img admin"
        />
        <div className="user-name admin">{user ? user.name : "- - - - -"}</div>
        <div className="heading">User List:</div>
        <div className="user-data-container">
          <ul>
            {data.map((arr, index) => {
              return (
                <li
                  className={
                    user._id == arr._id ? "user-data active" : "user-data"
                  }
                  onClick={() => showData(arr)}
                  key={index}
                >
                  {arr.email}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserList;
