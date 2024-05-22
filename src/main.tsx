import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

import App from './App';
import 'toastr/build/toastr.min.css'

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig } from 'wagmi'
import { mainnet } from 'viem/chains'

// 1. Get projectId
const projectId = '57c3ed3f7633af987eda789d503edfee'

// 2. Create wagmiConfig
const metadata = {
  name: 'web3-modal-setup',
  description: 'Web3 Modal Example',
}
const chains = [mainnet]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'light' })

import './css/style.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <WagmiConfig config={wagmiConfig}>
          <App />
        </WagmiConfig>
      </Provider>
    </Router>
  </React.StrictMode>,
);
