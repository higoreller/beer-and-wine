import "./../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./../context/UserContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <UserProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </UserProvider>
  );
}
