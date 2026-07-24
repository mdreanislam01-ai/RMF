import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Customers = () => {
  const { t } = useLanguage();
  const [customers, setCustomers] = useState([
    { id: "C-MRXOBRM4", name: "ওমর ফারুক", phone: "01734403844" },
    { id: "C-MRUTV3TZ", name: "মোঃ সুমন গাজী", phone: "01729845321" }
  ]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{t.customers}</h1>
        <button className="px-5 py-2.5 bg-green-600 text-white rounded-2xl flex items-center gap-x-2">
          + নতুন কাস্টমার
        </button>
      </div>

      <div className="bg-white rounded-2xl border divide-y">
        {customers.map((customer, index) => (
          <div key={index} className="p-4 flex justify-between items-center">
            <div>
              <div className="font-semibold">{customer.name}</div>
              <div className="text-sm text-gray-500">{customer.phone}</div>
            </div>
            <div className="text-xs text-emerald-600 font-mono">{customer.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;