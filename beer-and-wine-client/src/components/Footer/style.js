import styled, { css } from "styled-components";
import media from "styled-media-query";

export const SectionFooter = styled.section`
  width: 100%;
  position: relative;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  padding-bottom: 1.6rem;
  padding-top: 5.6rem;
  background-color: #06092b;
  clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);
  ${media.greaterThan("medium")`
  padding-top: calc(5.6rem * 2);
  clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%);
`}
`;

export const Wrapper = styled.footer`
  max-width: 1390px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2rem;
  margin-top: 3.2rem;
  ${media.greaterThan("medium")`
    grid-template-columns: repeat(4, 1fr)
  `}
`;

export const Column = styled.div`
  a {
    color: #fafafa;
    font-size: 1.2rem;
    display: block;
    padding-bottom: 0.5rem;
  }
  ,
  span {
    display: block;
    color: #fafafa;
    text-decoration: none;
    margin-bottom: 0.8rem;
    font-size: 1.2rem;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.div`
  color: #fafafa;
  font-size: 1.2rem;
  margin-top: 4rem;
  margin-bottom: 3.2rem;
  text-align: center;
`;
