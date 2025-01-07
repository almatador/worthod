import axios from 'axios';

const BASE_URL = 'http://localhost:5000/projects'; // ضع الرابط المناسب للـ API الخاص بك

// عرض كل المشاريع
export const getAllProjects = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.projects;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

// عرض مشروع بواسطة ID
export const getProjectById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data.project;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};

// إضافة مشروع جديد مع الصور
export const addProject = async (projectData, images) => {
  try {
    const formData = new FormData();
    formData.append('name', projectData.name);
    formData.append('description', projectData.description);
    formData.append('start_date', projectData.start_date);
    formData.append('end_date', projectData.end_date);
    images.forEach((image) => formData.append('images', image));

    const response = await axios.post(BASE_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.message;
  } catch (error) {
    console.error('Error adding project:', error);
    throw error;
  }
};

// تعديل مشروع بواسطة ID
export const updateProjectById = async (id, projectData, images) => {
  try {
    const formData = new FormData();
    formData.append('name', projectData.name);
    formData.append('description', projectData.description);
    formData.append('start_date', projectData.start_date);
    formData.append('end_date', projectData.end_date);
    images.forEach((image) => formData.append('images', image));

    const response = await axios.put(`${BASE_URL}/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data.message;
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    throw error;
  }
};

// حذف مشروع بواسطة ID
export const deleteProjectById = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data.message;
  } catch (error) {
    console.error(`Error deleting project with ID ${id}:`, error);
    throw error;
  }
};







// import React, { useState } from 'react';
// import { addProject } from './services/projectService';

// const AddProject = () => {
//   const [projectData, setProjectData] = useState({
//     name: '',
//     description: '',
//     start_date: '',
//     end_date: '',
//   });
//   const [images, setImages] = useState([]);

//   const handleChange = (e) => {
//     setProjectData({ ...projectData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImages([...e.target.files]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const message = await addProject(projectData, images);
//       alert(message);
//     } catch (error) {
//       console.error('Error adding project:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="اسم المشروع"
//         value={projectData.name}
//         onChange={handleChange}
//       />
//       <textarea
//         name="description"
//         placeholder="وصف المشروع"
//         value={projectData.description}
//         onChange={handleChange}
//       ></textarea>
//       <input
//         type="date"
//         name="start_date"
//         value={projectData.start_date}
//         onChange={handleChange}
//       />
//       <input
//         type="date"
//         name="end_date"
//         value={projectData.end_date}
//         onChange={handleChange}
//       />
//       <input type="file" multiple onChange={handleImageChange} />
//       <button type="submit">إضافة المشروع</button>
//     </form>
//   );
// };

// export default AddProject;
