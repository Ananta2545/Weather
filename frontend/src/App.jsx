import './App.css';
import Authentication from './pages/Authentication/Authentication.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ExpertHome from './pages/Expert/ExpertHome.jsx';
import { useEffect, useState } from 'react';
import FarmerHome from './pages/FarmerHome/FarmerHome.jsx';

function App() {
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole") || null);

  // Persist userRole in localStorage
  useEffect(() => {
    if (userRole) {
      localStorage.setItem("userRole", userRole);
    } else {
      localStorage.removeItem("userRole");
    }
  }, [userRole]);

  // Define routes based on userRole
  const router = createBrowserRouter([
    {
      path: '/',
      element: userRole === null ? (
        <Authentication setUserRole={setUserRole} />
      ) : userRole === 'farmer' ? (
        <FarmerHome />
      ) : (
        <ExpertHome />
      ),
    },
    {
      path: '/farmer_home',
      element: userRole === 'farmer' ? (
        <FarmerHome />
      ) : (
        <Authentication setUserRole={setUserRole} />
      ),
    },
    {
      path: '/expert_home',
      element: userRole === 'expert' ? (
        <ExpertHome />
      ) : (
        <Authentication setUserRole={setUserRole} />
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
