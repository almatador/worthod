// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const MessageList = () => {
//   const [messages, setMessages] = useState([]);

//   // دالة لجلب الرسائل من الخادم
//   const fetchMessages = async () => {
//     try {
//       const response = await axios.get('/api/messages'); // تأكد من المسار الصحيح للـ API الخاص بك
//       console.log(response.data); // طباعة البيانات للتحقق منها
//       // تأكد من أن البيانات التي تم استلامها هي مصفوفة
//       if (Array.isArray(response.data)) {
//         setMessages(response.data); // استلام البيانات وتخزينها في الحالة
//       } else {
//         console.error('Received data is not an array:', response.data);
//       }
//     } catch (error) {
//       console.error('Error fetching messages:', error);
//     }
//   };

//   useEffect(() => {
//     fetchMessages(); // استدعاء دالة جلب الرسائل عند تحميل الصفحة
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-semibold text-center mb-6">الرسائل الواردة</h1>
      
//       {/* التحقق من وجود رسائل */}
//       {messages.length === 0 ? (
//         <p className="text-center text-gray-500">لا توجد رسائل حالياً.</p>
//       ) : (
//         <div>
//           <table className="w-full table-auto">
//             <thead>
//               <tr>
//                 <th className="px-4 py-2 text-left">الاسم</th>
//                 <th className="px-4 py-2 text-left">البريد الإلكتروني</th>
//                 <th className="px-4 py-2 text-left">رقم الهاتف</th>
//                 <th className="px-4 py-2 text-left">الرسالة</th>
//               </tr>
//             </thead>
//             <tbody>
//               {messages.map((message) => (
//                 <tr key={message.id} className="border-b">
//                   <td className="px-4 py-2">{message.customer_name}</td>
//                   <td className="px-4 py-2">{message.email}</td>
//                   <td className="px-4 py-2">{message.phoneNumber}</td>
//                   <td className="px-4 py-2">{message.message}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessageList;

import React, { useState, useEffect } from 'react';

const MessageList = () => {
  const [messages, setMessages] = useState([]);

  // دالة لجلب الرسائل (البيانات الوهمية)
  const fetchMessages = () => {
    // بيانات وهمية للرسائل
    const fakeMessages = [
      {
        id: 1,
        customer_name: 'أحمد محمد',
        email: 'ahmed@example.com',
        phoneNumber: '0123456789',
        message: 'أريد استفسار عن المنتج.'
      },
      {
        id: 2,
        customer_name: 'سارة علي',
        email: 'sara@example.com',
        phoneNumber: '0987654321',
        message: 'هل هناك تخفيضات في الأسعار؟'
      },
      {
        id: 3,
        customer_name: 'علي يوسف',
        email: 'ali@example.com',
        phoneNumber: '0112233445',
        message: 'أحتاج إلى مساعدة في الدفع.'
      }
    ];

    // تعيين الرسائل الوهمية في الحالة
    setMessages(fakeMessages);
  };

  useEffect(() => {
    fetchMessages(); // استدعاء دالة جلب الرسائل عند تحميل الصفحة
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">الرسائل الواردة</h1>
      
      {/* التحقق من وجود رسائل */}
      {messages.length === 0 ? (
        <p className="text-center text-gray-500">لا توجد رسائل حالياً.</p>
      ) : (
        <div>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">الاسم</th>
                <th className="px-4 py-2 text-left">البريد الإلكتروني</th>
                <th className="px-4 py-2 text-left">رقم الهاتف</th>
                <th className="px-4 py-2 text-left">الرسالة</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id} className="border-b">
                  <td className="px-4 py-2">{message.customer_name}</td>
                  <td className="px-4 py-2">{message.email}</td>
                  <td className="px-4 py-2">{message.phoneNumber}</td>
                  <td className="px-4 py-2">{message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MessageList;
