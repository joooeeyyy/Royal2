import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = (props) => {
  return (
    <MuiButton
      style={{
        textTransform: "capitalize",
        padding: "13px 47px",
        border: props.variant === "outlined" ? "1px solid #09101A" : "none",
        background: props.variant === "outlined" ? "#fff" : "#fff100",
        color: props.variant === "outlined" ? "#09101A" : "#09101A",
        ...props.sx,
      }}
      {...props}
    >
      {props.children}
    </MuiButton>
  );
};

export default Button;
