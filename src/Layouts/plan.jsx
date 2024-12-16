import React from 'react';

const pricingPlans = [
    {
        title: "الخطة الأساسية",
        price: "$29/month",
        features: [
            "خدمة دعم العملاء",
            "وصول غير محدود للمحتوى",
            "تحديثات دورية",
        ],
    },
    {
        title: "الخطة المميزة",
        price: "$49/month",
        features: [
            "خدمة دعم العملاء على مدار الساعة",
            "وصول غير محدود للمحتوى",
            "تحديثات دورية",
            "دورات تدريبية مجانية",
        ],
    },
    {
        title: "الخطة الاحترافية",
        price: "$99/month",
        features: [
            "خدمة دعم العملاء على مدار الساعة",
            "وصول غير محدود للمحتوى",
            "تحديثات دورية",
            "دورات تدريبية مجانية",
            "استشارات شخصية",
        ],
    },
];

const Pricing = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="font-manrope text-5xl text-center font-bold text-gray-900 mb-4">اختر خطتك</h2>
                    <p className="text-gray-500 text-center leading-6 mb-9">تجربة مجانية لمدة 7 أيام. لا حاجة لبطاقة ائتمان.</p>
                    {/* Switch */}
                    <div className="flex justify-center items-center">
                        <label className="min-w-[3.5rem] text-xl relative text-gray-900 mr-4 font-medium">التحصيل شهريًا</label>
                        <input type="checkbox" id="billing-toggle" className="relative shrink-0 w-11 h-6 p-0.5 bg-indigo-100 checked:bg-indigo-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:border-blue-600 appearance-none before:inline-block before:w-5 before:h-5 before:bg-indigo-600 checked:before:bg-indigo-600 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:transition before:ease-in-out before:duration-200" />
                        <label className="relative min-w-[3.5rem] font-medium text-xl text-gray-500 ml-4">التحصيل سنويًا</label>
                    </div>
                    {/* Switch End */}
                </div>
                {/* Grid */}
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 lg:items-center">
                    {pricingPlans.map((plan, index) => (
                        <div key={index} className="flex flex-col mx-auto max-w-sm text-gray-900 rounded-2xl bg-gray-50 p-6 xl:py-9 xl:px-12 transition-all duration-500 hover:bg-gray-100">
                            <h3 className="font-manrope text-2xl font-bold mb-3">{plan.title}</h3>
                            <div className="flex items-center mb-6">
                                <span className="font-manrope mr-2 text-6xl font-semibold text-indigo-600">{plan.price}</span>
                                <span className="text-xl text-gray-500">/ شهر</span>
                            </div>
                            {/* List */}
                            <ul className="mb-12 space-y-6 text-left text-lg text-gray-500">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center space-x-4">
                                        {/* Icon */}
                                        <svg className="flex-shrink-0 w-6 h-6 text-indigo-600" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="py-2.5 px-5 bg-indigo-600 shadow-sm rounded-full transition-all duration-500 text-base text-white font-semibold text-center w-full hover:bg-indigo-700">اشتراك الآن</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
