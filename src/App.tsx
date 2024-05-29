import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

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
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/gpu' element={<GPU />} />
      <Route path='/cpu' element={<CPU />} />
      <Route path='/order/:service/:instance' element={<Order />} />
      <Route path='/overview/:id' element={<Overview />} />
      <Route path='/node' element={<Nodes />} />
      <Route path='/staking' element={<Staking />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/support' element={<Support />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
