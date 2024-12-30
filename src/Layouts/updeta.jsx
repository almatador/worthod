import React from "react";
import { useNavigate } from "react-router-dom"; // استدعاء useNavigate
import websites from "./../../public/assets/Images/websites.png";
import marketing from "./../../public/assets/Images/marketing.png";
import improve from "./../../public/assets/Images/improve.png";
import ViewServices from "./../Components/viweservies"; // استدعاء المكون

// Define projects with multi-language support (English/Arabic)
const projects = [
  {
    icon: websites,
    text: {
      en: "The importance of developing applications and websites for Gulf companies in the digital age",
      ar: "أهمية تطوير التطبيقات والمواقع الإلكترونية للشركات الخليجية في العصر الرقمي",
    },
    path: "/websites", // مسار الصفحة
  },
  {
    icon: marketing,
    text: {
      en: "The best marketing strategies through social media for Gulf companies",
      ar: "أفضل استراتيجيات التسويق عبر وسائل التواصل الاجتماعي للشركات الخليجية",
    },
    path: "/marketing", // مسار الصفحة
  },
  {
    icon: improve,
    text: {
      en: "How to improve user experience in the Gulf market: strategies and tools",
      ar: "كيف تحسن تجربة المستخدم في السوق الخليجية: استراتيجيات وأدوات",
    },
    path: "/improve", // مسار الصفحة
  },
];

const Update = ({ language = "en" }) => {
  const navigate = useNavigate(); // للحصول على وظيفة التوجيه

  return (
    <main
      className={`py-6 px-4 sm:p-6 md:py-10 md:px-8 text-white ${
        language === "ar" ? "text-right" : "text-left"
      }`}
    >
      {/* العنوان والوصف */}
      <div className="text-left mb-8">
        <h1 className="text-3xl font-semibold">
          {language === "ar"
            ? "ابق على اطلاع بأحدث أخبار وتقنياتنا"
            : "Stay Updated With Our Latest Tech News And Updates"}
        </h1>
        <p className="text-sm mt-2">
          {language === "ar"
            ? "اكتشف أحدث مشاريعنا والخدمات الرقمية المبتكرة المصممة لدفع نجاحك. ابق على اطلاع بأحدث التطورات لدينا."
            : "Discover Our Latest Projects And Innovative Digital Services Designed To Drive Your Success. Stay Informed With Our Most Recent Developments."}
        </p>
      </div>

      {/* مربعات المشاريع */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {projects.map((project, index) => (
          <button
            key={index}
            className="bg-white p-6 rounded-[56px] shadow-lg flex flex-col items-center transition transform hover:scale-105 focus:outline-none"
            onClick={() => navigate(project.path)} // نقل المستخدم عند النقر
          >
            <ViewServices icon={project.icon} text={project.text[language]} />
          </button>
        ))}
      </div>
    </main>
  );
};

export default Update;
