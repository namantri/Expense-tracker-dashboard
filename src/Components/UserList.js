import React, { useEffect, useState } from "react";
import "./UserList.css";
import AddUser from "./AddUser";
import { useSelector } from "react-redux";
import Backdrop from "./Backdrop";
import { selectedDataAction } from "../Store/selectedData";
import { useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);
const UserList = (props) => {
  const dispatch = useDispatch();
  const[name,setName] = useState("");
  const [showFormModal, setShowFormModal] = useState(false);
  const showModal = () => {
    setShowFormModal((prev) => !prev);
  };
  const data = useSelector((state) => state.data.data);
  const showData = (name) => {
    const filteredData = data.filter((arr) => {
      return name === arr.name;
    });
    setName(name);
    dispatch(selectedDataAction.setSelectedData(filteredData));
  };
  const unique = [...new Set(data.map(arr => arr.name))];
  return (
    <>
      <div className="userList-container">
        <button onClick={showModal} className="btn-crud add">
          <i class="fa-solid fa-plus"></i>
        </button>
        <img
          src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
          width="100"
          height="100"
          className="user-img"
        />
        <div className="user-name">{name?name:"- - - - -"}</div>
        <div className="heading">User List:</div>
        <div className="user-data-container">
          <ul>
            {unique.map((arr) => {
              return (
                <li className={name==arr?"user-data active":"user-data"} onClick={() => showData(arr)}>
                  {arr}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {showFormModal && (
        <AddUser showModal={showModal} getData={props.getData} />
      )}
      {showFormModal && <Backdrop showModal={showModal}></Backdrop>}
    </>
  );
};

export default UserList;
