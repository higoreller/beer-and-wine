/* eslint-disable @typescript-eslint/no-non-null-assertion */
import styled, { css, DefaultcustomTheme } from "styled-components";
import media from "styled-media-query";

import { HeadingProps, LineColors } from ".";

const customcustomTheme = {
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

export const wrapperModifiers = {
  small: () => css`
    font-size: ${customcustomTheme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,

  medium: () => css`
    font-size: ${customcustomTheme.font.sizes.xlarge};
    ${media.greaterThan("medium")`
      font-size: ${customcustomTheme.font.sizes.xxlarge};
    `}
  `,

  huge: () => css`
    font-size: ${customTheme.font.sizes.huge};
  `,

  lineLeft: (lineColor) => css`
    padding-left: ${customTheme.spacings.xxsmall};
    border-left: 0.7rem solid ${customTheme.colors[lineColor]};
  `,

  lineBottom: (lineColor) => css`
    position: relative;
    margin-bottom: ${customTheme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -1rem;
      content: "";
      width: 5rem;
      border-bottom: 0.5rem solid ${customTheme.colors[lineColor]};
    }
  `,
};

export const Wrapper =
  styled.h2 <
  HeadingProps >
  `
  ${({ lineLeft, lineBottom, lineColor, size }) => css`
    color: ${customTheme.colors};
    ${lineLeft && wrapperModifiers.lineLeft(lineColor)}
    ${lineBottom && wrapperModifiers.lineBottom(lineColor)}
    ${!!size && wrapperModifiers[size](customTheme)}
  `}
`;
