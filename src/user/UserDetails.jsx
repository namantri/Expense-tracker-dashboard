import React, { useState, useEffect } from "react";
import AddUser from "../Components/AddUser";
import Backdrop from "../Components/Backdrop";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Weather from "../Store/Weather";
import "./UserDetails.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userAuthAction } from "../Store/UserAuth";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { loadingAction } from "../Store/loading";
// import { serverTimestamp, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";

ChartJS.register(ArcElement, Tooltip, Legend);
const UserDetails = (props) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [file, setFile] = useState("");
  // const [per, setPerc] = useState(null);
  // const [downloadLink, setDownloadLink] = useState("");
  const isAuthenticated = useSelector(
    (state) => state.isAuthenticated.isAuthenticated
  );
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const showModal = () => {
    setShowFormModal((prev) => !prev);
  };

  const data = useSelector((state) => state.userDetailData.userDetailData);
  // console.log(data);

  useEffect(() => {
    const uploadFile = async () => {
      const name = new Date().getTime() + file.name;

      console.log(name);

      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // const progress =
          //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // setPerc(progress);
          // setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // setDownloadLink(downloadURL);
            try {
              const response = await axios.put(
                `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/addImage`,
                {
                  imgSrc: `${downloadURL}`,
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                  // for cookie otherwise cookie will not work
                  withCredentials: true,
                }
              );

              toast.success(response?.data?.message, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              props.refreshData();
            } catch (error) {
              toast.error(error?.response?.data?.message, {
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
          });
          // console.log("New  " + downloadURL);
        }
      );
      console.log("Entered Upload File");
      // console.log(per);
    };
    // console.log(downloadLink);
    file && uploadFile();
  }, [file]);
  // console.log(downloadLink);
  const logoutHandler = async () => {
    dispatch(loadingAction.setLoading(true));
    try {
      await axios.get(
        `https://nodejs-expense-tracker-mern-backend.onrender.com/api/v1/users/logout`,
        {
          // for cookie otherwise cookie will not work
          withCredentials: true,
        }
      );

      dispatch(loadingAction.setLoading(false));
      localStorage.removeItem("isAuthenticated");
      dispatch(userAuthAction.setIsAuthenticated(false));
      toast.success("Logged out Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // alert("logged Out successfulyy");
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 3000,
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
    <>
      <div
        className={
          props.showProfile
            ? "userList-container userList-user active"
            : "userList-container userList-user"
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
          }}
        >
          <button onClick={showModal} className="btn-crud add user-expense-btn">
            <i class="fa-solid fa-plus"></i>
          </button>
          <button
            className="login user-login-btn"
            type="button"
            disabled={loading}
            onClick={logoutHandler}
          >
            Log Out
          </button>
        </div>
        <div className="user-profile-img-cont">
          <div>
            {data.imgSrc === "#" || data.imgSrc === "" ? (
              <>
                <img
                  src={
                    file
                      ? URL.createObjectURL(file)
                      : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                  }
                  alt=""
                  width="100"
                  height="100"
                  className="user-img user-panel-img"
                />
                <div className="imgUpload-container">
                  <label htmlFor="file" className="img-upload-link">
                    Upload image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    id="file"
                    style={{ display: "none" }}
                  />
                </div>
              </>
            ) : (
              <img
                src={data.imgSrc}
                alt=""
                width="100"
                height="100"
                className="user-img user-panel-img"
              />
            )}
            <div className="user-name">{data?.name}</div>

            <div className="user-metadata">
              <li className="user-li">{data?.email}</li>
              <li className="user-li">{data?.location}</li>
              <li className="user-li"> {data?.createdAt}</li>
            </div>
          </div>

          <Weather location={data.location} />
        </div>
      </div>

      {showFormModal && (
        <AddUser
          showModal={showModal}
          refreshData={props.refreshData}
          name={data?.name}
        />
      )}
      {showFormModal && <Backdrop showModal={showModal}></Backdrop>}
    </>
  );
};

export default UserDetails;
