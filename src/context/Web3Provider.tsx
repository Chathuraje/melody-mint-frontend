import { WagmiProvider, createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const WALLETCONNECT_PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const config = createConfig(
  getDefaultConfig({
    chains: [mainnet, sepolia],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },

    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,
    appName: "Melody Mint",

    // appDescription: "Your App Description",
    appUrl: "https://melodymint.tech",
    // appIcon: "https://family.co/logo.png",
  })
);

interface Web3ProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const Web3Provider = (props: Web3ProviderProps) => {
  const { children } = props;

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
