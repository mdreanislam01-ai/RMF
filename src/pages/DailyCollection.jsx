import React from 'react';
import { useLanguage } from '../LanguageContext';

const DailyCollection = () => {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{t.dailyCollection}</h1>
          <p className="text-gray-500">{t.date}: ২৮ জুলাই, ২০২৬</p>
        </div>
        <button className="px-5 py-2.5 bg-green-600 text-white rounded-2xl flex items-center gap-x-2">
          + {t.collectionEntry}
        </button>
      </div>

      <div className="bg-white p-8 rounded-2xl border text-center">
        <div className="text-5xl mb-4">📅</div>
        <p className="text-gray-500">{t.noCollection}</p>
      </div>
    </div>
  );
};

export default DailyCollection;