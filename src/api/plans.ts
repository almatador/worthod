import axios from 'axios';

const API_URL = 'http://localhost:5000/api/pricing-plans'; // رابط الـ API الأساسي

// عرض جميع الخطط
export const getPricingPlans = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching pricing plans:', error);
        throw error.response?.data || 'Something went wrong';
    }
};

// إنشاء خطة جديدة
export const createPricingPlan = async (planData) => {
    try {
        const response = await axios.post(API_URL, planData);
        return response.data;
    } catch (error) {
        console.error('Error creating pricing plan:', error);
        throw error.response?.data || 'Something went wrong';
    }
};

// تعديل خطة
export const updatePricingPlan = async (id, planData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, planData);
        return response.data;
    } catch (error) {
        console.error('Error updating pricing plan:', error);
        throw error.response?.data || 'Something went wrong';
    }
};

// حذف خطة
export const deletePricingPlan = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting pricing plan:', error);
        throw error.response?.data || 'Something went wrong';
    }
};



// import React, { useState, useEffect } from 'react';
// import {
//     getPricingPlans,
//     createPricingPlan,
//     updatePricingPlan,
//     deletePricingPlan,
// } from './PricingPlanService';

// const PricingPlanManagement = () => {
//     const [pricingPlans, setPricingPlans] = useState([]);
//     const [formData, setFormData] = useState({
//         title: { en: '', ar: '' },
//         price: { en: '', ar: '' },
//         features: { en: [], ar: [] },
//         duration: '',
//     });
//     const [editPlanId, setEditPlanId] = useState(null); // لتحديد الخطة التي سيتم تعديلها

//     // جلب جميع الخطط عند تحميل الصفحة
//     useEffect(() => {
//         fetchPricingPlans();
//     }, []);

//     const fetchPricingPlans = async () => {
//         try {
//             const plans = await getPricingPlans();
//             setPricingPlans(plans);
//         } catch (error) {
//             console.error('Error fetching pricing plans:', error);
//         }
//     };

//     const handleCreateOrUpdate = async () => {
//         try {
//             if (editPlanId) {
//                 // تعديل خطة
//                 await updatePricingPlan(editPlanId, formData);
//                 alert('تم تعديل الخطة بنجاح!');
//             } else {
//                 // إنشاء خطة جديدة
//                 await createPricingPlan(formData);
//                 alert('تم إنشاء الخطة بنجاح!');
//             }
//             fetchPricingPlans(); // تحديث قائمة الخطط
//             resetForm(); // مسح الحقول
//         } catch (error) {
//             alert('خطأ في إنشاء/تعديل الخطة');
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await deletePricingPlan(id);
//             alert('تم حذف الخطة بنجاح!');
//             fetchPricingPlans(); // تحديث قائمة الخطط
//         } catch (error) {
//             alert('خطأ في حذف الخطة');
//         }
//     };

//     const resetForm = () => {
//         setFormData({
//             title: { en: '', ar: '' },
//             price: { en: '', ar: '' },
//             features: { en: [], ar: [] },
//             duration: '',
//         });
//         setEditPlanId(null);
//     };

//     const handleEdit = (plan) => {
//         setFormData(plan);
//         setEditPlanId(plan.id); // تحديد الخطة لتعديلها
//     };

//     return (
//         <div>
//             <h1>إدارة الخطط</h1>

//             {/* إنشاء/تعديل خطة */}
//             <div>
//                 <h2>{editPlanId ? 'تعديل خطة' : 'إنشاء خطة جديدة'}</h2>
//                 <input
//                     type="text"
//                     placeholder="عنوان الخطة (English)"
//                     value={formData.title.en}
//                     onChange={(e) =>
//                         setFormData({
//                             ...formData,
//                             title: { ...formData.title, en: e.target.value },
//                         })
//                     }
//                 />
//                 <input
//                     type="text"
//                     placeholder="عنوان الخطة (عربي)"
//                     value={formData.title.ar}
//                     onChange={(e) =>
//                         setFormData({
//                             ...formData,
//                             title: { ...formData.title, ar: e.target.value },
//                         })
//                     }
//                 />
//                 <input
//                     type="number"
//                     placeholder="السعر (English)"
//                     value={formData.price.en}
//                     onChange={(e) =>
//                         setFormData({
//                             ...formData,
//                             price: { ...formData.price, en: e.target.value },
//                         })
//                     }
//                 />
//                 <input
//                     type="number"
//                     placeholder="السعر (عربي)"
//                     value={formData.price.ar}
//                     onChange={(e) =>
//                         setFormData({
//                             ...formData,
//                             price: { ...formData.price, ar: e.target.value },
//                         })
//                     }
//                 />
//                 <textarea
//                     placeholder="المميزات (English - افصل بين كل ميزة بفاصلة)"
//                     value={formData.features.en.join(', ')}
//                     onChange={(e) =>
//                         setFormData({
//                             ...formData,
//                             features: { ...formData.features, en: e.target.value.split(', ') },
//                         })
//                     }
//                 ></textarea>
//                 <textarea
//                     placeholder="المميزات (عربي - افصل بين كل ميزة بفاصلة)"
//                     value={formData.features.ar.join(', ')}
//                     onChange={(e) =>
//                         setFormData({
//                             ...formData,
//                             features: { ...formData.features, ar: e.target.value.split(', ') },
//                         })
//                     }
//                 ></textarea>
//                 <select
//                     value={formData.duration}
//                     onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//                 >
//                     <option value="">اختر مدة الخطة</option>
//                     <option value="monthly">شهرية</option>
//                     <option value="yearly">سنوية</option>
//                 </select>
//                 <button onClick={handleCreateOrUpdate}>
//                     {editPlanId ? 'تعديل الخطة' : 'إنشاء الخطة'}
//                 </button>
//                 {editPlanId && <button onClick={resetForm}>إلغاء التعديل</button>}
//             </div>

//             {/* عرض جميع الخطط */}
//             <div>
//                 <h2>جميع الخطط</h2>
//                 <ul>
//                     {pricingPlans.map((plan) => (
//                         <li key={plan.id}>
//                             <strong>عنوان (English):</strong> {plan.title.en} <br />
//                             <strong>عنوان (عربي):</strong> {plan.title.ar} <br />
//                             <strong>السعر (English):</strong> {plan.price.en} <br />
//                             <strong>السعر (عربي):</strong> {plan.price.ar} <br />
//                             <strong>المميزات (English):</strong> {plan.features.en} <br />
//                             <strong>المميزات (عربي):</strong> {plan.features.ar} <br />
//                             <strong>المدة:</strong> {plan.duration} <br />
//                             <button onClick={() => handleEdit(plan)}>تعديل</button>
//                             <button onClick={() => handleDelete(plan.id)}>حذف</button>
//                             <hr />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default PricingPlanManagement;
