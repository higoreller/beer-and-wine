import { darken } from "polished";
import styled, { css } from "styled-components";

const customTheme = {
  font: {
    sizes: {
      xsmall: "12px",
      small: "14px",
      medium: "16px",
    },
  },
  spacings: {
    xxsmall: "4px",
    medium: "16px",
    xlarge: "32px",
  },
  border: {
    radius: "4px",
  },
  colors: {
    primary: "#3e3e3e",
    white: "#ffffff",
  },
};

const wrapperModifiers = {
  small: () => css`
    height: 3rem;
    font-size: ${customTheme.font.sizes.xsmall};
  `,
  medium: () => css`
    height: 4rem;
    font-size: ${customTheme.font.sizes.small};
    padding: ${customTheme.spacings.xxsmall} ${customTheme.spacings.medium};
  `,
  large: () => css`
    height: 5rem;
    font-size: ${customTheme.font.sizes.medium};
    padding: ${customTheme.spacings.xxsmall} ${customTheme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: () => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${customTheme.spacings.xxsmall};
      }
    }
  `,
  minimal: () => css`
    background: none;
    color: ${customTheme.colors.primary};
    &:hover {
      color: ${darken(0.1, customTheme.colors.primary)};
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
    color: ${customTheme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: ${customTheme.border.radius};
    padding: ${customTheme.spacings.xxsmall};
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
