import React from "react";
import Navbar from "../Components/Navbar";
import Backdrop from "../Components/Backdrop";
import ShowExtraData from "../Components/ShowExtraData";
import Dashboard from "../Components/Dashboard";
import UserList from "../Components/UserList";
const Admin = ({toggleSidebar,getData,sidebar}) => {
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="App">
        {sidebar && <ShowExtraData toggleSidebar={toggleSidebar} />}
        <Dashboard />
        <UserList getData={getData} />
        {sidebar && <Backdrop showModal={toggleSidebar}></Backdrop>}
      </div>
    </>
  );
};

export default Admin;
