import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerLogin = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (phone && pin) {
      localStorage.setItem('userRole', 'customer');
      localStorage.setItem('customerPhone', phone);
      navigate('/customer/dashboard');
    } else {
      alert('মোবাইল নম্বর এবং পিন দিন');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8">
        
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-600 rounded-2xl flex items-center justify-center">
            <span className="text-white text-4xl">💼</span>
          </div>
        </div>

        <h1 className="text-center text-3xl font-bold text-gray-900">MicroFinance</h1>
        <p className="text-center text-gray-500 mt-2 mb-8">
          কাস্টমার পোর্টালে লগইন করুন
        </p>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">মোবাইল নম্বর</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="017XXXXXXXX"
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">পিন</label>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••"
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

        <div className="mt-6 text-center">
          <a href="/login" className="text-blue-600 text-sm hover:underline">
            অ্যাডমিন লগইন করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;