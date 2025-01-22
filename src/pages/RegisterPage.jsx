import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Typography, Box } from "@mui/material";
import CustomForm from "../components/CustomForm";
import CustomButton from "../components/CustomButton";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Registration Successful!");
    reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <TextField
          label="Email"
          type="email"
          fullWidth
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

        {/* Full Name Field */}
        <TextField
          label="Full Name"
          type="text"
          fullWidth
          {...register("fullName", { required: "Full Name is required" })}
          error={!!errors.fullName}
          helperText={errors.fullName ? errors.fullName.message : ""}
        />

        {/* Title Field */}
        <TextField
          label="Title"
          type="text"
          fullWidth
          {...register("title", { required: "Title is required" })}
          error={!!errors.title}
          helperText={errors.title ? errors.title.message : ""}
        />

        {/* Password Field */}
        <TextField
          label="Password"
          type="password"
          fullWidth
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

        {/* Confirm Password Field */}
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
          error={!!errors.confirmPassword}
          helperText={
            errors.confirmPassword ? errors.confirmPassword.message : ""
          }
        />

        {/* Submit Button */}
        <CustomButton type="submit">Register</CustomButton>
      </CustomForm>
    </Box>
  );
};

export default RegisterPage;
