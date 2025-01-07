import axios from 'axios';

const API_URL = 'http://localhost:5000/api/messages'; // رابط الـ API الأساسي

// إرسال رسالة جديدة
export const sendMessage = async (messageData) => {
    try {
        const response = await axios.post(`${API_URL}/send`, messageData);
        return response.data; // استرجاع الرد من السيرفر
    } catch (error) {
        console.error('Error sending message:', error);
        throw error.response?.data || 'Something went wrong';
    }
};

// استرجاع جميع الرسائل
export const getMessages = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data; // استرجاع قائمة الرسائل
    } catch (error) {
        console.error('Error fetching messages:', error);
        throw error.response?.data || 'Something went wrong';
    }
};



// import React, { useState, useEffect } from 'react';
// import { sendMessage, getMessages } from './MessageService';

// const MessageManagement = () => {
//     const [messages, setMessages] = useState([]);
//     const [formData, setFormData] = useState({
//         customer_name: '',
//         email: '',
//         message: '',
//     });

//     // استرجاع الرسائل عند تحميل الصفحة
//     useEffect(() => {
//         fetchMessages();
//     }, []);

//     const fetchMessages = async () => {
//         try {
//             const messageList = await getMessages();
//             setMessages(messageList);
//         } catch (error) {
//             console.error('Error fetching messages:', error);
//         }
//     };

//     const handleSendMessage = async () => {
//         try {
//             const result = await sendMessage(formData);
//             alert(result.message || 'Message sent successfully!');
//             fetchMessages(); // تحديث قائمة الرسائل
//             setFormData({ customer_name: '', email: '', message: '' }); // مسح الحقول بعد الإرسال
//         } catch (error) {
//             alert(error.message || 'Error sending message');
//         }
//     };

//     return (
//         <div>
//             <h1>إدارة الرسائل</h1>

//             {/* إرسال رسالة جديدة */}
//             <div>
//                 <h2>إرسال رسالة جديدة</h2>
//                 <input
//                     type="text"
//                     placeholder="اسم العميل"
//                     value={formData.customer_name}
//                     onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
//                 />
//                 <input
//                     type="email"
//                     placeholder="البريد الإلكتروني"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 />
//                 <textarea
//                     placeholder="الرسالة"
//                     value={formData.message}
//                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 ></textarea>
//                 <button onClick={handleSendMessage}>إرسال الرسالة</button>
//             </div>

//             {/* عرض جميع الرسائل */}
//             <div>
//                 <h2>جميع الرسائل</h2>
//                 <ul>
//                     {messages.map((msg) => (
//                         <li key={msg.id}>
//                             <strong>الاسم:</strong> {msg.customer_name} <br />
//                             <strong>البريد الإلكتروني:</strong> {msg.email} <br />
//                             <strong>الرسالة:</strong> {msg.message} <br />
//                             <hr />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default MessageManagement;
