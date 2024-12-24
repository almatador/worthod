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
                    <a
                        href="#"
                        className="inline-block bg-gradient-to-r from-[#7214FF] to-[#311658] text-white text-center font-medium py-3.5 px-6 rounded-[56px] transition-all opacity-100 hover:opacity-90"
                        style={{
                            width: '527px',
                            height: '96px',
                            top: '676px',
                            left: '60px',
                            padding: '24px 62px',
                            gap: '0px',
                        }}
                    >
                        <span className="font-Tajawal text-[30px] leading-[38.4px]">{/* نص الزر */}Build Your Digital Future Now</span>
                    </a>
                    
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
