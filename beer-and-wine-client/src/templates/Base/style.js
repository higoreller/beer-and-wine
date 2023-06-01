import styled, { css } from "styled-components";
import media from "styled-media-query";

import * as HeadingStyles from "components/Heading/styles";
import * as LogoStyles from "components/Logo/styles";

export const Wrapper = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;

  ${media.greaterThan("medium")`
    grid-template-columns: 0.7fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url("/img/bannerBlock.jpg");
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan("medium")`
      display: none;
    `}

    &:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.4;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};
    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};
    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`;

export const Content = styled.div`
  ${() => css`
    background-image: url("/img/fundosign-in.jpg");
    background-position: 80% 20%;
    background-size: cover;
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan("medium")`
      width: 36rem;
    `}

    ${LogoStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }
    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
