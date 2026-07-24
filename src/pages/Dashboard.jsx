import React from 'react';
import { useLanguage } from '../LanguageContext';

const Dashboard = () => {
  const { t } = useLanguage();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">{t.dashboard}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="text-sm text-gray-500">মোট কাস্টমার</div>
          <div className="text-4xl font-bold mt-2">38</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="text-sm text-gray-500">চলমান লোন</div>
          <div className="text-4xl font-bold mt-2">29</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="text-sm text-gray-500">{t.totalCollection}</div>
          <div className="text-4xl font-bold mt-2 text-emerald-600">১৫,৫৬,০০০</div>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border">
          <div className="text-sm text-gray-500">মোট বকেয়া</div>
          <div className="text-4xl font-bold mt-2 text-red-600">৩৭,৮২,১৫২</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;