"use client";

import PortfolioApp from "@/components/PortfolioApp";
import { PortfolioProvider } from "@/context/PortfolioContext";

export default function Home() {
  return (
    <PortfolioProvider>
      <PortfolioApp />
    </PortfolioProvider>
  );
}
