import React from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "SlNo", width: 83 },
  { field: "userName", headerName: "Name of Engr.", width: 170 },
  { field: "tlExpiry", headerName: "Expiry date (TL)", width: 170 },
  { field: "tlDays", headerName: "Days", width: 85 },
  { field: "releaseDate", headerName: "Release Date", width: 170 },
  { field: "releaseDays", headerName: "Days", width: 85 },
];

const rows = [
  {
    id: 1,
    userName: "Jon",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 2,
    userName: "Cersei",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 3,
    userName: "Jaime",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 4,
    userName: "Arya",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 5,
    userName: "Daenerys",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 6,
    userName: "Ferrara",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 7,
    userName: "Rossini",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
  {
    id: 8,
    userName: "Harvey",
    tlExpiry: 35,
    tlDays: 5,
    releaseDate: 7,
    releaseDays: 8,
  },
];

function MainTable() {
  return (
    <div
      style={{
        height: "calc(100vh - 85px)",
        width: "100%",
        paddingTop: "68px",
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
        disableSelectionOnClick
      />
    </div>
  );
}

export default MainTable;
