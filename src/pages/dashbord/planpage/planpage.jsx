// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const PlansPage = () => {
//   const [plans, setPlans] = useState([]);
//   const [plan, setPlan] = useState({
//     name: '',
//     type: 'monthly', // تحديد نوع الخطة (شهرية أو سنوية)
//     price: '',
//     duration: '', // يمكن تحديد فترة الخطة (عدد الأشهر أو السنوات)
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedPlanId, setSelectedPlanId] = useState(null);

//   // دالة لجلب الخطط
//   const fetchPlans = async () => {
//     try {
//       const response = await axios.get('/api/plans'); // تأكد من المسار الصحيح للـ API
//       setPlans(response.data); // استلام البيانات وتخزينها في الحالة
//     } catch (error) {
//       console.error('Error fetching plans:', error);
//     }
//   };

//   // دالة لإنشاء خطة جديدة
//   const createPlan = async () => {
//     try {
//       await axios.post('/api/plans', plan);
//       fetchPlans(); // إعادة تحميل الخطط بعد الإضافة
//       setPlan({ name: '', type: 'monthly', price: '', duration: '' }); // إعادة تعيين الحقول
//     } catch (error) {
//       console.error('Error creating plan:', error);
//     }
//   };

//   // دالة لتعديل خطة
//   const editPlan = async () => {
//     try {
//       await axios.put(`/api/plans/${selectedPlanId}`, plan);
//       fetchPlans();
//       setIsEditing(false); // التبديل من وضع التعديل إلى الوضع الطبيعي
//       setSelectedPlanId(null); // إعادة تعيين معرف الخطة
//       setPlan({ name: '', type: 'monthly', price: '', duration: '' });
//     } catch (error) {
//       console.error('Error editing plan:', error);
//     }
//   };

//   // دالة لحذف خطة
//   const deletePlan = async (id) => {
//     try {
//       await axios.delete(`/api/plans/${id}`);
//       fetchPlans();
//     } catch (error) {
//       console.error('Error deleting plan:', error);
//     }
//   };

//   // التبديل بين إنشاء الخطة والتعديل
//   const handleEdit = (plan) => {
//     setIsEditing(true);
//     setSelectedPlanId(plan.id);
//     setPlan({
//       name: plan.name,
//       type: plan.type,
//       price: plan.price,
//       duration: plan.duration,
//     });
//   };

//   useEffect(() => {
//     fetchPlans(); // جلب الخطط عند تحميل الصفحة
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-semibold text-center mb-6">{isEditing ? 'تعديل الخطة' : 'إنشاء خطة'}</h1>
      
//       {/* نموذج إنشاء أو تعديل الخطة */}
//       <div>
//         <input
//           type="text"
//           value={plan.name}
//           onChange={(e) => setPlan({ ...plan, name: e.target.value })}
//           placeholder="اسم الخطة"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <select
//           value={plan.type}
//           onChange={(e) => setPlan({ ...plan, type: e.target.value })}
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         >
//           <option value="monthly">شهرية</option>
//           <option value="yearly">سنوية</option>
//         </select>
//         <input
//           type="number"
//           value={plan.price}
//           onChange={(e) => setPlan({ ...plan, price: e.target.value })}
//           placeholder="السعر"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <input
//           type="number"
//           value={plan.duration}
//           onChange={(e) => setPlan({ ...plan, duration: e.target.value })}
//           placeholder="الفترة (عدد الأشهر أو السنوات)"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <button
//           onClick={isEditing ? editPlan : createPlan}
//           className="w-full py-2 bg-blue-500 text-white rounded mt-4"
//         >
//           {isEditing ? 'تعديل الخطة' : 'إنشاء الخطة'}
//         </button>
//       </div>

//       {/* عرض الخطط */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-center mb-4">الخطط</h2>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">الاسم</th>
//               <th className="px-4 py-2 border-b">النوع</th>
//               <th className="px-4 py-2 border-b">السعر</th>
//               <th className="px-4 py-2 border-b">الفترة</th>
//               <th className="px-4 py-2 border-b">الإجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {plans.map((plan) => (
//               <tr key={plan.id}>
//                 <td className="px-4 py-2 border-b">{plan.name}</td>
//                 <td className="px-4 py-2 border-b">{plan.type === 'monthly' ? 'شهرية' : 'سنوية'}</td>
//                 <td className="px-4 py-2 border-b">{plan.price} ج</td>
//                 <td className="px-4 py-2 border-b">{plan.duration}</td>
//                 <td className="px-4 py-2 border-b">
//                   <button
//                     onClick={() => handleEdit(plan)}
//                     className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
//                   >
//                     تعديل
//                   </button>
//                   <button
//                     onClick={() => deletePlan(plan.id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded"
//                   >
//                     حذف
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PlansPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlansPage = () => {
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState({
    name: '',
    type: 'monthly', // تحديد نوع الخطة (شهرية أو سنوية)
    price: '',
    duration: '', // يمكن تحديد فترة الخطة (عدد الأشهر أو السنوات)
  });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState(null);

  // دالة لجلب الخطط (داتا فيك)
  const fetchPlans = async () => {
    // بيانات وهمية (Fake Data)
    const fakePlans = [
      { id: 1, name: 'خطة شهرية 1', type: 'monthly', price: 100, duration: 1 },
      { id: 2, name: 'خطة سنوية 1', type: 'yearly', price: 1000, duration: 12 },
      { id: 3, name: 'خطة شهرية 2', type: 'monthly', price: 150, duration: 1 },
      { id: 4, name: 'خطة سنوية 2', type: 'yearly', price: 1200, duration: 12 },
    ];
    setPlans(fakePlans); // استعراض البيانات الوهمية
  };

  // دالة لإنشاء خطة جديدة
  const createPlan = async () => {
    try {
      await axios.post('/api/plans', plan); // تأكد من المسار الصحيح للـ API
      fetchPlans(); // إعادة تحميل الخطط بعد الإضافة
      setPlan({ name: '', type: 'monthly', price: '', duration: '' }); // إعادة تعيين الحقول
    } catch (error) {
      console.error('Error creating plan:', error);
    }
  };

  // دالة لتعديل خطة
  const editPlan = async () => {
    try {
      await axios.put(`/api/plans/${selectedPlanId}`, plan);
      fetchPlans();
      setIsEditing(false); // التبديل من وضع التعديل إلى الوضع الطبيعي
      setSelectedPlanId(null); // إعادة تعيين معرف الخطة
      setPlan({ name: '', type: 'monthly', price: '', duration: '' });
    } catch (error) {
      console.error('Error editing plan:', error);
    }
  };

  // دالة لحذف خطة
  const deletePlan = async (id) => {
    try {
      await axios.delete(`/api/plans/${id}`);
      fetchPlans();
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
  };

  // التبديل بين إنشاء الخطة والتعديل
  const handleEdit = (plan) => {
    setIsEditing(true);
    setSelectedPlanId(plan.id);
    setPlan({
      name: plan.name,
      type: plan.type,
      price: plan.price,
      duration: plan.duration,
    });
  };

  useEffect(() => {
    fetchPlans(); // جلب الخطط عند تحميل الصفحة
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">{isEditing ? 'تعديل الخطة' : 'إنشاء خطة'}</h1>
      
      {/* نموذج إنشاء أو تعديل الخطة */}
      <div>
        <input
          type="text"
          value={plan.name}
          onChange={(e) => setPlan({ ...plan, name: e.target.value })}
          placeholder="اسم الخطة"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <select
          value={plan.type}
          onChange={(e) => setPlan({ ...plan, type: e.target.value })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        >
          <option value="monthly">شهرية</option>
          <option value="yearly">سنوية</option>
        </select>
        <input
          type="number"
          value={plan.price}
          onChange={(e) => setPlan({ ...plan, price: e.target.value })}
          placeholder="السعر"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="number"
          value={plan.duration}
          onChange={(e) => setPlan({ ...plan, duration: e.target.value })}
          placeholder="الفترة (عدد الأشهر أو السنوات)"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={isEditing ? editPlan : createPlan}
          className="w-full py-2 bg-blue-500 text-white rounded mt-4"
        >
          {isEditing ? 'تعديل الخطة' : 'إنشاء الخطة'}
        </button>
      </div>

      {/* عرض الخطط */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">الخطط</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">الاسم</th>
              <th className="px-4 py-2 border-b">النوع</th>
              <th className="px-4 py-2 border-b">السعر</th>
              <th className="px-4 py-2 border-b">الفترة</th>
              <th className="px-4 py-2 border-b">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan.id}>
                <td className="px-4 py-2 border-b">{plan.name}</td>
                <td className="px-4 py-2 border-b">{plan.type === 'monthly' ? 'شهرية' : 'سنوية'}</td>
                <td className="px-4 py-2 border-b">{plan.price} ج</td>
                <td className="px-4 py-2 border-b">{plan.duration}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleEdit(plan)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => deletePlan(plan.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlansPage;
