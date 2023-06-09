import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadingAction } from "../Store/loading";
import { userAuthAction } from "../Store/UserAuth";
import axios from "axios";
import { Navigate } from "react-router-dom";
const Navbar = (props) => {
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    dispatch(loadingAction.setLoading(true));
    try {
      await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/admin/logout`,
        {
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );

      dispatch(loadingAction.setLoading(false));
      localStorage.removeItem("isAuthenticated");
      dispatch(userAuthAction.setIsAuthenticated(false));
      toast.success(`Logged Out Successfully`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(loadingAction.setLoading(false));
      dispatch(userAuthAction.setIsAuthenticated(true));
    }
  };
  if (!isAuthenticated) return <Navigate to={"/"} />;
  return (
    <div className="nav">
      <i className="fa fa-bars icon bars" onClick={props.toggleSidebar}></i>
      <div style={{ marginRight: "30px" }}>
        <select className="language-selection">
          <option value={""} selected>
            Language
          </option>
          <option value={"english"}>English</option>
          <option value={"german"}>German</option>
        </select>
        <button
          className="login"
          type="button"
          disabled={loading}
          onClick={logoutHandler}
        >
          Log Out
        </button>
        <i
          class={
            props.screenSize < 1000
              ? "fa-solid fa-user admin-icon"
              : "fa-solid fa-user admin-icon hide"
          }
          onClick={() => props.setShowProfile((prev) => !prev)}
        ></i>
      </div>
    </div>
  );
};

export default Navbar;
