import logo from "./logo.svg";
import "./App.css";
import ShowExtraData from "./Components/ShowExtraData";
import Dashboard from "./Components/Dashboard";
import UserList from "./Components/UserList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataAction } from "./Store/userData";
import Navbar from "./Components/Navbar";
function App() {
  // const [data, setData] = useState([]);
  const data = useSelector((state) => state.data.data);
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
      {/* <Navbar /> */}
      <div className="App">
        <ShowExtraData />
        <Dashboard />
        <UserList getData={getData} />
      </div>
    </>
  );
}

export default App;
