import React from "react";
import { IconButton, Button, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const CounterButton = styled(Button)({
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid #ccc",
  padding: "16px",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "white",
  },
});

const InputContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export default function Counter(props) {
  const { count, onDecrement, onIncrement, onChange } = props;

  return (
    <CounterButton>
      <IconButton size="small" onClick={onDecrement} disabled={count === 1}>
        <img src="/assets/images/subtract.svg" alt="subtract" />
      </IconButton>
      <InputContainer>
        <InputBase
          value={count}
          onChange={onChange}
          inputProps={{
            style: {
              textAlign: "center",
              width: "30px",
              fontSize: "16px",
              color: "#101828",
            },
          }}
        />
      </InputContainer>
      <IconButton size="small" onClick={onIncrement}>
        <img src="/assets/images/add.svg" alt="add" />
      </IconButton>
    </CounterButton>
  );
}
