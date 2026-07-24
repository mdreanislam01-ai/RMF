import React from 'react';

const Notifications = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">নোটিফিকেশন</h1>
      
      <div className="space-y-3">
        <div className="bg-white p-4 rounded-2xl border flex gap-3">
          <div className="text-emerald-500 mt-1">✅</div>
          <div>
            <div className="font-medium">জলিল পেমেন্ট জমা দিয়েছে — বিকাশ, ১০০০</div>
            <div className="text-xs text-gray-500">2026-07-21</div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-2xl border flex gap-3">
          <div className="text-amber-500 mt-1">⚠️</div>
          <div>
            <div className="font-medium">মিঠু — বকেয়া আছে (২৩,০০০)</div>
            <div className="text-xs text-gray-500">2026-07-21</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;