import { Container } from "components/Container";
import Footer from "components/Footer";
import Menu from "components/Menu";
import { useContext } from "react";
import { UserContext } from "@context/UserContext";

import * as S from "./styles";

const Base = ({ children }) => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <S.Wrapper>
      <Container>
        <Menu username={userInfo?.username} />
      </Container>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};

export default Base;
