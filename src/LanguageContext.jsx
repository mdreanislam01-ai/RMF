import React, { createContext, useState, useContext } from 'react';

// বাংলা ও ইংরেজি ভাষার ডিকশনারি
const translations = {
  bn: {
    appTitle: "মাইক্রোফাইন্যান্স",
    loginMsg: "আপনার অ্যাকাউন্টে লগইন করুন",
    email: "ইমেইল",
    password: "পাসওয়ার্ড",
    loginBtn: "লগইন",
    forgotPass: "পাসওয়ার্ড ভুলে গেছেন?",
    customerPortal: "কাস্টমার পোর্টালে ফিরে যান",
    dashboard: "ড্যাশবোর্ড",
    customers: "কাস্টমার",
    loans: "লোন",
    savings: "সঞ্চয়",
    dailyCollection: "দৈনিক কালেকশন",
    passbook: "পাসবুক",
    reports: "রিপোর্ট",
    settings: "সেটিংস",
    logout: "লগআউট",
    totalCollection: "মোট আদায়",
    installment: "কিস্তি",
    collectionEntry: "কালেকশন এন্ট্রি",
    date: "তারিখ",
    noCollection: "এই তারিখে কোনো কালেকশন নেই"
  },
  en: {
    appTitle: "MicroFinance",
    loginMsg: "Login to your account",
    email: "Email",
    password: "Password",
    loginBtn: "Login",
    forgotPass: "Forgot password?",
    customerPortal: "Return to Customer Portal",
    dashboard: "Dashboard",
    customers: "Customers",
    loans: "Loans",
    savings: "Savings",
    dailyCollection: "Daily Collection",
    passbook: "Passbook",
    reports: "Reports",
    settings: "Settings",
    logout: "Logout",
    totalCollection: "Total Collection",
    installment: "Installment",
    collectionEntry: "Collection Entry",
    date: "Date",
    noCollection: "No collection on this date"
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('bn'); // ডিফল্ট ভাষা বাংলা

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const t = translations[language]; // নির্বাচিত ভাষার ডেটা

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);