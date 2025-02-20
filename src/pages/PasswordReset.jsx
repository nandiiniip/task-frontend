import React from "react";
import { useNavigate } from "react-router-dom";
import MainContainer from "../styled-components/MainContainer";
import {
  TitleTypography,
  BodyTypography,
} from "../styled-components/TypographyStyles";
import { CustomForm, CustomButton } from "../components";
import { useForm } from "react-hook-form";
import axiosCustom from "../utils/api";
import { TextField } from "@mui/material";

const PasswordReset = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axiosCustom.post("/password-reset/request", {
        email: data.email,
      });

      alert(response.data.message || "Password Reset link sent");
      navigate("/login");
    } catch (error) {
      console.error("Error: ", error);
      alert(error?.response?.data?.detail || "Request failed");
    }
  };

  return (
    <MainContainer>
      <TitleTypography>Reset Password</TitleTypography>
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
        <CustomButton type="submit">Send Reset Link</CustomButton>
        <BodyTypography clickable="true" onClick={() => navigate("/login")}>
          Back to Login
        </BodyTypography>
      </CustomForm>
    </MainContainer>
  );
};

export default PasswordReset;
