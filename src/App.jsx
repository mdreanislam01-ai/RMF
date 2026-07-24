import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Loans from './pages/Loans';
import Savings from './pages/Savings';
import DailyCollection from './pages/DailyCollection';
import Settings from './pages/Settings';

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/login" element={<AdminLogin />} />
      
      {/* Protected Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="loans" element={<Loans />} />
        <Route path="savings" element={<Savings />} />
        <Route path="daily-collection" element={<DailyCollection />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      
      {/* Default redirect */}
      <Route path="*" element={<AdminLogin />} />
    </Routes>
  );
}

export default App;