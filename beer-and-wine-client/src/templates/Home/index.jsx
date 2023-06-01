import Container from "./../../components/Container";
import Footer from "./../../components/Footer";
import Navbar from "./../../components/Navbar";
import GridSection from "./../../components/GridSection";
import Sticky from "react-stickynode";

import { useSession } from "next-auth/react";
import * as S from "./style";

const Home = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <section>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <GridSection />
        <S.SectionFooter>
          <Footer />
        </S.SectionFooter>
      </section>
    );
  } else {
    return (
      <section>
        <Sticky top={0} innerZ={9999} activeClass="sticky-active">
          <Navbar />
        </Sticky>
        <S.SectionHero>Olá</S.SectionHero>
        <S.SectionInformation>Olá</S.SectionInformation>
        <S.SectionFooter>
          <Footer />
        </S.SectionFooter>
      </section>
    );
  }
};
export default Home;
