import React, { useState } from 'react';
import projectpng from './../../public/assets/Images/profile.jpg';

const projects = [
    {
        title: "مشروع 1",
        description: "وصف قصير للمشروع 1.",
        price: "$110.00",
        image: projectpng,
        link: "https://link-to-project1.com",
    },
    {
        title: "مشروع 2",
        description: "وصف قصير للمشروع 2.",
        price: "$150.00",
        image: projectpng,
        link: "https://link-to-project2.com",
    },
    // أضف المزيد من المشاريع هنا
];

const Project = () => {
    // State to track liked projects
    const [likedProjects, setLikedProjects] = useState({});

    const handleLike = (index) => {
        setLikedProjects((prev) => ({
            ...prev,
            [index]: !prev[index] // Toggle like status
        }));
    };

    return (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <div key={index} className="relative flex flex-col rounded-lg bg-white shadow-md p-3">
                        <h1 className="mt-1 text-lg font-semibold text-slate-900">{project.title}</h1>
                        <p className="text-sm leading-4 font-medium text-slate-500">{project.description}</p>
                        <div className="grid gap-4">
                            <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded-lg" loading="lazy" />
                        </div>
                        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
                            <div className="text-lg font-semibold text-slate-500">{project.price}</div>
                            <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">In stock</div>
                        </div>
                        <div className="flex space-x-4 mb-6 text-sm font-medium">
                            <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="button" onClick={() => window.open(project.link, "_blank")}>
                                عرض المشروع
                            </button>
                            <button
                                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                                type="button"
                                aria-label="Like"
                                onClick={() => handleLike(index)} // Call handleLike on click
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill={likedProjects[index] ? "yellow" : "currentColor"} // Change color based on like status
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Project;
