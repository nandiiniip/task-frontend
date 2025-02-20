import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { CustomForm, CustomButton } from "../components";
import axiosCustom from "../utils/api";
import { TitleTypography } from "../styled-components/TypographyStyles";
import MainContainer from "../styled-components/MainContainer";

const PasswordConfirmation = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token"); // Extract token from URL
    const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);

    const new_password = watch("new_password", "");
  
    useEffect(() => {
      if (!token) {
        alert("Invalid or missing token!");
        navigate("/");
      }
    }, [token, navigate]);
  
    const onSubmit = async (data) => {
      try {
        setLoading(true);
        await axiosCustom.post("/password-reset/confirm", {
          token,
          new_password: data.new_password,
        });
        alert("Password reset successful!");
        navigate("/login");
      } catch (error) {
        console.error("Error:", error);
        alert(error?.response?.data?.detail || "Password reset failed!");
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <MainContainer>
        <TitleTypography variant="h4" textAlign="center" gutterBottom>
          Reset Your Password
        </TitleTypography>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="New Password"
            type="password"
            {...register("new_password", {
              required: "New password is required",
              minLength: { value: 8, message: "Password must be at least 8 characters" },
            })}
            error={!!errors.new_password}
            helperText={errors.new_password ? errors.new_password.message : ""}
          />
          <TextField
            label="Confirm Password"
            type="password"
            {...register("confirm_password", {
              required: "Please confirm your password",
              validate: (value) =>
                value === new_password || "Passwords do not match",
            })}
            error={!!errors.confirm_password}
            helperText={errors.confirm_password ? errors.confirm_password.message : ""}
          />
          <CustomButton type="submit" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </CustomButton>
        </CustomForm>
      </MainContainer>
    );
}

export default PasswordConfirmation
