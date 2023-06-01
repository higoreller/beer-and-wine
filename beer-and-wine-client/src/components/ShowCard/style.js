import styled from "styled-components";

export const Wrapper = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

export const ImageBox = styled.a`
  min-height: 14rem;
  position: relative;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  margin: 1.6rem;
`;

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`;

export const Title = styled.h3`
  font-size: 1.6rem;
  line-height: 1.6rem;
  font-weight: 600;
  color: #030517;
`;

export const BuyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.8rem;
`;

export const Price = styled.div`
  color: #fafafa;
  padding: 0 0.8rem;
  background-color: #06092b;
  border-radius: 0.4rem;
  margin-right: calc(0.8rem / 2);
`;
