import React from "react";

const projects = [
    { title: "مشروع 1", description: "وصف قصير للمشروع 1." },
    { title: "مشروع 2", description: "وصف قصير للمشروع 2." },
    { title: "مشروع 3", description: "وصف قصير للمشروع 3." },
    { title: "مشروع 4", description: "وصف قصير للمشروع 4." },
    { title: "مشروع 3", description: "وصف قصير للمشروع 3." },
    { title: "مشروع 4", description: "وصف قصير للمشروع 4." },
    { title: "مشروع 3", description: "وصف قصير للمشروع 3." },
    { title: "مشروع 4", description: "وصف قصير للمشروع 4." },
    { title: "مشروع 3", description: "وصف قصير للمشروع 3." },
    { title: "مشروع 4", description: "وصف قصير للمشروع 4." },
    // أضف المزيد من المشاريع هنا إذا لزم الأمر
];

const Update = () => {
    return (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 text-white">
            {/* العنوان والوصف */}
            <div className="text-left mb-8">
                <h1 className="text-3xl font-semibold">
                    Stay Updated With Our Latest Tech News And Updates
                </h1>
                <p className="text-sm mt-2">
                    Discover Our Latest Projects And Innovative Digital Services Designed To Drive Your Success. Stay Informed With Our Most Recent Developments.
                </p>
            </div>

            {/* مربعات المشاريع */}
            <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
                dir="ltr"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center h-40 rounded-[56px] bg-white text-black shadow-lg transform hover:scale-105 transition-transform duration-300"
                    >
                        {/* يمكنك إضافة محتوى داخل الصندوق إذا أردت */}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Update;
