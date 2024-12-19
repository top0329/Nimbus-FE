import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

import Loader from './common/Loader';
import Dashboard from './pages/Dashboard/Dashboard';
import GPU from './pages/Rent/GPU';
import CPU from './pages/Rent/CPU';
import Order from './pages/Order/Order';
import Overview from './pages/OrderView/Overview';
import Nodes from './pages/Nodes/Nodes';
import Staking from './pages/Staking/Staking';
import Profile from './pages/Profile/Profile';
import Support from './pages/Support/Support';
import Admin from './pages/Admin/Admin';

const projectId = '57826bfdbc6cd9752e192a296fbbd40d';

const chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com',
  },
  {
    chainId: 42161,
    name: 'Arbitrum',
    currency: 'ETH',
    explorerUrl: 'https://arbiscan.io',
    rpcUrl: 'https://arb1.arbitrum.io/rpc',
  },
  {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'ETH',
    explorerUrl: 'https://sepolia.etherscan.io/',
    rpcUrl: 'https://ethereum-sepolia-rpc.publicnode.com',
  },
];

const ethersConfig = defaultConfig({
  metadata: {
    name: 'Web3Modal',
    description: 'Web3Modal Laboratory',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886'],
  },
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  defaultChainId: 1,
  rpcUrl: 'https://cloudflare-eth.com',
});

createWeb3Modal({
  ethersConfig,
  chains,
  projectId,
  enableAnalytics: true,
  allowUnsupportedChain: true,
  themeMode: 'light',
  themeVariables: {
    '--w3m-color-mix': '#5d97ee',
    '--w3m-color-mix-strength': 20,
  },
});
function App() {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/gpu" element={<GPU />} />
      <Route path="/cpu" element={<CPU />} />
      <Route path="/order/:service/:instance" element={<Order />} />
      <Route path="/overview/:id" element={<Overview />} />
      <Route path="/node" element={<Nodes />} />
      <Route path="/staking" element={<Staking />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/support" element={<Support />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
