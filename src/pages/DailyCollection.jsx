import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const DailyCollection = () => {
  const { t } = useLanguage();
  const [collections, setCollections] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    customer: '',
    amount: '',
    type: 'কিস্তি'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.customer || !formData.amount) {
      alert("সব তথ্য দিন");
      return;
    }

    const newCollection = {
      id: Date.now(),
      ...formData,
      date: new Date().toLocaleDateString('bn-BD')
    };

    setCollections([...collections, newCollection]);
    setFormData({ customer: '', amount: '', type: 'কিস্তি' });
    setShowForm(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">{t.dailyCollection}</h1>
          <p className="text-gray-500">তারিখ: {new Date().toLocaleDateString('bn-BD')}</p>
        </div>
        <button 
          onClick={() => setShowForm(true)}
          className="px-5 py-2.5 bg-green-600 text-white rounded-2xl flex items-center gap-x-2"
        >
          + {t.collectionEntry}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-2xl border">
          <div className="text-sm text-gray-500">{t.totalCollection}</div>
          <div className="text-3xl font-bold text-emerald-600">
            {collections.reduce((sum, c) => sum + parseInt(c.amount || 0), 0)}
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl border">
          <div className="text-sm text-gray-500">{t.installment}</div>
          <div className="text-3xl font-bold">{collections.length}</div>
        </div>
        <div className="bg-white p-4 rounded-2xl border">
          <div className="text-sm text-gray-500">সঞ্চয়</div>
          <div className="text-3xl font-bold">০</div>
        </div>
      </div>

      {/* Collection List */}
      {collections.length > 0 ? (
        <div className="bg-white rounded-2xl border divide-y">
          {collections.map((col, index) => (
            <div key={index} className="p-4 flex justify-between items-center">
              <div>
                <div className="font-semibold">{col.customer}</div>
                <div className="text-sm text-gray-500">{col.date} • {col.type}</div>
              </div>
              <div className="font-bold text-emerald-600">৳{col.amount}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl border text-center">
          <div className="text-5xl mb-4">📅</div>
          <p className="text-gray-500">{t.noCollection}</p>
        </div>
      )}

      {/* Add Collection Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 mx-4">
            <h3 className="font-semibold text-xl mb-4">কালেকশন এন্ট্রি</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">কাস্টমারের নাম</label>
                <input 
                  type="text" 
                  value={formData.customer}
                  onChange={(e) => setFormData({...formData, customer: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">টাকার পরিমাণ</label>
                <input 
                  type="number" 
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">ধরন</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl"
                >
                  <option value="কিস্তি">কিস্তি</option>
                  <option value="সঞ্চয়">সঞ্চয়</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button 
                  type="button" 
                  onClick={() => setShowForm(false)}
                  className="flex-1 py-3 border border-gray-300 rounded-2xl"
                >
                  বাতিল
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-3 bg-green-600 text-white rounded-2xl"
                >
                  সেভ করুন
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyCollection;