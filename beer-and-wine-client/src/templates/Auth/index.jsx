import Logo from "./../../components/Logo";
import * as S from "./style";
import Link from "next/link";

const Auth = ({ title, children }) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <div></div>

        <div>
          <h2>Agora você pode armazenar suas memórias</h2>
          <S.Subtitle>
            <strong>BEER AND WINE</strong>
          </S.Subtitle>
        </div>

        <S.Footer>Higor Eller © Todos os Direitos Reservados</S.Footer>
      </S.BannerContent>{" "}
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <Logo href="/" url={"/img/logo.png"} width={250} />
        </Link>{" "}
        <h2>{title}</h2>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
);

export default Auth;
