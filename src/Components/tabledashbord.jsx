import React from 'react';

const Table = ({ headers, messages }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">عرض الرسائل الجديدة</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-2 text-left text-gray-600">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} className="border-b">
              <td className="px-4 py-2">{message.sender}</td>
              <td className="px-4 py-2">{message.subject}</td>
              <td className="px-4 py-2">{message.date}</td>
              <td className="px-4 py-2">
                <button className="text-blue-500 hover:underline">عرض</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
