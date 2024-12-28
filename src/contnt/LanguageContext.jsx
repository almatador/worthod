import React, { createContext, useContext, useState, useEffect } from "react";
import LoadingPage from './../Components/Loading';  // Import the loading page

// إنشاء الـ Context
const LanguageContext = createContext();

// مزود اللغة
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(null); // Start with null for loading
    const [loading, setLoading] = useState(true);  // Loading state

    useEffect(() => {
        // Simulate a delay to represent loading the language context
        const timeout = setTimeout(() => {
            setLanguage("en"); // Set default language to "en" or load from localStorage or other source
            setLoading(false); // Stop loading after setting language
        }, 1000); // Simulated loading delay of 1 second

        return () => clearTimeout(timeout);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
    };

    if (loading) {
        return <LoadingPage />; // Show the loading page while loading
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// استخدام الـ Context
export const useLanguage = () => useContext(LanguageContext);
