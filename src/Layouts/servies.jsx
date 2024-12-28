// import React from "react";
// import Searchimage from "./../../public/assets/Images/search.png";
// import Penimage from "./../../public/assets/Images/pen.png";
// import compimage from "./../../public/assets/Images/comp.png";
// import rocketimage from "./../../public/assets/Images/rocket.png";

// const services = [
//     {
//         title: "Analysis And Planning",
//         description:
//             "We start by analyzing your business needs, goals, and audience. Through detailed discussions, we create a tailored roadmap to turn your idea into a digital success.",
//         icon: <img src={Searchimage} alt="Analysis And Planning Icon" className="w-12 h-12" />,
//     },
//     {
//         title: "Design And Customization",
//         description:
//             "Our expert designers craft unique and user-friendly designs that reflect your brand and engage your audience, ensuring consistency and professionalism.",
//         icon: <img src={Penimage} alt="Design And Customization Icon" className="w-12 h-12" />,
//     },
//     {
//         title: "Development And Implementation",
//         description:
//             "We use the latest technologies to build responsive websites, innovative apps, and scalable e-commerce platforms. Every project is rigorously tested for performance and compatibility.",
//         icon: <img src={compimage} alt="Development And Implementation Icon" className="w-12 h-12" />,
//     },
//     {
//         title: "Launch And Ongoing Support",
//         description:
//             "After a seamless launch, we provide ongoing technical support and updates to keep your digital solution running smoothly and aligned with your business growth.",
//         icon: <img src={rocketimage} alt="Launch And Ongoing Support Icon" className="w-12 h-12" />,
//     },
// ];

// const Services = () => {
//     return (
//         <div className="text-white px-4 sm:px-6">
//             <h1 className="text-3xl sm:text-4xl font-semibold text-left mb-6 sm:mb-8">
//                 How We Turn Your Idea Into A Successful Digital Project
//             </h1>
//             <p className="text-gray-400 max-w-3xl text-left mb-6 sm:mb-12">
//                 We transform your vision into a distinguished digital reality through
//                 well-planned steps focused on analysis, design, development, and
//                 continuous support to achieve your goals with professionalism.
//             </p>

//             <div className="max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
//                 {services.map((service, index) => (
//                     <div
//                         key={index}
//                         className="flex flex-col bg-[#1C1132] rounded-[56px] p-6 shadow-lg space-y-6"
//                     >
//                         <div className="flex items-center justify-center mb-4">
//                             {service.icon}
//                         </div>
//                         <h2 className="text-xl sm:text-2xl font-semibold font-Tajawal text-left">
//                             {service.title}
//                         </h2>
//                         <p className="text-left text-gray-300 text-base sm:text-lg font-normal leading-relaxed">
//                             {service.description}
//                         </p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Services;import React from "react";
import Searchimage from "./../../public/assets/Images/search.png";
import Penimage from "./../../public/assets/Images/pen.png";
import compimage from "./../../public/assets/Images/comp.png";
import rocketimage from "./../../public/assets/Images/rocket.png";

// Define services and translations
const services = [
    {
        title: {
            en: "Analysis And Planning",
            ar: "التحليل والتخطيط",
        },
        description: {
            en: "We start by analyzing your business needs, goals, and audience. Through detailed discussions, we create a tailored roadmap to turn your idea into a digital success.",
            ar: "نبدأ بتحليل احتياجات عملك، وأهدافك، والجمهور. من خلال المناقشات التفصيلية، نضع خارطة طريق مخصصة لتحويل فكرتك إلى نجاح رقمي.",
        },
        icon: <img src={Searchimage} alt="Analysis And Planning Icon" className="w-30 h-30 text-indigo-500" />,
    },
    {
        title: {
            en: "Design And Customization",
            ar: "التصميم والتخصيص",
        },
        description: {
            en: "Our expert designers craft unique and user-friendly designs that reflect your brand and engage your audience, ensuring consistency and professionalism.",
            ar: "يقوم مصممونا الخبراء بصنع تصاميم فريدة وسهلة الاستخدام تعكس علامتك التجارية وتشرك جمهورك، مع ضمان التناسق والاحترافية.",
        },
        icon: <img src={Penimage} alt="Design And Customization Icon" className="w-30 h-30 text-indigo-500" />,
    },
    {
        title: {
            en: "Development And Implementation",
            ar: "التطوير والتنفيذ",
        },
        description: {
            en: "We use the latest technologies to build responsive websites, innovative apps, and scalable e-commerce platforms. Every project is rigorously tested for performance and compatibility.",
            ar: "نستخدم أحدث التقنيات لبناء مواقع ويب استجابية، وتطبيقات مبتكرة، ومنصات تجارة إلكترونية قابلة للتوسع. يتم اختبار كل مشروع بدقة من أجل الأداء والتوافق.",
        },
        icon: <img src={compimage} alt="Development And Implementation Icon" className="w-30 h-30 text-indigo-500" />,
    },
    {
        title: {
            en: "Launch And Ongoing Support",
            ar: "الإطلاق والدعم المستمر",
        },
        description: {
            en: "After a seamless launch, we provide ongoing technical support and updates to keep your digital solution running smoothly and aligned with your business growth.",
            ar: "بعد الإطلاق السلس، نقدم دعمًا فنيًا مستمرًا وتحديثات للحفاظ على تشغيل الحل الرقمي بسلاسة وضمان توافقه مع نمو عملك.",
        },
        icon: <img src={rocketimage} alt="Launch And Ongoing Support Icon" className="w-30 h-30 text-indigo-500" />,
    },
];

const Services = ({ language = "en" }) => {
    return (
        <div className={`text-white place-items-start ${language === "ar" ? "text-right" : "text-left"}`}>
            <h1 className="text-4xl font-semibold mb-8">
                {language === "ar" ? "كيف نحول فكرتك إلى مشروع رقمي ناجح" : "How We Turn Your Idea Into A Successful Digital Project"}
            </h1>
            <p className="text-gray-400 max-w-3xl mb-12">
                {language === "ar"
                    ? "نحول رؤيتك إلى واقع رقمي مميز من خلال خطوات مخطط لها تركز على التحليل والتصميم والتطوير والدعم المستمر لتحقيق أهدافك باحترافية."
                    : "We transform your vision into a distinguished digital reality through well-planned steps focused on analysis, design, development, and continuous support to achieve your goals with professionalism."}
            </p>

            <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col bg-[#1C1132] rounded-[56px] p-6 shadow-lg space-y-6"
                    >
                        <div className="flex items-center mb-4">
                            {service.icon}
                        </div>
                        <h2
                            className={`text-4xl font-semibold font-Tajawal ${language === "ar" ? "text-right" : "text-left"}`}
                        >
                            {service.title[language]}
                        </h2>
                        <p
                            className={`text-left text-gray-300 text-[20px] font-[400] leading-[26px] ${
                                language === "ar" ? "text-right" : "text-left"
                            }`}
                        >
                            {service.description[language]}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
