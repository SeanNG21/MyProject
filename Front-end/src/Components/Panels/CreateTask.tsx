import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import "../../Assets/Styles/Form/Form.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { Typography } from "@mui/material";
import axios from "axios";

export default function Form() {
  const match = useMediaQuery("(max-width:800px)");

  // console.log(num);
  const [formState, setFormState] = useState(false);
  const [pkgId, setPkgId] = useState("");

  type FormValues = {
    sender: {
      senderName: string;
      senderPhone: string;
      senderAddr: string;
      senderAdd: string;
    };
    receiver: {
      receiverName: string;
      receiverPhone: string;
      receiverAddr: string;
      receiverAdd: string;
    };
    package: {
      productType: string;
      productName: string;
      productValue: string;
      productWeight: string;
      quantity: string;
      size: {
        length: string;
        width: string;
        height: string;
      };
      productCategory: string;
    };
    payment: string;
    note: string;
  };

  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);

    try {
      const result = await axios.post(
        "http://localhost:3005/api/v1/packages/create",
        data
      );
      setPkgId(result.data.package.packagesId);
      console.log(result);
    } catch (error) {}

    setFormState(true);
  };

  // function generateCode() {
  //   setCode(GenerateCode);
  // }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} direction={`${match ? "column" : "row"}`}>
          <Paper id="paper" style={{ width: "40%" }} elevation={3}>
            <div className="LABEL">CÔNG VIỆC</div>
            <Divider sx={{ marginBottom: 3 }} />
            <Stack spacing={2} direction="row" sx={{ marginBottom: 3 }}>
              <TextField
                id="outlined-basic"
                label="Tên Công Việc"
                variant="outlined"
                fullWidth
                required
                {...register("sender.senderName")}
              />
            </Stack>
            
            <TextField
              id="outlined-basic"
              label="Mô tả công việc"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 4 }}
              {...register("sender.senderAddr")}
            />
          </Paper>
          <Paper id="paper" style={{ width: "35%" }} elevation={3}>
            <div className="LABEL">DỰ KIẾN HOÀN THÀNH</div>
            <Divider sx={{ marginBottom: 4 }} />
            <TextField
              id="outlined-basic"
              label="Deadline"
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 4 }}
              {...register("package.productName")}
            />
            <TextField
              id="outlined-basic"
              label="Yêu cầu của công việc"
              multiline
              rows={5}
              variant="outlined"
              fullWidth
              required
              sx={{ mb: 4 }}
              {...register("package.productName")}
            />
          </Paper>
          <Paper id="paper" style={{ width: "25%" }} elevation={3}>
            <div className="LABEL">LƯU Ý</div>
            <TextField
              fullWidth
              multiline
              rows={5}
              label="Ghi chú"
              sx={{ mb: 4 }}
              {...register("note")}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              style={{ fontWeight: "bold", background: "#003e29" }}
              sx={{ mb: 4 }}
            >
              Tạo Công Việc Mới
            </Button>
          </Paper>
        </Stack>
      </form>
    </div>
  );
}
