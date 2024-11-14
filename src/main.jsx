import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./roadmap.css";
import TeamMember from "./components/TeamMember";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./Home";
import CollectionDisplay from "./CollectionDisplay";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import MusicCamp from "./components/MusicCamp";

gsap.registerPlugin(ScrollTrigger);
const { chains, provider } = configureChains(
  [chain.polygon],
  [
    alchemyProvider({ alchemyId: import.meta.env.VITE_ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: import.meta.env.VITE_APP_NAME || "AVC Dapp",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      theme={darkTheme({
        accentColor: "#7F1C97",
        accentColorForeground: "white",
        borderRadius: "large",
      })}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="collections/:id" element={<CollectionDisplay />} />
            <Route path="/team/:name" element={<TeamMember />} />
            <Route path="/music-camp" element={<MusicCamp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RainbowKitProvider>
  </WagmiConfig>
);
