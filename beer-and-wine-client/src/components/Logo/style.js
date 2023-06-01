import styled, { css } from "styled-components";

export const LogoWrapper = styled.a`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width ? props.width : "150px"};
    `}
`;
