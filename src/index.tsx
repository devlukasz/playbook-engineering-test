import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyles } from './styles/global';
import { StoreProvider } from './providers/StoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <StoreProvider>
      <GlobalStyles />
      <App />
    </StoreProvider>
  </React.StrictMode>
);
