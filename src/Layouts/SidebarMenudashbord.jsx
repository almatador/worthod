import React from 'react';
import { FaHome, FaUser, FaChartBar, FaCog, FaProjectDiagram, FaClipboardList, FaEnvelope } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';  // استيراد useNavigate بدلاً من useHistory

const menuItems = [
    { name: 'الرئيسية', icon: <FaHome className="w-6 h-6" />, link: "/dashboard" },
    { name: 'الإحصائيات', icon: <FaChartBar className="w-6 h-6" />, link: "/dashboard/" },
    { name: 'الإعدادات', icon: <FaCog className="w-6 h-6" />, link: "/dashboard/settings" },
    { name: 'إدارة المشاريع', icon: <FaProjectDiagram className="w-6 h-6" />, link: "/dashboard/projectdashboard" },
    { name: 'إدارة الخطط', icon: <FaClipboardList className="w-6 h-6" />, link: "/dashboard/plandashboard" },
    { name: 'إدارة المستخدمين', icon: <FaUser className="w-6 h-6" />, link: "/dashboard/users" },
    { name: 'عرض الرسائل', icon: <FaEnvelope className="w-6 h-6" />, link: "/dashboard/messages" },
];

const SidebarDashboard = () => {
    const navigate = useNavigate();  // استخدام useNavigate

    const onMenuItemClick = (link) => {
        navigate(link);  // توجيه المستخدم إلى الرابط عند النقر
    };

    return (
        <div className="bg-gray-800 text-white w-64 p-4">
            <h2 className="text-2xl font-bold mb-6">لوحة التحكم</h2>
            <ul className="space-y-4">
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-700 cursor-pointer"
                        onClick={() => onMenuItemClick(item.link)} // استدعاء onMenuItemClick مع الرابط
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-lg">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarDashboard;
