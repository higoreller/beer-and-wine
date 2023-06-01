import styled, { css } from "styled-components";
import { lighten } from "polished";
import { theme } from "./../../styles/theme";

export const ForgotPassword = styled.a`
  display: block;
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.black};
  text-decoration: none;
  text-align: right;
  &:hover {
    color: ${lighten(0.2, theme.colors.black)};
  }
`;
