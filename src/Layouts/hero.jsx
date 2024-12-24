import React from 'react';
import Heroimage from './../../public/assets/Images/hero.png'; // استيراد الصورة

const Hero = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-screen-xl w-full px-4 py-6 mx-auto flex items-center justify-between">
                {/* النص والمحتوى الرئيسي */}
                <div className="w-full md:w-7/12 text-left">
                    <h1 className="text-[500px] font-Tajawal leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl mb-6">
                        Worthod – Your Partner in Building a Digital Future with Confidence and Creativity
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-lg lg:text-xl mb-6">
                        At Worthod, we create responsive websites, innovative applications, and tailored e-commerce platforms to meet your business needs.
                        With a focus on quality and innovation, we help businesses strengthen their digital presence and achieve lasting success.
                        Start your journey today with our trusted digital solutions.
                    </p>
                    {/* الأزرار */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            style={{ background: 'linear-gradient(135.02deg, #7214FF -5.1%, #311658 115.55%)' }}
                        >
                            Build Your Digital Future Now
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* الصورة */}
                <div className="hidden md:block md:w-5/12">
                    <img className="w-full h-auto object-cover rounded-[56px_0_0_0]" src={Heroimage} alt="mockup" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
