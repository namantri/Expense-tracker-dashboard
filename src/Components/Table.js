import React from "react";
import "./Table.css";
import { useSelector } from "react-redux";
import { userColumns } from "./UserTableData";
import { DataGrid } from "@mui/x-data-grid";
const Table = () => {
  const data = useSelector((state) => state.data.data);
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: () => {
        return (
          <div className="cellAction">
            <a
              // to="/users/test"
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Edit</div>
            </a>

            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div style={{marginBottom:"80px"}}>
        <h1 style={{ color: "grey", textAlign: "center" }}>
          Users Expense Data
        </h1>

        {/* <table className="usersData">
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

        </table> */}
        <div className="table-container">
          <DataGrid
          className="table-grid"
            rows={data}
            columns={userColumns.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            
          />
        </div>
      </div>
    </div>
  );
};

export default Table;
