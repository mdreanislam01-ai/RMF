import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();

    if (isAdmin) {
      // Admin Login
      if (email && password) {
        localStorage.setItem('userRole', 'admin');
        navigate('/admin/dashboard');
      } else {
        alert('ইমেইল এবং পাসওয়ার্ড দিন');
      }
    } else {
      // Customer Login
      const phone = email; // Using email field as phone for customer
      const pin = password;

      if (phone && pin) {
        localStorage.setItem('userRole', 'customer');
        localStorage.setItem('customerPhone', phone);
        navigate('/customer/dashboard');
      } else {
        alert('মোবাইল নম্বর এবং পিন দিন');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center">
            <span className="text-white text-4xl">💼</span>
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-gray-900">MicroFinance</h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          আপনার অ্যাকাউন্টে লগইন করুন
        </p>

        {/* Toggle between Admin & Customer */}
        <div className="flex mb-6 bg-gray-100 rounded-2xl p-1">
          <button
            onClick={() => setIsAdmin(true)}
            className={`flex-1 py-2 rounded-xl font-medium transition ${isAdmin ? 'bg-white shadow text-emerald-700' : 'text-gray-600'}`}
          >
            অ্যাডমিন
          </button>
          <button
            onClick={() => setIsAdmin(false)}
            className={`flex-1 py-2 rounded-xl font-medium transition ${!isAdmin ? 'bg-white shadow text-emerald-700' : 'text-gray-600'}`}
          >
            কাস্টমার
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          
          {/* Email / Phone Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              {isAdmin ? 'ইমেইল' : 'মোবাইল নম্বর'}
            </label>
            <input
              type={isAdmin ? 'email' : 'tel'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={isAdmin ? 'admin@rmf.com' : '017XXXXXXXX'}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          {/* Password / PIN Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              {isAdmin ? 'পাসওয়ার্ড' : 'পিন'}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isAdmin ? '••••••••' : '••••'}
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl transition"
          >
            লগইন
          </button>
        </form>

        <div className="mt-6 text-center space-y-2">
          <a href="#" className="block text-emerald-600 text-sm hover:underline">
            পাসওয়ার্ড ভুলে গেছেন?
          </a>
          <a href="#" className="block text-blue-600 text-sm hover:underline">
            কাস্টমার পোর্টালে ফিরে যান
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;