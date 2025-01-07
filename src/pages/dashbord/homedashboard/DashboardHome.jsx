import React from "react";
import Table from "./../../../Components/tabledashbord";

const DashboardHome = () => {
  // بيانات الرسائل الوهمية
  const messages = [
    { id: 1, sender: "أحمد", subject: "استفسار عن المشروع", date: "2025-01-07" },
    { id: 2, sender: "مريم", subject: "مشكلة في الحساب", date: "2025-01-06" },
    { id: 3, sender: "سامي", subject: "طلب دعم فني", date: "2025-01-05" },
    { id: 4, sender: "فاطمة", subject: "إعادة تعيين كلمة المرور", date: "2025-01-04" },
  ];

  return (
    <div className="p-6 min-h-screen">
      {/* قسم الإحصائيات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* المشاريع */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">المشاريع</h2>
          <p className="text-3xl font-bold text-blue-600">45</p>
          <p className="text-gray-500">إجمالي المشاريع المسجلة</p>
        </div>

        {/* المستخدمين */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">المستخدمين</h2>
          <p className="text-3xl font-bold text-green-600">120</p>
          <p className="text-gray-500">إجمالي المستخدمين المسجلين</p>
        </div>

        {/* الخطط */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">الخطط</h2>
          <p className="text-3xl font-bold text-purple-600">15</p>
          <p className="text-gray-500">عدد الخطط المتاحة</p>
        </div>

        {/* الرسائل */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold text-gray-800">الرسائل</h2>
          <p className="text-3xl font-bold text-red-600">30</p>
          <p className="text-gray-500">رسائل جديدة من الزوار</p>
        </div>
      </div>

      {/* جدول عرض الرسائل */}
      <Table
        headers={['المرسل', 'الموضوع', 'التاريخ', 'الإجراءات']}
        messages={[
          { id: 1, sender: 'أحمد', subject: 'استفسار', date: '2025-01-07' },
          { id: 2, sender: 'سارة', subject: 'طلب دعم', date: '2025-01-06' },
        ]}
      />

    </div>
  );
};

export default DashboardHome;
