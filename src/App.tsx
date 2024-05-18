import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import Dashboard from './pages/Dashboard/Dashboard';
import Rent from './pages/Rent/Rent';
import Order from './pages/Order/Order';
import Overview from './pages/OrderView/Overview';
import Nodes from './pages/Nodes/Nodes';
import Staking from './pages/Staking/Staking';
import Profile from './pages/Profile/Profile';
import Support from './pages/Support/Support';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 100);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/rent' element={<Rent />} />
      <Route path='/order' element={<Order />} />
      <Route path='/overview' element={<Overview />} />
      <Route path='/node' element={<Nodes />} />
      <Route path='/staking' element={<Staking />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/support' element={<Support />} />
    </Routes>
  );
}

export default App;
