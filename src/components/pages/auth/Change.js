import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { SendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import SideBar from "../../SideBar.jsx";
import "../../Pass.css";

const ChangePassword = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
    };
     if (actualData.email == 0) {
      setError({ status: true, msg: "Enter Your Email ", type: "error" });
      alert("Enter Your Email!");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(actualData.email)) {
      setError({ status: true, msg: "Enter A Valid Email", type: "error" });
      return;
    } else if (actualData.email) {
      console.log(actualData);
      document.getElementById("password-reset-email-form").reset();
      setError({
        status: true,
        msg: "Password Reset Email Sent. Check Your Email !!",
        type: "success",
      });
    } 
    auth
      .sendPasswordResetEmail(actualData.email)
      .then((data) => {
        alert("Reset Password Email Sent!");
      })
      .catch((err) => {
        alert(err.code);
      });
  };
  return (
    <>
      <div className="class">
        <div className="hello">
          <SideBar />
          <div className="containe">
            <Grid container justifyContent="center" className="lle">
              <Grid className="ch" item sm={6} xs={12}>
                <h1>Change Password</h1>
                <Box
                  component="form"
                  noValidate
                  sx={{ mt: 2 }}
                  id="password-reset-email-form"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="email"
                    label="Email Address"
                  />
                  <Box textAlign="center">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2, px: 5 }}
                    >
                      Change
                    </Button>
                  </Box>
                  {error.status ? (
                    <Alert severity={error.type}>{error.msg}</Alert>
                  ) : (
                    ""
                  )}
                </Box>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
