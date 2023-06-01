import Image from "next/image";
import {
  Wrapper,
  ImageBox,
  Content,
  Title,
  Info,
  BuyBox,
  Price,
} from "./style";

import formatPrice from "../../utils/format-price";

const ShowCard = ({ title, img, price }) => (
  <Wrapper>
    <ImageBox>
      <Image src={img} alt={title} layout="fill" objectFit="cover" />
    </ImageBox>
    <Content>
      <Info>
        <Title>{title}</Title>
      </Info>
      <BuyBox>
        <Price>{formatPrice(price)}</Price>
      </BuyBox>
    </Content>
  </Wrapper>
);

export default ShowCard;
