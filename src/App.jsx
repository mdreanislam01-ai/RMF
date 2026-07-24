import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from './components/AdminLayout';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Loans from './pages/Loans';
import Savings from './pages/Savings';
import DailyCollection from './pages/DailyCollection';
import Reports from './pages/Reports';
import PaymentVerify from './pages/PaymentVerify';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

// Customer Pages
import CustomerDashboard from './pages/CustomerDashboard';

function App() {
  return (
    <Routes>
      {/* Login Routes */}
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/customer-login" element={<AdminLogin />} />
      
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="loans" element={<Loans />} />
        <Route path="savings" element={<Savings />} />
        <Route path="daily-collection" element={<DailyCollection />} />
        <Route path="reports" element={<Reports />} />
        <Route path="payment-verify" element={<PaymentVerify />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Customer Routes */}
      <Route path="/customer" element={<CustomerDashboard />} />

      {/* Default Redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;