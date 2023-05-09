import React from "react";
import "./Table.css";
import { useSelector } from "react-redux";
import { userColumns } from "./UserTableData";
import { DataGrid } from "@mui/x-data-grid";
const Table = () => {
  const data = useSelector((state) => state.data.data);
  const userRows = data.map((arr, index) => {
    return {
      id: index,
      ...arr,
    };
  });
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 120,
      renderCell: () => {
        return (
          <div className="cellAction">
            <div className="viewButton">Edit</div>

            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  // console.log(userRows);
  return (
    <div>
      <div style={{ marginBottom: "80px" }}>
        <h1 style={{ color: "grey", textAlign: "center" }}>Users Data</h1>

        <div className="table-container">
          <DataGrid
            className="table-grid"
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
          {/* <table className="usersData">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Location</th>

                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {data.map((arr, index) => {
                return (
                  <tr key={index}>
                    <td>{arr.name}</td>
                    <td>{arr.email}</td>
                    <td>{arr.location}</td>

                    <td>{arr.createdAt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default Table;
