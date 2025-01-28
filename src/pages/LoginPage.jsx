import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import CustomForm from "../components/CustomForm";
import CustomButton from "../components/CustomButton";
import { TextField, Typography } from "@mui/material";
import { LoginContent } from "../Content/Login";
import MainContainer from "../components/MainContainer";
import api from "../utils/api";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });
      console.log('Response Data: ', response.data);

      localStorage.setItem('access_token', response.data.access_token);
      localStorage.setItem('refresh_token', response.data.refresh_token);

      alert('Login Successful!');
      navigate('/'); 
    } catch (error) {
      console.error('Error: ', error);
      alert(error?.response?.data?.detail || 'Login Failed!');
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
