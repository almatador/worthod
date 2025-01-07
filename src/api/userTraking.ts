import axios from 'axios';

const BASE_URL = 'http://localhost:5000/mac-addresses'; // استبدل بعنوان السيرفر

// حفظ MAC Address
export const saveMacAddress = async (macAddress) => {
    try {
        const response = await axios.post(`${BASE_URL}/save-mac`, { mac_address: macAddress });
        return response.data.message;
    } catch (error) {
        console.error('Error saving MAC Address:', error);
        throw error;
    }
};

// جلب جميع عناوين MAC
export const getMacAddresses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/get-macs`);
        return response.data.mac_addresses;
    } catch (error) {
        console.error('Error fetching MAC Addresses:', error);
        throw error;
    }
};


// import axios from 'axios';

// دالة التتبع
const trackActivity = async (activityType: string) => {
  try {
    // بيانات المستخدم (يمكنك الحصول عليها من التخزين المحلي أو الـ Context)
    const userId = localStorage.getItem('userId') || 'guest';
    const timestamp = new Date().toISOString();

    // إرسال البيانات إلى الـ API
    await axios.post('http://localhost:5000/api/track-activity', {
      activityType,
      timestamp,
    });

    console.log(`Tracked activity: ${activityType}`);
  } catch (error) {
    console.error('Error tracking activity:', error);
  }
};
// import React, { useEffect, useState } from 'react';
// import { getMacAddresses } from './services/macService';

// const MacAddressesList = () => {
//     const [macAddresses, setMacAddresses] = useState([]);

//     useEffect(() => {
//         const fetchMacAddresses = async () => {
//             try {
//                 const data = await getMacAddresses();
//                 setMacAddresses(data);
//             } catch (error) {
//                 console.error('Error fetching MAC Addresses:', error);
//             }
//         };

//         fetchMacAddresses();
//     }, []);

//     return (
//         <div>
//             <h1>قائمة MAC Addresses</h1>
//             <ul>
//                 {macAddresses.map((mac, index) => (
//                     <li key={index}>
//                         <strong>MAC Address:</strong> {mac.mac_address} <br />
//                         <strong>Time:</strong> {new Date(mac.created_at).toLocaleString()}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default MacAddressesList;
// import React, { useState } from 'react';
// import { saveMacAddress } from './services/macService';

// const AddMacAddress = () => {
//     const [macAddress, setMacAddress] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const responseMessage = await saveMacAddress(macAddress);
//             setMessage(responseMessage);
//             setMacAddress(''); // إعادة تعيين الحقل
//         } catch (error) {
//             setMessage('حدث خطأ أثناء الحفظ.');
//         }
//     };

//     return (
//         <div>
//             <h1>إضافة MAC Address</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="أدخل MAC Address"
//                     value={macAddress}
//                     onChange={(e) => setMacAddress(e.target.value)}
//                 />
//                 <button type="submit">حفظ</button>
//             </form>
//             {message && <p>{message}</p>}
//         </div>
//     );
// };

// export default AddMacAddress;


// const App = () => {
//   const handleScroll = () => {
//     trackActivity('scrolled_page');
//   };

//   return (
//     <div onScroll={handleScroll} style={{ height: '2000px' }}>
//       <h1>مرحباً بكم في صفحتي!</h1>
//     </div>
//   );
// };

// export default App;


