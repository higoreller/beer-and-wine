import React from "react";
import { StyledHeading } from "./style";

const Heading = ({
  title,
  subtitle,
  color,
  titleSize,
  subtitleSize,
  background,
}) => {
  return (
    <StyledHeading
      color={color}
      titleSize={titleSize}
      subtitleSize={subtitleSize}
      background={background}
    >
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </StyledHeading>
  );
};

export default Heading;
