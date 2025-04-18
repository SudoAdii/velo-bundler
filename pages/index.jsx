import React from "react";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaTelegramPlane, FaYoutube, FaDiscord } from "react-icons/fa";
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

require('@solana/wallet-adapter-react-ui/styles.css');

const wallets = [new PhantomWalletAdapter()];

function SolSniperLandingContent() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Floating Solana Coins */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            src="/sol-coin.png"
            alt="solana"
            className={`absolute w-${i % 2 === 0 ? "16" : "24"} animate-float${i}`}
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <img src="/solana-logo.svg" alt="SOL" className="w-8 h-8" />
          <span className="text-xl font-bold">SOL</span>
        </div>

        <div className="flex items-center gap-4 text-white text-xl">
          <FaTwitter className="hover:text-purple-400 cursor-pointer" />
          <FaTelegramPlane className="hover:text-purple-400 cursor-pointer" />
          <FaYoutube className="hover:text-purple-400 cursor-pointer" />
          <FaDiscord className="hover:text-purple-400 cursor-pointer" />

          <div className="ml-4">
            <WalletMultiButton className="!bg-gradient-to-r from-purple-500 to-pink-500 !text-white px-6 py-2 rounded-full" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          WELCOME <span className="text-purple-500">BONUS</span><br />FOR SOLANA USERS
        </h1>

        <div className="mt-10 animate-bounce">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="purple" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </main>
    </div>
  );
}

export default function SolSniperLanding() {
  return (
    <ConnectionProvider endpoint={clusterApiUrl('mainnet-beta')}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <SolSniperLandingContent />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
