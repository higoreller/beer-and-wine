import "./../styles/globals.css";
import React from 'react'
import { UserProvider } from "../context/UserContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from "@testing-library/react";
import * as rtl from "@testing-library/react";

export default function App({
  Component,
  pageProps,
}) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

const customRender = (ui, options) =>
  render(ui, { wrapper: UserProvider, ...options });

export const fireEvent = rtl.fireEvent;
export const screen = rtl.screen;
export const waitFor = rtl.waitFor;

export { customRender as render };
