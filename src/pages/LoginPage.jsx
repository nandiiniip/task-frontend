import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { LoginContent } from "../Content/Login";
import { CustomForm, CustomButton, MainContainer } from "../components";
import axiosCustom from "../utils/api";
import { useDispatch } from "react-redux";
import { setTokens } from "../store/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosCustom.post("/login", {
        email: data.email,
        password: data.password,
      });
      console.log("Response Data: ", response.data);

      // localStorage.setItem("access_token", response.data.access_token);
      // localStorage.setItem("refresh_token", response.data.refresh_token);

      dispatch(
        setTokens({
          user: { email: data.email},
          access: response.data.access_token,
          refresh: response.data.refresh_token,
        })
      );

      alert("Login Successful!");
      navigate("/");
    } catch (error) {
      console.error("Error: ", error);
      alert(error?.response?.data?.detail || "Login Failed!");
    }
  };

  return (
    <MainContainer>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {LoginContent.Title}
      </Typography>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
        <TextField
          label="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        <CustomButton type="submit">{LoginContent.ButtonName}</CustomButton>
      </CustomForm>
    </MainContainer>
  );
};

export default LoginPage;
