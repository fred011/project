import { TextField, Button, Box, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    if (actualData.email && actualData.password === !null) {
      console.log(actualData);

      document.getElementById("login-form").reset();
      setError({ status: true, msg: "Login Success", type: "success" });
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(actualData.email)){
      setError({ status: true, msg: "Enter A Valid Email", type: "error" });
      return
    } 
    else if (actualData.email === "") {
      setError({ status: true, msg: "Enter your Email", type: "error" });
    } else if (actualData.password === 0) {
      setError({ status: true, msg: "Enter your Password", type: "error" });
    } else {
      try {
        await auth.signInWithEmailAndPassword(
          actualData.email.trim(),
          actualData.password
        );
        setError({ status: true, msg: "Login successful!", type: "success" });
        alert("Successfulll logged in");

        navigate("/dashboard");
      } catch (error) {
        
         alert("Make sure Email/Password are entered correctly!");
       
      }
    }
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
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
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
        />
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        <NavLink to="/sendpasswordresetemail">Forgot Password ?</NavLink>
        {error.status ? (
          <Alert severity={error.type} sx={{ mt: 3 }}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default UserLogin;
