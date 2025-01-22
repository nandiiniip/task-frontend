import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

const CustomButton = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  ...props
}) => {
  return (
    <Button variant={variant} color={color} onClick={onClick} {...props}>
      {children}
    </Button>
  );
};

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "error",
    "success",
    "info",
    "warning",
  ]),
};

CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
};

export default CustomButton;
