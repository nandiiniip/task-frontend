import React from "react";
import PropTypes from "prop-types";
import StyledForm from "./FormContainer";

const CustomForm = ({ children, onSubmit, ...props }) => {
  return (
    <StyledForm onSubmit={onSubmit} {...props}>
      {children}
    </StyledForm>
  );
};

CustomForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CustomForm;
