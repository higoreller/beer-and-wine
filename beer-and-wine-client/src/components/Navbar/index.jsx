import React, { useState, useEffect } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../Logo";
import Button from "../Button";
import { NavbarWrapper, Menu, MobileMenu, CustomContainer } from "./style";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { useSession, signIn, signOut } from "next-auth/react";
import Modal from "../Modal";

const Navbar = () => {
  const [state, setState] = useState({
    mobileMenu: false,
    isSticky: false,
  });
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleHandler = (type) => {
    if (type === "menu") {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
      });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("home");
    if (target) {
      scrollIntoView(target, {
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setState((prevState) => ({
        ...prevState,
        isSticky: isScrolled,
      }));
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleSignInClick = (e) => {
    e.preventDefault();
    setShowLoginForm(true);
    setShowModal(true);
  };

  const handleSignUpClick = (e) => {
    e.preventDefault();
    setShowLoginForm(false);
    setShowModal(true);
  };

  return (
    <CustomContainer className={state.isSticky ? "sticky" : "navbar-container"}>
      <NavbarWrapper>
        <Logo
          href="#home"
          url={"/img/logo.png"}
          width={250}
          onClick={handleClick}
        />
        <Menu>
          <Link href="#home">Home</Link>
          <Link href="#home">Minhas bebidas</Link>
          {session ? (
            <Button onClick={handleSignInClick}>Sair</Button>
          ) : (
            <Button onClick={handleSignUpClick}>Entrar</Button>
          )}
        </Menu>
        <MobileMenu>
          <Button
            icon={
              state.mobileMenu ? (
                <FiX className="bar" />
              ) : (
                <Fade>
                  <FiMenu className="close" />
                </Fade>
              )
            }
            onClick={() => toggleHandler("menu")}
          >
            Menu
          </Button>
        </MobileMenu>
      </NavbarWrapper>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        showLoginForm={showLoginForm}
        setShowLoginForm={setShowLoginForm}
      />
    </CustomContainer>
  );
};

export default Navbar;
