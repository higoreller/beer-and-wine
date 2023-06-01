import React, { useEffect, useState } from "react";
import {
  Input,
  Error,
  Label,
  IconWrapper,
  InputWrapper,
  Wrapper,
} from "./style";

const TextField = ({
  name,
  label,
  initialValue = "",
  icon,
  iconPosition = "left",
  error,
  onInputChange,
  disabled = false,
  ...props
}) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleChange = (event) => {
    const newValue = event.currentTarget.value;
    setValue(newValue);

    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <Wrapper error={!!error} disabled={disabled}>
      {label && <Label htmlFor={name}>{label}</Label>}
      <InputWrapper iconPosition={iconPosition}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <Input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </InputWrapper>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default TextField;
