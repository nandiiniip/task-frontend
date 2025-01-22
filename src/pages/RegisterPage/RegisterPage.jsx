import React from "react";
import { useForm } from "react-hook-form";
import "./RegisterPage.css";

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
    <div className="register__container">
      <h2 className="register__title">Register</h2>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form__group">
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
            className={`form__input ${errors.email ? "form__input--error" : ""}`}
          />
          {errors.email && (
            <p className="form__error">{errors.email.message}</p>
          )}
        </div>

        <div className="form__group">
          <label>Full Name</label>
          <input
            type="text"
            {...register("fullName", { required: "Full Name is required" })}
            className={`form__input ${errors.fullName ? "form__input--error" : ""}`}
          />
          {errors.fullName && (
            <p className="form__error">{errors.fullName.message}</p>
          )}
        </div>

        <div className="form__group">
          <label>Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`form__input ${errors.title ? "form__input--error" : ""}`}
          />
          {errors.title && (
            <p className="form__error">{errors.title.message}</p>
          )}
        </div>

        <div className="form__group">
          <label>Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={`form__input ${errors.password ? "form__input--error" : ""}`}
          />
          {errors.password && (
            <p className="form__error">{errors.password.message}</p>
          )}
        </div>

        <div className="form__group">
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className={`form__input ${
              errors.confirmPassword ? "form__input--error" : ""
            }`}
          />
          {errors.confirmPassword && (
            <p className="form__error">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button type="submit" className="form__button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
