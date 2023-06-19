import Footer from "@component/Footer";
import Navbar from "@component/Navbar";
import GridSection from "@component/GridSection";
import ImageSlider from "@component/ImageSlider";
import Heading from "@component/Heading";
import Sticky from "react-stickynode";
import { useContext } from "react";
import { UserContext } from "@context/UserContext";
import { images } from "@component/ImageSlider/mock";
import * as S from "./style";

const Home = () => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <section>
      <Sticky top={0} innerZ={9999} activeClass="sticky-active">
        <Navbar />
      </Sticky>
      <Heading
        title="Bem-vindo ao Beer-and-Wine"
        subtitle="Existem milhares de bebidas por aí não é mesmo? Agora ficou fácil salvar todas!"
        color="#fff"
        titleSize="2.5em"
        subtitleSize="1em"
      />
      <S.SectionHero>
        <ImageSlider images={images} />
      </S.SectionHero>

      <S.SectionInformation></S.SectionInformation>
      <S.SectionFooter>
        <Footer />
      </S.SectionFooter>
    </section>
  );
};
export default Home;
