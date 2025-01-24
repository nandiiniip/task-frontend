import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import theme from "../theme";

const CustomButton = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  exception = false,
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      style={exception ? theme.customStyles.exceptionButton : {}}
      {...props}
    >
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
  exception: PropTypes.bool,
};

CustomButton.defaultProps = {
  variant: "contained",
  color: "primary",
  exception: false,
};

export default CustomButton;
