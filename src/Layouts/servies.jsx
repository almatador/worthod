import React from "react";
import Searchimage from "./../../public/assets/Images/search.png";
import Penimage from "./../../public/assets/Images/pen.png";
import compimage from "./../../public/assets/Images/comp.png";
import rocketimage from "./../../public/assets/Images/rocket.png";

const services = [
    {
        title: "Analysis And Planning",
        description:
            "We start by analyzing your business needs, goals, and audience. Through detailed discussions, we create a tailored roadmap to turn your idea into a digital success.",
        icon: <img src={Searchimage} alt="Analysis And Planning Icon" className="w-30 h-30 text-indigo-500" />,
    },
    {
        title: "Design And Customization",
        description:
            "Our expert designers craft unique and user-friendly designs that reflect your brand and engage your audience, ensuring consistency and professionalism.",
        icon: <img src={Penimage} alt="Design And Customization Icon" className="w-30 h-30 text-indigo-500" />,
    },
    {
        title: "Development And Implementation",
        description:
            "We use the latest technologies to build responsive websites, innovative apps, and scalable e-commerce platforms. Every project is rigorously tested for performance and compatibility.",
        icon: <img src={compimage} alt="Development And Implementation Icon" className="w-30 h-30 text-indigo-500" />,
    },
    {
        title: "Launch And Ongoing Support",
        description:
            "After a seamless launch, we provide ongoing technical support and updates to keep your digital solution running smoothly and aligned with your business growth.",
        icon: <img src={rocketimage} alt="Launch And Ongoing Support Icon" className="w-30 h-30 text-indigo-500" />,
    },
];

const Services = () => {
    return (
        <div className="text-white">
            <h1 className="text-4xl font-semibold text-left mb-8">
                How We Turn Your Idea Into A Successful Digital Project
            </h1>
            <p className="text-gray-400 max-w-3xl text-left mb-12">
                We transform your vision into a distinguished digital reality through
                well-planned steps focused on analysis, design, development, and
                continuous support to achieve your goals with professionalism.
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
                        <h2 className="text-4xl font-semibold font-Tajawal text-left" style={{ fontSize: '24px', fontWeight: 500, lineHeight: '28.8px', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>
                            {service.title}
                        </h2>
                        <p className="text-left text-gray-300 text-[20px] font-[400] leading-[26px] underline-position-[from-font] decoration-skip-ink-none">
                            {service.description}
                        </p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
