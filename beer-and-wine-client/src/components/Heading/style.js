import styled from "styled-components";

export const StyledHeading = styled.div`
  text-align: center;
  color: ${(props) => props.color || "#000"};
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  margin: 1rem 0 2rem 0;

  h1 {
    font-size: ${(props) => props.titleSize || "2em"};
    margin-bottom: 1em;
    font-weight: 700;
  }

  h2 {
    font-size: ${(props) => props.subtitleSize || "1.5em"};
    font-weight: 600;
  }
`;
