import React, { useState, useEffect } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { FiMenu, FiX } from "react-icons/fi";
import Logo from "../Logo";
import Button from "../Button";
import { NavbarWrapper, Menu, MobileMenu, CustomContainer } from "./style";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import Modal from "../Modal";
import { useContext } from "react";
import { UserContext } from "@context/UserContext";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const Navbar = () => {
  const {
    dispatch,
    state: { userInfo },
  } = useContext(UserContext);
  const [state, setState] = useState({
    mobileMenu: false,
    isSticky: false,
  });
  const [showModal, setShowModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const router = useRouter();

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

  const handleLogOut = () => {
    dispatch({ type: "USER_LOGOUT" });
    Cookies.remove("userInfo");
    router.push("/");
  };

  /* useEffect(() => {
    if (!userInfo) {
      router.push("/");
    }
  }, [userInfo]); */

  return (
    <CustomContainer className={state.isSticky ? "sticky" : "navbar-container"}>
      <NavbarWrapper>
        <Logo
          href="/"
          url={"/img/logo.png"}
          width={250}
          onClick={handleClick}
        />
        <Menu>
          <Link href="/">Home</Link>
          <Link href="/my-drinks">Minhas bebidas</Link>
          {userInfo ? (
            <Button onClick={handleLogOut}>Sair</Button>
          ) : (
            <Button onClick={handleSignInClick}>Entrar</Button>
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
