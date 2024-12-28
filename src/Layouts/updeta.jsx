import React from "react";
import websites from "./../../public/assets/Images/websites.png";
import marketing from "./../../public/assets/Images/marketing.png";
import improve from "./../../public/assets/Images/improve.png";
import ViewServices from './../Components/viweservies'; // استدعاء المكون

const projects = [
  {
    icon: websites,
    text: `The importance of developing
    applications and websites for
    Gulf companies in the digital age`,
  },
  {
    icon: marketing,
    text: `The best marketing strategies
    through social media for Gulf
    companies`,
  },
  {
    icon: improve,
    text: `How to improve user experience
    in the Gulf market: strategies
    and tools`,
  },
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
          Discover Our Latest Projects And Innovative Digital Services Designed
          To Drive Your Success. Stay Informed With Our Most Recent
          Developments.
        </p>
      </div>

      {/* مربعات المشاريع */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-[56px] shadow-lg flex flex-col items-center">
            <ViewServices icon={project.icon} text={project.text} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Update;
