import React, { useState } from "react";
import projectpng from "./../../public/assets/Images/profile.jpg";

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
    {
        title: "مشروع 2",
        description: "وصف قصير للمشروع 2.",
        price: "$150.00",
        image: projectpng,
        link: "https://link-to-project2.com",
    },
    {
        title: "مشروع 2",
        description: "وصف قصير للمشروع 2.",
        price: "$150.00",
        image: projectpng,
        link: "https://link-to-project2.com",
    },
    {
        title: "مشروع 2",
        description: "وصف قصير للمشروع 2.",
        price: "$150.00",
        image: projectpng,
        link: "https://link-to-project2.com",
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
            [index]: !prev[index], // Toggle like status
        }));
    };

    return (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8  text-white">
            <div className="text-left mb-8">
                <h1 className="text-3xl font-semibold">Our Work</h1>
                <p className="text-sm mt-2">
                    Explore Our Expertly Crafted Projects That Showcase Innovation, Quality, And Results-Driven Digital Solutions Tailored For Business Success
                </p>
            </div>
            <div
                className="scroll-ps-6 snap-x max-w-7xl mx-auto grid grid-flow-col auto-cols-[minmax(300px,1fr)] gap-6 overflow-x-auto overflow-y-hidden"
                dir="ltr"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col rounded-[56px] bg-white text-black shadow-lg p-4 transform hover:scale-105 transition-transform duration-300"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-40 object-cover rounded-md"
                            loading="lazy"
                        />
                        <h2 className="mt-4 text-lg font-semibold">{project.title}</h2>
                        <p className="text-sm text-gray-600">{project.description}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-lg font-bold">{project.price}</span>
                            <button
                                className={`flex items-center justify-center w-9 h-9 rounded-full ${likedProjects[index] ? "bg-yellow-500" : "bg-gray-300"
                                    }`}
                                onClick={() => handleLike(index)}
                                aria-label="Like"
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill={likedProjects[index] ? "white" : "currentColor"}
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
                        <button
                            className="mt-4 h-10 px-6 font-semibold rounded-[56px] bg-purple-700 text-white hover:bg-purple-800 transition"
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            عرض المشروع
                        </button>
                    </div>
                ))}
            </div>

            <div className="text-left mt-10">
                <button className="px-8 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 transition">
                    View More
                </button>
            </div>
        </main>
    );
};

export default Project;
