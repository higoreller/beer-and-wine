import styled, { css } from "styled-components";
import media from "styled-media-query";
import { theme } from "../../styles/theme";
import Container from "./../../components/Container";

export const SectionBanner = styled.section`
  ${() => css`
    margin: 0 calc(-${theme.grid.gutter} / 2) ${theme.spacings.large};
    ${media.greaterThan("medium")`
      margin-bottom: ${theme.spacings.large};
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;

export const SectionHero = styled(Container)`
  ${() => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan("large")`
      margin-top: 20rem;
      border-radius: 3rem;
    `}
    ${media.greaterThan("medium")`
      margin-bottom: 0;
      padding-top: 14rem;
      padding-bottom: 10rem;
      background-color: ${theme.colors.lightBg};
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
      color: ${theme.colors.black};
    `}
  `}
`;

export const SectionInformation = styled(Container)`
  ${() => css`
    margin-top: calc(${theme.spacings.xlarge} * 2);
  `}
`;

export const SectionFooter = styled.section`
  ${() => css`
    margin-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
    ${media.greaterThan("medium")`
      padding-top: calc(${theme.spacings.xxlarge} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
    `}
  `}
`;
