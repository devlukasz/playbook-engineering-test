import React, { createContext } from 'react';
import { RootStore, rootStore } from '../store';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreContext = createContext<RootStore>({} as RootStore);

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <StoreContext.Provider value={rootStore}>
      {children}
    </StoreContext.Provider>
  );
};
