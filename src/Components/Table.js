import React from "react";
import "./Table.css";
import { useSelector } from "react-redux";
const Table = () => {
  const data = useSelector((state) => state.data.data);
  return (
    <div>
      <div>
        <h1 style={{ color: "grey", textAlign: "center" }}>
          Users Expense Data
        </h1>

        <table className="usersData">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Expense</th>
              <th>Item Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((arr, index) => {
              return (
                <tr key={index}>
                  <td>{arr.id}</td>
                  <td>{arr.name}</td>
                  <td>{arr.category}</td>
                  <td>{arr.expense}</td>
                  <td>{arr.itemName}</td>
                  <td>{arr.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
