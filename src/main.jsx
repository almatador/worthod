import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { LanguageProvider } from './contnt/LanguageContext'; // استيراد LanguageProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider> {/* تغليف التطبيق بـ LanguageProvider */}
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>,
);
