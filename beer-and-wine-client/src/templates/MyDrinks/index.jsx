import Footer from "@component/Footer";
import Navbar from "@component/Navbar";
import GridSection from "@component/GridSection";
import Heading from "@component/Heading";
import Sticky from "react-stickynode";
import Base from "./../Base";
import { useContext } from "react";
import { UserContext } from "@context/UserContext";
import * as S from "./style";

const MyDrinks = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  if (userInfo) {
    return (
      <section>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <Heading
          title="Busque sua bebida!"
          subtitle="No futuro você vai poder cadastrar a sua bebida também, além de ter reconhecimento de rótulo por imagem!"
          color="#fff"
          titleSize="2.5em"
          subtitleSize="1em"
        />
        <GridSection />
        <S.SectionFooter>
          <Footer />
        </S.SectionFooter>
      </section>
    );
  } else {
    return (
      <Base>
        <Heading
          title="Efetue o login!"
          subtitle="Você precisa entrar para visualizar as bebidas"
          color="#fff"
          titleSize="2.5em"
          subtitleSize="1em"
        />
      </Base>
    );
  }
};
export default MyDrinks;
