import { darken } from "polished";
import styled, { css } from "styled-components";
import { theme } from "@styles/theme";

const wrapperModifiers = {
  small: () => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: () => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: () => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: () => css`
    background: none;
    color: ${theme.colors.primary};
    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
};

export const Wrapper = styled.button`
  ${({ size, fullWidth, hasIcon, minimal, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #49e2a0 0%, #59cd60 50%);
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:focus {
      outline: 1px dashed;
    }

    &:hover {
      background: linear-gradient(180deg, #49e2a0 0%, #3cab43 70%);
    }

    ${!!size && wrapperModifiers[size]()};
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon()};
    ${!!minimal && wrapperModifiers.minimal()};
    ${disabled && wrapperModifiers.disabled()};
  `}
`;
