import React from "react";
import { LogoWrapper } from "./style";
import Image from "next/image";

const Logo = ({ url, width }) => {
  return (
    <LogoWrapper>
      <Image
        src={url}
        alt="Imagem da logo"
        title="Logo"
        width={width}
        height={width / 2}
      ></Image>
    </LogoWrapper>
  );
};

export default Logo;
