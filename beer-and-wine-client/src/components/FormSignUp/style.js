import styled, { css } from "styled-components";
import { darken } from "polished";
import { theme } from "./../../styles/theme";

export const Wrapper = styled.div`
  margin: ${theme.spacings.xxsmall} 0;
`;

export const FormLink = styled.div`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.black};
  text-align: center;
  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    border-bottom: 0.1rem solid ${theme.colors.secondary};
    transition: color, border, ${theme.transition.fast};
    &:hover {
      color: ${darken(0.1, theme.colors.secondary)};
      border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
    }
  }
`;
