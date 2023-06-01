import Link from "next/link";
import { Wrapper, Content, Column, Copyright, SectionFooter } from "./style";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import Container from "../Container";

const Footer = () => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      scrollIntoView(target, {
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionFooter>
      <Container>
        <Wrapper>
          <img
            href="#home"
            src={"/img/logo.png"}
            title="Logo"
            className="main-logo"
            width={"140px"}
            style={{ background: "none" }}
          />
          <Content>
            <Column>
              <Link href="mailto:cogtec.mail@gmail.com">
                cogtec.mail@gmail.com
              </Link>
            </Column>

            <Column>
              <nav aria-labelledby="social media">
                <Link
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopenner, noreferrer"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopenner, noreferrer"
                >
                  Facebook
                </Link>
              </nav>
            </Column>

            <Column>
              <nav aria-labelledby="footer resources">
                <Link href="#home" onClick={(e) => handleClick(e, "home")}>
                  Home
                </Link>
                <Link
                  href="#keyFeatures"
                  onClick={(e) => handleClick(e, "grid-section")}
                >
                  Bebidas
                </Link>
              </nav>
            </Column>

            <Column aria-labelledby="footer-contact">
              <span>Jardim América, Goiânia - GO</span>
              <span>Próximo ao parque.</span>
            </Column>
          </Content>

          <Copyright>HigorEller © Todos os direitos reservados</Copyright>
        </Wrapper>
      </Container>
    </SectionFooter>
  );
};

export default Footer;
