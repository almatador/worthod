import React, { useState } from 'react';
import axios from 'axios';

const UserTrackingPage = () => {
  const [macAddress, setMacAddress] = useState('');
  const [deviceMoves, setDeviceMoves] = useState([]);
  const [error, setError] = useState(null);

  // دالة لجلب التنقلات بناءً على MAC Address
  const fetchDeviceMoves = async () => {
    try {
      const response = await axios.get(`/api/device-moves?mac=${macAddress}`);
      setDeviceMoves(response.data);
      setError(null); // إعادة تعيين الأخطاء إذا تم العثور على التنقلات
    } catch (err) {
      setError('فشل في جلب التنقلات أو MAC Address غير صحيح');
      setDeviceMoves([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">تتبع الجهاز</h1>
      
      {/* نموذج إدخال MAC Address */}
      <div className="mb-6">
        <input
          type="text"
          value={macAddress}
          onChange={(e) => setMacAddress(e.target.value)}
          placeholder="أدخل MAC Address"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={fetchDeviceMoves}
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          عرض التنقلات
        </button>
      </div>

      {/* عرض التنقلات أو رسالة الخطأ */}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}
      {deviceMoves.length > 0 && (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b">التاريخ والوقت</th>
                <th className="px-4 py-2 border-b">الموقع</th>
                <th className="px-4 py-2 border-b">المنطقة</th>
              </tr>
            </thead>
            <tbody>
              {deviceMoves.map((move, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{move.timestamp}</td>
                  <td className="px-4 py-2 border-b">{move.location}</td>
                  <td className="px-4 py-2 border-b">{move.zone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTrackingPage;
