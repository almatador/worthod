import React from 'react';
import Heroimage from './../../public/assets/Images/hero.png';

const Hero = ({ language }) => {
    const translations = {
        en: {
            title_hero: "Worthod – Your Partner in Building a Digital Future with Confidence and Creativity",
            descrabithan_hero: "At Worthod, we create responsive websites, innovative applications, and tailored e-commerce platforms to meet your business needs. With a focus on quality and innovation, we help businesses strengthen their digital presence and achieve lasting success. Start your journey today with our trusted digital solutions.",
            button_hero: "Build Your Digital Future Now",
        },
        ar: {
            title_hero: "وورثود – شريكك في بناء مستقبل رقمي بثقة وإبداع",
            descrabithan_hero: "في وورثود، نقوم بإنشاء مواقع متجاوبة وتطبيقات مبتكرة ومنصات تجارة إلكترونية مخصصة لتلبية احتياجات عملك. مع التركيز على الجودة والابتكار، نساعد الشركات على تعزيز حضورها الرقمي وتحقيق نجاح دائم. ابدأ رحلتك اليوم مع حلولنا الرقمية الموثوقة.",
            button_hero: "ابدأ بناء مستقبلك الرقمي الآن",
        },
    };

    const content = translations[language];

    return (
        <div className="w-full h-screen flex items-center justify-center p">
            <div className="max-w-screen-xl w-full px-4 py-6 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="w-full md:w-7/12 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-Tajawal leading-tight text-gray-900 dark:text-white mb-6">
                        {content.title_hero}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl mb-6">
                        {content.descrabithan_hero}
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-gradient-to-r from-[#7214FF] to-[#311658] text-white text-center font-medium py-4 px-8 rounded-full shadow-md hover:opacity-90 transition-all duration-300"
                    >
                        <span className="font-Tajawal text-lg sm:text-xl lg:text-2xl">
                            {content.button_hero}
                        </span>
                    </a>
                </div>

                <div className="w-full md:w-5/12 flex justify-center">
                    <img
                        className="w-10/12 h-auto object-cover rounded-tl-[56px] shadow-lg"
                        src={Heroimage}
                        alt="mockup"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
