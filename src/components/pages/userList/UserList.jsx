import "./userList.css";
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 250,
      editable: true,
    },
    {
      field: "status",
      headerName: "status",
      width: 210,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 310,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Nguyen Ha",
      avatar:
        "https://i.pinimg.com/564x/9e/16/f6/9e16f60022628d7a4cec94ce67c05b7e.jpg",
      email: "ha030600@gmail.com",
      status: "active",
      transaction: "$3190.00",
    },
    {
      id: 2,
      username: "David Nguyen",
      avatar:
        "https://i.pinimg.com/564x/9e/16/f6/9e16f60022628d7a4cec94ce67c05b7e.jpg",
      email: "hadev000@gmail.com",
      status: "active",
      transaction: "$1190.00",
    },
    {
      id: 3,
      username: "Kevin Tran",
      avatar:
        "https://i.pinimg.com/564x/9e/16/f6/9e16f60022628d7a4cec94ce67c05b7e.jpg",
      email: "coder@gmail.com",
      status: "active",
      transaction: "$4590.00",
    },
    {
      id: 4,
      username: "Eli Carina",
      avatar:
        "https://i.pinimg.com/564x/9e/16/f6/9e16f60022628d7a4cec94ce67c05b7e.jpg",
      email: "Javascrip@gmail.com",
      status: "active",
      transaction: "$4790.00",
    },
    {
      id: 5,
      username: "Robert Ha",
      avatar:
        "https://i.pinimg.com/564x/9e/16/f6/9e16f60022628d7a4cec94ce67c05b7e.jpg",
      email: "dieppham@gmail.com",
      status: "active",
      transaction: "$4290.00",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
