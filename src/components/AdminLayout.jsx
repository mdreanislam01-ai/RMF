import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const AdminLayout = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded flex justify-center items-center text-white text-xs">💼</div>
            <h1 className="text-lg font-bold text-gray-800">{t.appTitle}</h1>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <Link to="/admin/dashboard" className="block p-3 bg-green-50 text-green-700 rounded-lg font-medium">{t.dashboard}</Link>
          <Link to="/admin/customers" className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">{t.customers}</Link>
          <Link to="/admin/loans" className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">{t.loans}</Link>
          <Link to="/admin/savings" className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">{t.savings}</Link>
          <Link to="/admin/daily-collection" className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">{t.dailyCollection}</Link>
          <Link to="/admin/settings" className="block p-3 text-gray-600 hover:bg-gray-50 rounded-lg">{t.settings}</Link>
        </nav>

        <div className="p-4 border-t flex flex-col space-y-3">
          {/* ভাষা পরিবর্তন করার বাটন */}
          <button 
            onClick={toggleLanguage} 
            className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            {language === 'bn' ? 'Switch to English' : 'বাংলায় পরিবর্তন করুন'}
          </button>
          
          <button className="text-red-500 w-full p-2 font-medium">
            {t.logout}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet /> 
      </main>
    </div>
  );
};

export default AdminLayout;