import Footer from "@component/Footer";
import Navbar from "@component/Navbar";
import Heading from "@component/Heading";
import Sticky from "react-stickynode";
import { useContext } from "react";
import { UserContext } from "@context/UserContext";

import * as S from "./style";

const Base = ({ children }) => {
  const {
    state: { userInfo },
  } = useContext(UserContext);

  return (
    <section>
      <Sticky top={0} innerZ={9999} activeClass="sticky-active">
        <Navbar />
      </Sticky>

      <S.Content>{children}</S.Content>

      <S.SectionFooter>
        <Footer />
      </S.SectionFooter>
    </section>
  );
};

export default Base;
