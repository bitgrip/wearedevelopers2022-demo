import "../styles/globals.css";
import type { AppProps } from "next/app";

function WebApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default WebApp;
