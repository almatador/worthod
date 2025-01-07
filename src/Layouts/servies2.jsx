import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component for navigation
import ViewServices from './../Components/viweservies'; // استدعاء المكون
import Designing from './../../public/assets/Images/Designing Website store.png';
import Website from './../../public/assets/Images/Website Design.png';
import Application from './../../public/assets/Images/Application Design.png';
import Web from './../../public/assets/Images/Web Hosting.png';
import SEO from './../../public/assets/Images/SEO Optimization.png';
import Dashboard from './../../public/assets/Images/Dashboard Design.png';
import serviceimage from './../../public/assets/Images/service2.png';
import Social_Media_Marketing from './../../public/assets/Images/Social Media Marketing.png';
import Cybersecurity from './../../public/assets/Images/Cybersecurity.png';

// Define services with multi-language support (English/Arabic)
const services = [
  {
    icon: Designing,
    text: {
      en: "Designing Website store",
      ar: "تصميم متجر مواقع الويب",
    },
    link: "/designing-website-store", // Add a link for each service
  },
  {
    icon: Website,
    text: {
      en: "Website Design",
      ar: "تصميم المواقع الإلكترونية",
    },
    link: "/website-design",
  },
  {
    icon: Application,
    text: {
      en: "Application Design",
      ar: "تصميم التطبيقات",
    },
    link: "/application-design",
  },
  {
    icon: Web,
    text: {
      en: "Web Hosting",
      ar: "استضافة المواقع الإلكترونية",
    },
    link: "/web-hosting",
  },
  {
    icon: SEO,
    text: {
      en: "SEO Optimization",
      ar: "تحسين محركات البحث",
    },
    link: "/seo-optimization",
  },
  {
    icon: Dashboard,
    text: {
      en: "Dashboard Design",
      ar: "تصميم لوحة القيادة",
    },
    link: "/dashboard-design",
  },
  {
    icon: Social_Media_Marketing,
    text: {
      en: "Social Media Marketing",
      ar: "التسويق عبر وسائل التواصل الاجتماعي",
    },
    link: "/social-media-marketing",
  },
  {
    icon: Cybersecurity,
    text: {
      en: "Cybersecurity",
      ar: "الأمن السيبراني",
    },
    link: "/cybersecurity",
  },
];

const Services2 = ({ language = 'en' }) => {
  return (
    <div className={`py-10 flex flex-col items-center justify-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
      <div className="container mx-auto justify-between">
        <h1 className="text-4xl font-Tajawal mb-10 text-center text-gray-100">
          {language === 'ar' ? "ماذا نقدم؟" : "What Do We Offer?"}
        </h1>
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-8">
          {/* الخدمات على الجانب الأيمن */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-[20px] shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300"
              >
                <Link to={service.link}>
                  <ViewServices icon={service.icon} text={service.text[language]} size="140px" />
                </Link>
              </div>
            ))}
          </div>
          {/* الصورة على الجانب الأيسر (في الشاشات الصغيرة تصبح في الأعلى) */}
          <div className="w-full lg:w-1/3 flex justify-center items-center mb-10 lg:mb-0">
            <img
              src={serviceimage}
              alt="Service"
              className="rounded-lg shadow-lg max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
