import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const phone = localStorage.getItem('customerPhone') || '017XXXXXXX';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
            <span className="text-white text-xl">💼</span>
          </div>
          <div>
            <div className="font-bold">MicroFinance</div>
            <div className="text-xs text-gray-500">কাস্টমার পোর্টাল</div>
          </div>
        </div>
        
        <button 
          onClick={handleLogout}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl text-sm font-medium"
        >
          লগআউট
        </button>
      </div>

      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">স্বাগতম!</h1>
          <p className="text-gray-600">মোবাইল: {phone}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border">
            <div className="text-sm text-gray-500">মোট লোন</div>
            <div className="text-3xl font-bold mt-1">৳45,000</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border">
            <div className="text-sm text-gray-500">বাকি টাকা</div>
            <div className="text-3xl font-bold mt-1 text-red-600">৳12,500</div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border">
          <h3 className="font-semibold mb-4">সাম্প্রতিক কার্যক্রম</h3>
          <div className="text-gray-500 text-sm">কোনো কার্যক্রম নেই</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;