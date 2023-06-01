import styled from "styled-components";

export const Main = styled.div`
  @media only screen and (min-width: 769px) {
    @media display: grid;
    grid-template-columns: 26rem 1fr;
    gap: 3.2rem;
  }
`;

export const Container = styled.div`
  max-width: 1390px;
  margin: 0 auto;
  margin-bottom: 14rem;
`;
