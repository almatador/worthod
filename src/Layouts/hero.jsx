import Heroimage from './../../public/assets/Images/hero.png'; // استيراد الصورة

const Hero = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="max-w-screen-xl w-full px-4 py-6 mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-6 md:space-y-0">
                {/* النص والمحتوى الرئيسي */}
                <div className="w-full md:w-7/12 text-center md:text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-Tajawal leading-tight text-gray-900 dark:text-white mb-6">
                        Worthod – Your Partner in Building a Digital Future with Confidence and Creativity
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl mb-6">
                        At Worthod, we create responsive websites, innovative applications, and tailored e-commerce platforms to meet your business needs.
                        With a focus on quality and innovation, we help businesses strengthen their digital presence and achieve lasting success.
                        Start your journey today with our trusted digital solutions.
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-gradient-to-r from-[#7214FF] to-[#311658] text-white text-center font-medium py-4 px-8 rounded-full shadow-md hover:opacity-90 transition-all duration-300"
                    >
                        <span className="font-Tajawal text-lg sm:text-xl lg:text-2xl">
                            Build Your Digital Future Now
                        </span>
                    </a>
                </div>

                {/* الصورة */}
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
