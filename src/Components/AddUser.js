import React from "react";
import { useState } from "react";
import axios from "axios";
import "./AddUser.css";
const AddUser = (props) => {
  const [error, setError] = useState();
  const [data, setData] = useState({
    name: "",
    category: "",
    expense: "",
    itemName: "",
    date: "",
  });
  const onChangeHandler = (event) => {
    setError();
    setData({ ...data, [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  const { name, category, expense, itemName, date } = data;
  const submitAction = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:8008/Users", data)
      .then(props.getData);
    // if (!response) {
    //   alert("Data added in the json server");
    //   props.setMsg(`${data.name} field is added successfully`);
    //   props.openAddUser();
    //   props.showToast();
    // } else {
    //   alert("Error");
    // }

    setData({
      name: "",
      category: "",
      expense: "",
      itemName: "",
      date: "",
    });
    props.showModal();
  };
  function submitCheck(e) {
    e.preventDefault();
    if (name == "") setError(`Name is required `);
    else if (category == "") setError(`Category is required`);
    else if (expense == "") setError(`Expense is required`);
    else if (itemName == "") setError(`Item Name is required`);
    else if (date == "") setError(`Date is required`);
    else {
      setError();
      submitAction(e);
    }
  }
  return (
    <div className="addUserData">
      <form onSubmit={submitCheck}>
        <div>
          <label htmlFor="Name">Username:</label>
          <br></br>
          <input
            name="name"
            type={"text"}
            className={"inputControl"}
            placeholder={"Enter Your UserName"}
            value={name}
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <label htmlFor="Category">Category:</label>
          <br></br>
          {/* <input
            name="category"
            type={"text"}
            className={"inputControl"}
            placeholder={"Select Ypur Category"}
            value={category}
            onChange={onChangeHandler}
          ></input> */}
          <select id="cars" name="category" onChange={onChangeHandler} className={"inputControl option"}>
            <option name="category" value="" selected>Select Your Category</option>
            <option name="category" value="Necessary">Necessary</option>
            <option name="category" value="Entertainment">Entertainment</option>
          </select>
          <br></br>
          <label htmlFor="Expense">Expense:</label>
          <br></br>

          <input
            name="expense"
            type={"number"}
            className={"inputControl"}
            placeholder={"Enter Your Expense"}
            value={expense}
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <label htmlFor="username">Item Name:</label>
          <br></br>

          <input
            name="itemName"
            type={"text"}
            className={"inputControl"}
            placeholder={"Enter Your Item Name"}
            value={itemName}
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <label htmlFor="website">Date:</label>
          <br></br>

          <input
            name="date"
            type={"date"}
            className={"inputControl"}
            placeholder={"Enter Your Website"}
            value={date}
            onChange={onChangeHandler}
          ></input>
          <br></br>
          <div style={{ color: "red" }}>{error}</div>
          <button type="submit" className="btn-crud sub">
            Submit
          </button>
          <button
            type="button"
            className="btn-crud sub"
            onClick={props.showModal}
          >
            Back
          </button>
          <br></br>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
