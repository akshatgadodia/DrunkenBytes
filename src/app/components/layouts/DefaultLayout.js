import React, {useEffect} from "react";
import Navbar from "../modules/Navbar";
import Footer from "../modules/Footer";
import ScrollToTop from "../modules/ScrollToTop";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from "@web3modal/ethereum";
import { Web3Modal, useWeb3ModalTheme  } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { goerli } from "wagmi/chains";

const projectId = "5eb3b4632acfeff4d00404640ce75685";
const chains = [goerli];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId })
]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: modalConnectors({
    projectId,
    version: "2", // or "2"
    appName: "web3Modal",
    chains
  }),
  provider
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

const DefaultLayout = ({ children }) => {
  const { theme, setTheme } = useWeb3ModalTheme();
    setTheme({
      themeMode: "light",
      themeColor: "purple",
      themeBackground: "gradient"
    });
  return (
    <div>
      <WagmiConfig client={wagmiClient}>
        <Navbar />
        <ScrollToTop />
        <main>
          {children}
        </main>
        <Footer />
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </div>
  );
};

export default DefaultLayout;
