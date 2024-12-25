import React from "react";

const pricingPlans = [
    {
        title: "Basic",
        price: "300SAR",
        features: [
            "Creation of a simple website (1-2 pages)",
            "Design of a small e-commerce store (up to 10 products)",
            "Basic SEO to ensure website visibility",
            "Responsive design that works perfectly on all devices",
            "1 month of technical support",
            "Basic design customization to match your brand identity",
            "Free consultation session to understand client needs",
        ],
    },
    {
        title: "Advanced",
        price: "600SAR",
        features: [
            "Creation of a multi-page website (3-7 pages)",
            "Design of a medium-sized e-commerce store (up to 50 products)",
            "Advanced SEO with monthly reports",
            "Content writing for three main pages",
            "Integration of payment and shipping systems",
            "3 months of technical support",
            "Consultation session before the project to define goals",
        ],
    },
    {
        title: "Professional",
        price: "1200SAR",
        features: [
            "Design of a complete website with advanced features and unlimited pages",
            "Design of a large e-commerce store with an unlimited number of products",
            "Comprehensive SEO with targeted keywords and detailed reports",
            "Professional content writing for all pages",
            "Creation of a custom Dashboard to manage the site and store",
            "1 year of dedicated technical support",
            "Free hosting for the first year",
            "Personalized consultation sessions for implementation and needs analysis",
        ],
    },
];

const Pricing = () => {
    return (
        <section className="py-24 
      text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-5xl font-bold mb-4">For Your Digital Needs</h2>
                    <p className="text-gray-300 mb-8">
                        Our Packages Are Designed To Fit Your Business Needs, From Simple Websites To
                        Advanced E-Commerce Platforms, Ensuring Your Digital Success
                    </p>
                    {/* Billing Toggle */}
                    <div className="flex justify-center items-center space-x-4">
                        <label className="text-xl">Pay Monthly</label>
                        <input type="checkbox" id="billing-toggle" className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-blue-600 appearance-none before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:transition before:ease-in-out before:duration-200" />

                        <label className="text-xl">Pay Yearly</label>
                        <img src="./../../public/assets/Images/image.png" alt="" />
                        <span className="text-indigo-400 ">Save 10%</span>
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-8 rounded-[59px] shadow-lg transition transform hover:scale-105 ${index === 1 ? "bg-white text-gray-900" : "bg-gray-800"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4 text-center">{plan.title}</h3>
                            <div className="text-center mb-6">
                                <span className="text-5xl font-extrabold">{plan.price}</span>
                                <span className="text-xl">/ Month</span>
                            </div>
                            <button
                                className={`w-50 h-[48px] py-[6px] px-[12px] gap-[4px] border-[1.5px] rounded-[56px] font-semibold transition ${index === 1
                                        ? "bg-white text-[#190930] hover:bg-indigo-700"
                                        : "bg-[#190930] hover:bg-indigo-600"
                                    }`}
                            >
                                Get Started Now
                            </button>

                            <ul className="space-y-4 mb-6 text-left">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center">
                                        <svg
                                            className="w-6 h-6 text-[#DDC7FF] flex-shrink-0 mr-3"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            ></path>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
