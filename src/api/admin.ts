import axios from 'axios';

const API_URL = 'http://localhost:5000/api/admins'; // URL الخاص بالـ API

// تسجيل Admin جديد
export const registerAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, adminData);
        return response.data; // استرجاع البيانات من السيرفر
    } catch (error) {
        console.error('Error registering admin:', error);
        throw error.response?.data || 'Something went wrong';
    }
};

// تسجيل الدخول
export const loginAdmin = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        // حفظ الـ Token في Local Storage
        localStorage.setItem('adminToken', response.data.token);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error.response?.data || 'Something went wrong';
    }
};

// تسجيل الخروج
export const logoutAdmin = () => {
    // حذف الـ Token من Local Storage
    localStorage.removeItem('adminToken');
};

// عرض جميع الـ Admins
export const getAllAdmins = async () => {
    try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.get(`${API_URL}/all`, {
            headers: {
                Authorization: `Bearer ${token}`, // إرسال التوكين في الهيدر
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching admins:', error);
        throw error.response?.data || 'Something went wrong';
    }
};




// import React, { useState, useEffect } from 'react';
// import { registerAdmin, loginAdmin, logoutAdmin, getAllAdmins } from './AdminService';

// const AdminManagement = () => {
//     const [admins, setAdmins] = useState([]);
//     const [formData, setFormData] = useState({
//         name: '',
//         username: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//     });
//     const [loginData, setLoginData] = useState({
//         username: '',
//         password: '',
//     });

//     // استرجاع جميع الـ Admins عند تحميل الصفحة
//     useEffect(() => {
//         fetchAdmins();
//     }, []);

//     const fetchAdmins = async () => {
//         try {
//             const adminList = await getAllAdmins();
//             setAdmins(adminList);
//         } catch (error) {
//             console.error('Error fetching admins:', error);
//         }
//     };

//     const handleRegister = async () => {
//         try {
//             const result = await registerAdmin(formData);
//             alert(result.message || 'Admin registered successfully!');
//             fetchAdmins(); // تحديث قائمة الـ Admins
//         } catch (error) {
//             alert(error.message || 'Error registering admin');
//         }
//     };

//     const handleLogin = async () => {
//         try {
//             const result = await loginAdmin(loginData);
//             alert(result.message || 'Logged in successfully!');
//             fetchAdmins(); // تحديث القائمة بعد تسجيل الدخول
//         } catch (error) {
//             alert(error.message || 'Error logging in');
//         }
//     };

//     const handleLogout = () => {
//         logoutAdmin();
//         alert('Logged out successfully!');
//     };

//     return (
//         <div>
//             <h1>إدارة المسؤولين (Admins)</h1>

//             {/* تسجيل Admin جديد */}
//             <div>
//                 <h2>تسجيل Admin جديد</h2>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={formData.username}
//                     onChange={(e) => setFormData({ ...formData, username: e.target.value })}
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Phone Number"
//                     value={formData.phoneNumber}
//                     onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                 />
//                 <button onClick={handleRegister}>تسجيل Admin جديد</button>
//             </div>

//             {/* تسجيل الدخول */}
//             <div>
//                 <h2>تسجيل دخول</h2>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={loginData.username}
//                     onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={loginData.password}
//                     onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                 />
//                 <button onClick={handleLogin}>تسجيل الدخول</button>
//             </div>

//             {/* تسجيل الخروج */}
//             <div>
//                 <h2>تسجيل خروج</h2>
//                 <button onClick={handleLogout}>تسجيل الخروج</button>
//             </div>

//             {/* عرض جميع المسؤولين */}
//             <div>
//                 <h2>جميع المسؤولين (Admins)</h2>
//                 <ul>
//                     {admins.map((admin) => (
//                         <li key={admin.id}>
//                             {admin.name} - {admin.username} - {admin.email} - {admin.phoneNumber}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default AdminManagement;
