import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Login from "./Components/Login";
import AdminLogin from "./Components/AdminLogin";

function App() {
  // const [data, setData] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route
          path="/admin"
          element={<Admin toggleSidebar={toggleSidebar} sidebar={sidebar} />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/adminlogin" element={<AdminLogin />}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
