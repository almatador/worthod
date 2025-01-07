import React from "react";
import { FaCog, FaUserCircle } from "react-icons/fa";

const NavbarDashboard = () => {
    const adminName = "أدمن النظام"; // يمكن تغييره لجلب الاسم من API

    const handleSettingsClick = () => {
        alert("تم الضغط على زر الإعدادات");
    };

    return (
        <div className="bg-gray-800 p-4 text-white flex justify-between items-center">
            {/* شعار لوحة التحكم */}
            <h1 className="text-xl font-bold">لوحة التحكم</h1>

            {/* معلومات الحساب وزر الإعدادات */}
            <div className="flex items-center space-x-4">
                {/* عرض اسم الأدمن */}
                <div className="flex items-center space-x-2">
                    <FaUserCircle className="w-6 h-6" />
                    <span>{adminName}</span>
                </div>

                {/* زر الإعدادات */}
                <button
                    className="flex items-center space-x-1 bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-md"
                    onClick={handleSettingsClick}
                >
                    <FaCog className="w-5 h-5" />
                    <span>الإعدادات</span>
                </button>
            </div>
        </div>
    );
};

export default NavbarDashboard;
