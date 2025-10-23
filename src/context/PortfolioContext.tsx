'use client';

import React, { createContext, useContext, useState } from 'react';

interface PortfolioContextType {
  isDeveloperMode: boolean;
  toggleMode: () => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [isDeveloperMode, setIsDeveloperMode] = useState(true);

  const toggleMode = () => {
    setIsDeveloperMode(prev => !prev);
  };

  return (
    <PortfolioContext.Provider value={{ isDeveloperMode, toggleMode }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}