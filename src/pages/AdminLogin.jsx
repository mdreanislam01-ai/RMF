import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const AdminLogin = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Demo login
    if (email && password) {
      navigate('/admin/dashboard');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-600 rounded-2xl mx-auto flex items-center justify-center">
            <span className="text-white text-3xl">💼</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-900">{t.appTitle}</h1>
          <p className="text-gray-600 mt-2">{t.loginMsg}</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              placeholder="admin@rmf.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">{t.password}</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
          >
            {t.loginBtn}
          </button>

          <div className="text-center">
            <a href="#" className="text-green-600 text-sm hover:underline">{t.forgotPass}</a>
          </div>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">{t.customerPortal}</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;