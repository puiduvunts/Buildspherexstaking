import { ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

// This is the chain your dApp will work on.
const activeChain = "binance";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId="a1b9903b4fc6c4d16909352e875313c4"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
