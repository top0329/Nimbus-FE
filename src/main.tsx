import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';

import App from './App';

import 'toastr/build/toastr.min.css';
import './css/style.css';

import { Web3Provider } from './contexts/web3Context';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  sepolia,
  gnosis,
  gnosisChiado,
} from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import SpinnerProvider from './contexts/spinnerContext';

import { Buffer as BufferPolyfill } from 'buffer';

declare global {
  interface Window {
    Buffer: typeof BufferPolyfill;
  }
}

window.Buffer = BufferPolyfill;

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: '57826bfdbc6cd9752e192a296fbbd40d',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    sepolia,
    gnosis,
    gnosisChiado,
  ],
  ssr: true,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <Provider store={store}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {/* <RainbowKitProvider
            modalSize="compact"
            theme={darkTheme({
              accentColor: '#7b3fe4',
              accentColorForeground: 'white',
              borderRadius: 'small',
              fontStack: 'system',
              overlayBlur: 'small',
            })}
          > */}
          <Web3Provider>
            <SpinnerProvider>
              <App />
            </SpinnerProvider>
          </Web3Provider>
          {/* </RainbowKitProvider> */}
        </QueryClientProvider>
      </WagmiProvider>
    </Provider>
  </Router>,
);
