// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProjectPage = () => {
//   const [projects, setProjects] = useState([]);
//   const [project, setProject] = useState({ name: '', description: '', start_date: '', end_date: '', images: [] });
//   const [isEditing, setIsEditing] = useState(false);
//   const [selectedProjectId, setSelectedProjectId] = useState(null);

//   // دالة لجلب المشاريع
//   const fetchProjects = async () => {
//     try {
//       const response = await axios.get('/api/projects'); // تأكد من المسار الصحيح للـ API
//       setProjects(response.data); // استلام البيانات وتخزينها في الحالة
//     } catch (error) {
//       console.error('Error fetching projects:', error);
//     }
//   };

//   // دالة لإنشاء مشروع جديد
//   const createProject = async () => {
//     const formData = new FormData();
//     formData.append('name', project.name);
//     formData.append('description', project.description);
//     formData.append('start_date', project.start_date);
//     formData.append('end_date', project.end_date);
//     project.images.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       await axios.post('/api/projects', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
//       fetchProjects(); // إعادة تحميل المشاريع بعد الإضافة
//       setProject({ name: '', description: '', start_date: '', end_date: '', images: [] }); // إعادة تعيين الحقول
//     } catch (error) {
//       console.error('Error creating project:', error);
//     }
//   };

//   // دالة لتعديل مشروع
//   const editProject = async () => {
//     const formData = new FormData();
//     formData.append('name', project.name);
//     formData.append('description', project.description);
//     formData.append('start_date', project.start_date);
//     formData.append('end_date', project.end_date);
//     project.images.forEach((image) => {
//       formData.append('images', image);
//     });

//     try {
//       await axios.put(`/api/projects/${selectedProjectId}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
//       fetchProjects();
//       setIsEditing(false); // التبديل من وضع التعديل إلى الوضع الطبيعي
//       setSelectedProjectId(null); // إعادة تعيين معرف المشروع
//       setProject({ name: '', description: '', start_date: '', end_date: '', images: [] });
//     } catch (error) {
//       console.error('Error editing project:', error);
//     }
//   };

//   // دالة لحذف مشروع
//   const deleteProject = async (id) => {
//     try {
//       await axios.delete(`/api/projects/${id}`);
//       fetchProjects();
//     } catch (error) {
//       console.error('Error deleting project:', error);
//     }
//   };

//   // التبديل بين إنشاء المشروع والتعديل
//   const handleEdit = (project) => {
//     setIsEditing(true);
//     setSelectedProjectId(project.id);
//     setProject({
//       name: project.name,
//       description: project.description,
//       start_date: project.start_date,
//       end_date: project.end_date,
//       images: project.images || [],
//     });
//   };

//   useEffect(() => {
//     fetchProjects(); // جلب المشاريع عند تحميل الصفحة
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h1 className="text-3xl font-semibold text-center mb-6">{isEditing ? 'تعديل المشروع' : 'إنشاء مشروع'}</h1>
      
//       {/* نموذج إنشاء أو تعديل المشروع */}
//       <div>
//         <input
//           type="text"
//           value={project.name}
//           onChange={(e) => setProject({ ...project, name: e.target.value })}
//           placeholder="اسم المشروع"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <textarea
//           value={project.description}
//           onChange={(e) => setProject({ ...project, description: e.target.value })}
//           placeholder="وصف المشروع"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <input
//           type="date"
//           value={project.start_date}
//           onChange={(e) => setProject({ ...project, start_date: e.target.value })}
//           placeholder="تاريخ البدء"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <input
//           type="date"
//           value={project.end_date}
//           onChange={(e) => setProject({ ...project, end_date: e.target.value })}
//           placeholder="تاريخ الانتهاء"
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <input
//           type="file"
//           multiple
//           onChange={(e) => setProject({ ...project, images: Array.from(e.target.files) })}
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <button
//           onClick={isEditing ? editProject : createProject}
//           className="w-full py-2 bg-blue-500 text-white rounded mt-4"
//         >
//           {isEditing ? 'تعديل المشروع' : 'إنشاء المشروع'}
//         </button>
//       </div>

//       {/* عرض المشاريع */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-semibold text-center mb-4">المشاريع</h2>
//         <table className="w-full table-auto border-collapse">
//           <thead>
//             <tr>
//               <th className="px-4 py-2 border-b">الاسم</th>
//               <th className="px-4 py-2 border-b">الوصف</th>
//               <th className="px-4 py-2 border-b">تاريخ البدء</th>
//               <th className="px-4 py-2 border-b">تاريخ الانتهاء</th>
//               <th className="px-4 py-2 border-b">الإجراءات</th>
//             </tr>
//           </thead>
//           <tbody>
//             {projects.map((project) => (
//               <tr key={project.id}>
//                 <td className="px-4 py-2 border-b">{project.name}</td>
//                 <td className="px-4 py-2 border-b">{project.description}</td>
//                 <td className="px-4 py-2 border-b">{project.start_date}</td>
//                 <td className="px-4 py-2 border-b">{project.end_date}</td>
//                 <td className="px-4 py-2 border-b">
//                   <button
//                     onClick={() => handleEdit(project)}
//                     className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
//                   >
//                     تعديل
//                   </button>
//                   <button
//                     onClick={() => deleteProject(project.id)}
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

// export default ProjectPage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// بيانات وهمية للمشاريع
const fakeProjects = [
  {
    id: 1,
    name: 'مشروع تطوير الموقع',
    description: 'مشروع لتطوير موقع ويب جديد باستخدام React وNode.js.',
    start_date: '2024-01-01',
    end_date: '2024-12-31',
    images: ['image1.jpg', 'image2.jpg'],
  },
  {
    id: 2,
    name: 'مشروع إدارة البيانات',
    description: 'مشروع لبناء نظام لإدارة البيانات باستخدام MySQL وNode.js.',
    start_date: '2024-03-15',
    end_date: '2025-03-15',
    images: ['image3.jpg', 'image4.jpg'],
  },
  {
    id: 3,
    name: 'مشروع تطوير التطبيق',
    description: 'مشروع لتطوير تطبيق موبايل باستخدام React Native.',
    start_date: '2024-06-01',
    end_date: '2024-11-30',
    images: ['image5.jpg', 'image6.jpg'],
  },
];

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({ name: '', description: '', start_date: '', end_date: '', images: [] });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // محاكاة جلب البيانات من API
  const fetchProjects = () => {
    setProjects(fakeProjects); // هنا نقوم باستخدام البيانات الوهمية مباشرة
  };

  // دالة لإنشاء مشروع جديد
  const createProject = async () => {
    // محاكاة إنشاء المشروع
    const newProject = {
      id: projects.length + 1,
      name: project.name,
      description: project.description,
      start_date: project.start_date,
      end_date: project.end_date,
      images: project.images,
    };
    setProjects([...projects, newProject]);
    setProject({ name: '', description: '', start_date: '', end_date: '', images: [] }); // إعادة تعيين الحقول
  };

  // دالة لتعديل مشروع
  const editProject = async () => {
    const updatedProjects = projects.map((proj) =>
      proj.id === selectedProjectId
        ? { ...proj, name: project.name, description: project.description, start_date: project.start_date, end_date: project.end_date, images: project.images }
        : proj
    );
    setProjects(updatedProjects);
    setIsEditing(false); // التبديل من وضع التعديل إلى الوضع الطبيعي
    setSelectedProjectId(null); // إعادة تعيين معرف المشروع
    setProject({ name: '', description: '', start_date: '', end_date: '', images: [] });
  };

  // دالة لحذف مشروع
  const deleteProject = async (id) => {
    const updatedProjects = projects.filter((proj) => proj.id !== id);
    setProjects(updatedProjects);
  };

  // التبديل بين إنشاء المشروع والتعديل
  const handleEdit = (project) => {
    setIsEditing(true);
    setSelectedProjectId(project.id);
    setProject({
      name: project.name,
      description: project.description,
      start_date: project.start_date,
      end_date: project.end_date,
      images: project.images || [],
    });
  };

  useEffect(() => {
    fetchProjects(); // جلب المشاريع عند تحميل الصفحة
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center mb-6">{isEditing ? 'تعديل المشروع' : 'إنشاء مشروع'}</h1>
      
      {/* نموذج إنشاء أو تعديل المشروع */}
      <div>
        <input
          type="text"
          value={project.name}
          onChange={(e) => setProject({ ...project, name: e.target.value })}
          placeholder="اسم المشروع"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          value={project.description}
          onChange={(e) => setProject({ ...project, description: e.target.value })}
          placeholder="وصف المشروع"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={project.start_date}
          onChange={(e) => setProject({ ...project, start_date: e.target.value })}
          placeholder="تاريخ البدء"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="date"
          value={project.end_date}
          onChange={(e) => setProject({ ...project, end_date: e.target.value })}
          placeholder="تاريخ الانتهاء"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="file"
          multiple
          onChange={(e) => setProject({ ...project, images: Array.from(e.target.files) })}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button
          onClick={isEditing ? editProject : createProject}
          className="w-full py-2 bg-blue-500 text-white rounded mt-4"
        >
          {isEditing ? 'تعديل المشروع' : 'إنشاء المشروع'}
        </button>
      </div>

      {/* عرض المشاريع */}
      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-center mb-4">المشاريع</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">الاسم</th>
              <th className="px-4 py-2 border-b">الوصف</th>
              <th className="px-4 py-2 border-b">تاريخ البدء</th>
              <th className="px-4 py-2 border-b">تاريخ الانتهاء</th>
              <th className="px-4 py-2 border-b">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="px-4 py-2 border-b">{project.name}</td>
                <td className="px-4 py-2 border-b">{project.description}</td>
                <td className="px-4 py-2 border-b">{project.start_date}</td>
                <td className="px-4 py-2 border-b">{project.end_date}</td>
                <td className="px-4 py-2 border-b">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => deleteProject(project.id)}
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

export default ProjectPage;
