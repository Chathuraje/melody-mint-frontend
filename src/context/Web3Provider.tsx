import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";

const WALLETCONNECT_PROJECT_ID = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;

const config = createConfig(
  getDefaultConfig({
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(),
    },

    walletConnectProjectId: WALLETCONNECT_PROJECT_ID, // TODO: Uncaught TypeError:
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

  const connectKitCustomTheme = {
    "--ck-overlay-background": "#000000db",
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider customTheme={connectKitCustomTheme}>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
