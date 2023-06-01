import { forwardRef } from "react";
import { Wrapper } from "./style";

const Button = (
  {
    children,
    icon,
    size = "medium",
    fullWidth = false,
    minimal = false,
    ...props
  },
  ref
) => (
  <Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    minimal={minimal}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </Wrapper>
);

export default forwardRef(Button);
