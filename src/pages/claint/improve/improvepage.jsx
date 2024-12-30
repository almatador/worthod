import React from 'react';
import { useLanguage } from '../../../contnt/LanguageContext';
import improvehero from "./../../../../public/assets/Images/improvehero.png";
import Update from "./../../../Layouts/updeta"

const Improve = () => {
    const { language } = useLanguage(); // الحصول على اللغة الحالية

    return (
        <div>
            <div className="w-full flex justify-center">
                <img
                    src={improvehero}
                    alt="improve hero"
                    className="w-[500px] h-auto object-contain mb-8" // ضبط حجم الصورة
                />
            </div>
            <div className={`mt-6 ${language === "ar" ? "text-right" : "text-left"} ${language === "ar" ? "rtl" : "ltr"} max-w-1xl`}>
                <h1 className="text-3xl font-Tajawal text-[#FFFFFF] mb-6">
                    {language === "ar"
                        ? "كيفية تحسين تجربة المستخدم السوق الخليجي: استراتيجيات وأدوات"
                        : "The Best Social Media Marketing Strategies for Gulf Companies"}
                </h1>

                <p className="text-[#FFFFFF] text-lg font-Tajawal mb-4">
                    {language === "ar"
                        ? "في ظل التحول الرقمي السريع الذي تشهده منطقة الخليج، أصبحت تجربة المستخدم (UX) وتصميم واجهات المستخدم (UI) من العناصر الحاسمة التي تؤثر بشكل كبير على نجاح أي موقع أو تطبيق إلكتروني. الشركات التي تهتم بتحسين تجربة المستخدم توفر للعملاء تجربة مريحة وجذابة، مما يعزز الولاء ويزيد من التفاعل مع منصاتها الرقمية. في هذا المقال، سوف نستعرض أهم الاستراتيجيات والأدوات لتحسين تجربة المستخدم (UX/UI) في السوق الخليجي.."
                        : "In the current digital age, social media has become one of the most important tools used by companies in the Gulf region to connect with their target audience and increase brand awareness. With the significant rise in the number of users on these platforms in recent years, it has become essential for every company to have a clear and effective marketing strategy through these channels to achieve success and growth. In this article, we will discuss the best social media marketing strategies that can help Gulf companies achieve their goals."}
                </p>

            </div>


            <Update language={language} />
        </div>
    )
}
export default Improve;
