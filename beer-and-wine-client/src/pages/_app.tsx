import "./../styles/globals.css";
import type { AppProps } from "next/app";
import { UserProvider } from "./../context/UserContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from "@testing-library/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

const customRender = (ui: any, options: any) =>
  render(ui, { wrapper: UserProvider, ...options });

export * from "@testing-library/react";

export { customRender as render };
