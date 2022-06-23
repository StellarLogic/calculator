import React from "react";
import { StyledButton } from "./style";

const Button = ({ value = "", ...props }) => {
  return (
    <StyledButton block size="large" {...props}>
      {value}
    </StyledButton>
  );
};

export default Button;
