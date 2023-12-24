"use client";
import { Toaster } from "@/components/ui/toaster";
import {
  WagmiConfig,
  createConfig,
  configureChains,
  mainnet,
  useAccount,
  useConnect,
  useEnsName,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { InjectedConnector } from "wagmi/connectors/injected";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { goerli } from "viem/chains";
import React from "react";
import { HuddleClient, HuddleProvider } from "@huddle01/react";
import { ThemeProvider } from "../theme/theme";
import Providers from "@/jotai/jotai";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const huddleClient = new HuddleClient({
    projectId: "1h8cAwCA7bQ7mjxCl948iqf-aHYtmU1Y",
    options: {
      activeSpeakers: {
        size: 8,
      },
    },
  });
  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, goerli],
    [
      alchemyProvider({ apiKey: "0srkScMYKOU5dsf0lT4jtn8VtzIUuMEh" }),
      publicProvider(),
    ],
  );
  const config = createConfig({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({
        chains,
        options: {
          shimDisconnect: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }),
    ],
    publicClient,
    webSocketPublicClient,
  });
  return (
    <WagmiConfig config={config}>
      <HuddleProvider key="huddle01-provider" client={huddleClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </HuddleProvider>
    </WagmiConfig>
  );
};

export default Wrapper;
