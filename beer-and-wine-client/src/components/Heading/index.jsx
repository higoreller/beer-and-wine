import { Wrapper } from "./style";

const Heading = ({
  children,
  color = "white",
  lineLeft = false,
  lineBottom = false,
  lineColor = "primary",
  size = "medium",
}) => (
  <Wrapper
    color={color}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    lineColor={lineColor}
    size={size}
  >
    {children}
  </Wrapper>
);

export default Heading;
