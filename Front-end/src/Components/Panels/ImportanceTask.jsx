import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useAuthUser } from "react-auth-kit";

export default function GatherStatistics() {
  const auth = useAuthUser();
  const user = auth()?.data;

  const [rows, setRows] = useState([]);

  useEffect(() => {
    try {
         const fetchData = () => {
      fetch(`http://localhost:3005/api/v1/order/currentPoint/${user.location}`)
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          setRows(
            data.data?.map((d) => {
              return { id: d._id, ...d };
            })
          );
        });
    };
    fetchData();
    } catch {

    };
   
  });

  const columns = [
    {
      field: "packagesId",
      headerName: "Mã công việc",
      width: 150,
      valueGetter: (params) => params.row.packagesId,
    },
   
    {
      field: "senderName",
      headerName: "Tên công việc",
      width: 150,
      valueGetter: (params) => params.row.sender.senderName,
    }, 
    {
        field: "senderAdd",
        headerName: "Mô tả",
        width: 250,
        valueGetter: (params) => params.row.receiver.receiverAdd,
    },   
    {
      field: "",
      headerName: "Thời gian bắt đầu",
      width: 150,
      valueGetter: (params) => params.row.receiver.receiverName,
    },
    {
        field: "receiverName",
        headerName: "Thời gian còn lại",
        width: 150,
        valueGetter: (params) => params.row.receiver.receiverName,
      },
    {
      field: "receiverPhone",
      headerName: "Dự kiến hoàn thành",
      width: 150,
      valueGetter: (params) => params.row.receiver.receiverPhone,
    },
    {
      field: "receiverAdd",
      headerName: "Chú ý",
      width: 250,
      valueGetter: (params) => params.row.receiver.receiverAdd,
    },
   
    // {
    //   field: "street",
    //   headerName: "Street",
    //   description: "This column has a value getter and is not sortable.",
    //   sortable: false,
    //   width: 150,
    //   valueGetter: (params) => params.row.address.street,
    // },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            p: 4,
            background: "#faf6ed",
            width: "100%",
          }}
        >
          <Stack alignItems={"center"}>
            <Typography
              variant="h3"
              sx={{ color: "#003e29", fontWeight: "bold", mb: 4 }}
            >
              THỐNG KÊ CÔNG VIỆC QUAN TRỌNG
            </Typography>

            <DataGrid
              id="confirmationTable"
              sx={{
                mb: 4,
                width: "100%",
                background: "#fdfdfd",
                maxHeight: "60vh",
              }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10, 15, 20, 25]}
            />
          </Stack>
        </Paper>
      </div>
    </div>
  );
}
