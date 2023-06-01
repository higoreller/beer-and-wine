import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 90px 0 35px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
  padding-top: 14rem;
  padding-bottom: 10rem;
  background-color: #06092b;
  @media only screen and (max-width: 991px) {
    margin-top: 5rem;
    padding-bottom: 190px;
    padding-top: 140px;
  }
  @media only screen and (min-width: 991px) {
  }
  .container {
    @media only screen and (min-width: 1367px) {
      max-width: 1290px;
    }
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto -40px;
  padding-top: 8px;
  @media only screen and (max-width: 991px) {
    padding-top: 0px;
  }

  > div {
    width: calc(100% / 4 - 30px);
    margin-bottom: 45px;
    margin-right: 40px;
    @media only screen and (max-width: 1366px) {
      width: calc(100% / 4 - 23px);
      margin-right: 30px;
    }
    @media only screen and (max-width: 991px) {
      width: calc(100% / 2);
      margin-right: 0;
      padding: 0 15px;
    }
    @media only screen and (max-width: 624px) {
      width: 100%;
      padding: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  .feature__block {
    text-align: center;
    .icon__wrapper {
      margin: 0 auto 22px;
      position: relative;
      height: 80px;
      @media only screen and (max-width: 1366px) {
        margin-bottom: 20px;
      }
      img {
        display: inline-block;
      }
    }
    .content__wrapper {
      margin: 0 auto;
      @media only screen and (min-width: 481px) and (max-width: 624px) {
        max-width: 375px;
      }
      h3 {
        color: #0f2137;
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      p {
        color: #fff;
        font-size: 15px;
        line-height: 28px;
        padding: 0 10px;
        margin: 0;
      }
    }
  }
`;

export const SectionHeader = styled.header`
  max-width: 480px;
  width: 100%;
  margin: 0 auto 50px;
  text-align: center;
  position: relative;
  @media only screen and (max-width: 768px) {
    margin-bottom: 45px;
  }
  p {
    font-size: 15px;
    font-weight: normal;
    line-height: 2.3;
    margin-bottom: 0px;
    color: #000000;
    @media only screen and (max-width: 991px) {
      line-height: 2;
    }
  }
  h2 {
    font-size: 26px;
    line-height: 1.5;
    font-weight: 700;
    color: #000000;
    margin-top: 0;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
    @media only screen and (max-width: 991px) {
      font-size: 24px;
      margin-bottom: 10px;
      line-height: 1.35;
    }
  }
  &.text-white {
    h2,
    p {
      color: #ffffff;
    }
  }
`;
