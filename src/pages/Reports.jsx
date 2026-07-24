import React from 'react';
import { useLanguage } from '../LanguageContext';

const Reports = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t.reports}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border">
          <div className="font-semibold mb-2">দৈনিক রিপোর্ট</div>
          <div className="text-3xl font-bold">১২,৫০০</div>
          <div className="text-sm text-gray-500 mt-1">আজকের আদায়</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border">
          <div className="font-semibold mb-2">মাসিক রিপোর্ট</div>
          <div className="text-3xl font-bold">৩,৮৫,০০০</div>
          <div className="text-sm text-gray-500 mt-1">এই মাসের আদায়</div>
        </div>
        <div className="bg-white p-6 rounded-2xl border">
          <div className="font-semibold mb-2">কাস্টমার রিপোর্ট</div>
          <div className="text-3xl font-bold">৩৮</div>
          <div className="text-sm text-gray-500 mt-1">মোট কাস্টমার</div>
        </div>
      </div>
    </div>
  );
};

export default Reports;