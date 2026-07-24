import React from 'react';
import { useLanguage } from '../LanguageContext';

const Savings = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t.savings}</h1>
      <div className="bg-white p-8 rounded-2xl border text-center">
        <p className="text-gray-500">সঞ্চয় লিস্ট এখানে দেখানো হবে</p>
      </div>
    </div>
  );
};

export default Savings;