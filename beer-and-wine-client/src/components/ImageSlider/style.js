import styled from "styled-components";

export const SliderContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  .slick-prev:before,
  .slick-next:before {
    color: #59cd60;
    font-size: 50px;
  }
`;

export const SliderItem = styled.div`
  text-align: center;
  padding: 10px;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
