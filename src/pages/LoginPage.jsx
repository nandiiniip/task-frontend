import React from "react";
import { useForm } from "react-hook-form";
import CustomForm from "../components/CustomForm";
import CustomButton from "../components/CustomButton";
import { TextField, Typography } from "@mui/material";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Login Successful!");
    reset();
  };

  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        Login
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
        <CustomButton type="submit">Login</CustomButton>
      </CustomForm>
    </div>
  );
};

export default LoginPage;
