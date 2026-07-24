import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const PaymentVerify = () => {
  const { t } = useLanguage();
  const [loanId, setLoanId] = useState('');
  const [amount, setAmount] = useState('');

  const handleVerify = () => {
    if (!loanId || !amount) {
      alert("লোন আইডি এবং টাকার পরিমাণ দিন");
      return;
    }
    
    alert(`✅ SPV পেমেন্ট যাচাই সফল!\nলোন: ${loanId}\nটাকা: ৳${amount}\nMerchant ID: SPV-KKCQO1RV`);
    
    setLoanId('');
    setAmount('');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">পেমেন্ট যাচাই (SPV)</h1>
      
      <div className="max-w-md bg-white p-6 rounded-2xl border">
        <div className="mb-4">
          <div className="font-semibold">SPV Integration</div>
          <div className="text-sm text-emerald-600">Connected • Merchant ID: SPV-KKCQO1RV</div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">লোন আইডি</label>
            <input 
              type="text" 
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
              placeholder="C-MRRWTXDU" 
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl" 
            />
          </div>
          
          <div>
            <label className="block text-sm mb-1">টাকার পরিমাণ</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="1000" 
              className="w-full px-4 py-3 border border-gray-300 rounded-2xl" 
            />
          </div>

          <button 
            onClick={handleVerify}
            className="w-full py-3 bg-emerald-600 text-white rounded-2xl font-semibold"
          >
            SPV দিয়ে পেমেন্ট যাচাই করুন
          </button>
        </div>
        
        <div className="mt-4 text-xs text-center text-gray-500">
          Powered by <a href="https://spv-services.web.app/" target="_blank" className="text-emerald-600">SPV Services</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentVerify;