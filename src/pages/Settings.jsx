import React from 'react';
import { useLanguage } from '../LanguageContext';

const Settings = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t.settings}</h1>
      <div className="bg-white p-8 rounded-2xl border">
        <p className="text-gray-600">সেটিংস পেজ এখানে দেখানো হবে</p>
      </div>
    </div>
  );
};

export default Settings;