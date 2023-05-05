import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataAction } from "./Store/userData";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Login from "./Components/Login";

function App() {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.data.data);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8008/Users");
      console.log(res.data);
      // setData(res.data);
      dispatch(dataAction.setData(res.data));
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route
          path="/admin"
          element={
            <Admin
              toggleSidebar={toggleSidebar}
              getData={getData}
              sidebar={sidebar}
            />
          }
        ></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
