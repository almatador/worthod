import React from 'react';
import { useLanguage } from '../../../contnt/LanguageContext';
import websiteshero from "./../../../../public/assets/Images/websiteshero.png";
import Update from "./../../../Layouts/updeta"
const Websites = () => {
    const { language } = useLanguage(); // الحصول على اللغة الحالية

    return (
        <div className="flex flex-col justify-center items-center py-10 px-4">
            {/* القسم الخاص بالصورة */}
            <div className="w-full flex justify-center">
                <img
                    src={websiteshero}
                    alt="Websites Hero"
                    className="w-[500px] h-auto object-contain mb-8" // ضبط حجم الصورة
                />
            </div>

            {/* القسم الخاص بالوصف */}
            <div     className={`mt-6 ${language === "ar" ? "text-right" : "text-left"} ${language === "ar" ? "rtl" : "ltr"} max-w-1xl`}
>
                <h1 className="text-3xl font-Tajawal text-[#FFFFFF] mb-6">
                    {language === "ar"
                        ? "أهمية تطوير التطبيقات والمواقع الإلكترونية للشركات الخليجية في العصر الرقمي"
                        : "The importance of developing applications and websites for Gulf companies in the digital age"}
                </h1>

                <p className="text-[#FFFFFF] text-lg font-Tajawal mb-4">
                    {language === "ar"
                        ? "في عصرنا الحالي، حيث يشهد العالم تحولاً رقمياً سريعاً، أصبحت التطبيقات والمواقع الإلكترونية من أهم الأدوات التي يمكن للشركات الخليجية استخدامها لتعزيز حضورها الرقمي وتحسين تفاعلها مع العملاء. لم يعد التطوير الرقمي مجرد وسيلة لتحسين العمليات التجارية؛ بل أصبح استثماراً استراتيجياً يساهم بشكل كبير في تحسين تجربة العملاء وزيادة العوائد."
                        : "In our current era, where the world is witnessing a rapid digital transformation, applications and websites have become some of the most important tools that Gulf companies can use to enhance their digital presence and improve customer engagement. Digital development is no longer just a means to improve business operations; it has become a strategic investment that significantly contributes to enhancing customer experience and increasing returns."}
                </p>

                <h2 className="text-2xl font-Tajawal text-[#FFFFFF] mb-4">
                    {language === "ar"
                        ? "1. تحسين تجربة العملاء وزيادة التفاعل"
                        : "1. Improving customer experience and increasing engagement"}
                </h2>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "تجربة المستخدم تعد واحدة من أهم عوامل نجاح أي موقع أو تطبيق. الشركات الخليجية تدرك جيداً أن توفير تجربة مستخدم استثنائية يمكن أن يميزها عن منافسيها في السوق. من خلال التطبيقات والمواقع المصممة بشكل جيد، يمكن للعملاء الوصول بسهولة وسرعة إلى المنتجات والخدمات، مما يعزز التفاعل ويرفع معدلات الرضا."
                        : "User experience is one of the most important factors for the success of any website or application. Gulf companies are well aware that providing an exceptional user experience can set them apart from their competitors in the market. With well-designed applications and websites, customers can easily and quickly access products and services, enhancing engagement and increasing satisfaction rates."}
                </p>
                <p className="text-[#F6F6F6] text-base font-Tajawal mb-4">
                    {language === "ar"
                        ? "تصميم واجهة مستخدم (UI) وتوفير تجربة مستخدم (UX) متميزة يتطلب دراسة دقيقة لاحتياجات الجمهور المحلي. وبذلك، يمكن للشركات أن تخلق علاقة قوية مع العملاء من خلال توفير منصة إلكترونية توفر لهم الراحة والسهولة في الوصول إلى خدماتهم المفضلة."
                        : "Designing a User Interface (UI) and providing an outstanding User Experience (UX) requires a careful study of the needs of the local audience. Thus, companies can create a strong relationship with customers by providing an online platform that offers thm comfort and ease of access to their preferred services."}
                </p>

                <h2 className="text-2xl font-Tajawal text-[#FFFFFF] mb-4">
                    {language === "ar"
                        ? "2. دعم التحول الرقمي وزيادة التنافسية"
                        : "2. Supporting digital transformation and increasing competitiveness"}
                </h2>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "الشركات التي تعتمد على تطوير التطبيقات والمواقع الإلكترونية لا تسهم فقط في تحسين تواجدها الرقمي، بل تساهم أيضًا في تعزيز تنافسيتها في السوق. مع تزايد عدد المستخدمين الذين يتجهون إلى الإنترنت للبحث عن خدماتهم واحتياجاتهم، أصبحت الشركات التي لا تمتلك حضورًا رقميًا مؤثرًا معرضة للتأخر في السوق.."
                        : "Companies that rely on developing applications and websites not only contribute to improving their digital presence but also enhance their competitiveness in the market. With the increasing number of users turning to the internet to search for their services and needs, companies that lack a significant digital presence are at risk of falling behind in the market."}
                </p>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "تطوير موقع إلكتروني احترافي أو تطبيق متكامل يساعد الشركات الخليجية على التواصل مع العملاء في أي وقت ومن أي مكان. كما يوفر لها فرصًا أكبر للتوسع والنمو في الأسواق المحلية والعالمية. الشركات التي تواكب التحول الرقمي تصبح أكثر قدرة على التكيف مع التغيرات السوقية وتلبية احتياجات عملائها بشكل أسرع وأكثر كفاءة."
                        : "Developing a professional website or a comprehensive application helps Gulf companies communicate with customers anytime and anywhere. It also provides greater opportunities for expansion and growth in local and global markets. Companies that keep pace with digital transformation become more capable of adapting to market changes and meeting their customers' needs more quickly and efficiently."}
                </p>

                {/* باقي النصوص هنا */}
                <h2 className="text-2xl font-Tajawal text-[#FFFFFF] mb-4">
                    {language === "ar"
                        ? "3. أنواع المواقع والتطبيقات المطلوبة في السوق الخليجية"
                        : "3. Types of websites and applications needed in the Gulf market"}
                </h2>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "مع التوسع الرقمي في منطقة الخليج، هناك بعض الأنواع من المواقع والتطبيقات التي تشهد طلبًا متزايدًا. الشركات الخليجية بحاجة إلى التركيز على تطوير حلول مبتكرة تلبي احتياجات الجمهور المتنوع. من بين هذه الأنواع:"
                        : "With the digital expansion in the Gulf region, there are certain types of websites and applications that are witnessing increasing demand. Gulf companies need to focus on developing innovative solutions that meet the diverse needs of the audience. Among these types are:"}
                </p>
                <ul className="list-disc pl-6 font-Tajawal text-white text-lg mb-4">
                    {language === "ar" ? (
                        <>
                            <li>مواقع التجارة الإلكترونية: مع زيادة الإقبال على التسوق عبر الإنترنت في الخليج، أصبح من الضروري لكل شركة بيع منتجاتها عبر الإنترنت.
                                المواقع الإلكترونية المخصصة للتجارة الإلكترونية توفر واجهات سهلة الاستخدام، تسوق آمن، وطرق دفع متنوعة، مما يزيد من احتمالية
                                زيادة المبيعات.</li>
                            <li>التطبيقات المصرفية والتطبيقات المالية: في ظل تحول القطاع المالي نحو الحلول الرقمية، أصبحت التطبيقات المصرفية وتطبيقات
                                الدفع الإلكتروني أكثر أهمية. هذه التطبيقات تساعد العملاء في إدارة حساباتهم، دفع الفواتير، والتحويلات المالية، مما يعزز من
                                الشفافية ويسهم في تسهيل الأعمال اليومية.</li>
                            <li>تطبيقات خدمات الصحة والعافية: مع الاهتمام المتزايد بالصحة والرفاهية، شهدت المنطقة الخليجية طلبًا كبيرًا على التطبيقات الصحية
                                التي تقدم استشارات طبية عن بعد، وتتبع الصحة، وتنظيم مواعيد العلاج. هذه التطبيقات توفر قيمة كبيرة للقطاع الصحي وتساعد الأفراد
                                في الوصول إلى خدمات طبية بسهولة.</li>
                            <li>تطبيقات خدمات توصيل الطعام والمنتجات: تطور قطاع خدمات التوصيل بشكل ملحوظ في الخليج، وزادت الحاجة إلى التطبيقات التي تسهل عملية طلب الطعام أو المنتجات من المطاعم والمتاجر المحلية. هذه التطبيقات تلعب دورًا رئيسيًا في تحسين تجربة المستخدم وزيادة سهولة الوصول إلى المنتجات.</li>
                            <li>تطبيقات التعليم والتدريب عن بُعد: نظرًا للظروف العالمية وتوجه الحكومات نحو التعليم الإلكتروني، فإن الطلب على التطبيقات التي تقدم محتوى تعليمي متنوع سواء للأطفال أو البالغين قد زاد بشكل كبير في الخليج. هذه التطبيقات تسهم في تعزيز الوصول إلى التعليم في جميع المجالات.</li>
                        </>
                    ) : (
                        <>
                            <li>E-commerce websites: With the growing interest in online shopping in the Gulf, it has become essential for every company
                                to sell its products online. E-commerce dedicated websites provide user-friendly interfaces, secure shopping, and various
                                payment methods, increasing the likelihood of boosting sales.</li>
                            <li>Banking and financial applications: With the financial sector shifting towards digital solutions, banking applications and
                                electronic payment applications have become increasingly important. These applications help customers manage their
                                accounts, pay bills, and conduct financial transfers, enhancing transparency and facilitating daily business.</li>
                            <li>Health and wellness service applications: With the growing interest in health and wellness, there has been significant
                                demand in the Gulf region for health applications that offer telemedicine consultations, health tracking, and appointment
                                scheduling. These applications provide great value to the healthcare sector and help individuals access medical services
                                easily.</li>
                            <li>Food and product delivery service applications: The delivery service sector has evolved significantly in the Gulf, increasing the need for applications that facilitate ordering food or products from local restaurants and stores. These applications play a key role in improving user experience and increasing ease of access to products.</li>
                            <li>Remote education and training applications: Due to global circumstances and governments' shift towards e-learning, the demand for applications that provide diverse educational content for both children and adults has increased significantly in the Gulf. These applications contribute to enhancing access to education across all fields.</li>
                        </>
                    )}
                </ul>
                <h2 className="text-2xl font-Tajawal text-[#FFFFFF] mb-4">
                    {language === "ar"
                        ? "4. توفير فرص لتوسيع الأعمال وزيادة الإيرادات"
                        : "4. Providing opportunities for business expansion and increasing revenues"}
                </h2>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "بغض النظر عن نوع الموقع أو التطبيق الذي يتم تطويره، فإن الهدف النهائي يكمن في زيادة الإيرادات وتعزيز العوائد. من خلال توفير منصات رقمية تفاعلية وسهلة الاستخدام، يمكن للشركات الخليجية جذب جمهور أوسع وتحقيق مزيد من المبيعات أو الخدمات. المواقع والتطبيقات الإلكترونية توفر وسيلة فعالة للتوسع في الأسواق الجديدة، سواء كانت محلية أو إقليمية أو دولية، مما يساهم في فتح فرص تجارية جديدة للشركات."
                        : "Regardless of the type of website or application being developed, the ultimate goal lies in increasing revenues and enhancing returns. By providing interactive and user-friendly digital platforms, Gulf companies can attract a wider audience and achieve more sales or services. Websites and applications offer an effective means to expand into new markets, whether local, regional, or international, contributing to opening new business opportunities for companies."}
                </p>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "تطبيقات الدفع عبر الإنترنت، على سبيل المثال، تسهل عمليات الشراء والبيع بشكل سريع وآمن، مما يرفع مستوى رضا العملاء ويزيد من عدد المعاملات التجارية. في الوقت نفسه، يمكن للمواقع الإلكترونية التي توفر محتوى مفيدًا وجذابًا أن تساعد الشركات على بناء قاعدة عملاء وفية وتحقيق دخل ثابت من خلال الإعلانات أو العروض الترويجية."
                        : "Online payment applications, for example, facilitate buying and selling processes quickly and securely, which raises customer satisfaction levels and increases the number of business transactions. At the same time, websites that provide useful and engaging content can help companies build a loyal customer base and achieve a steady income through advertisements or promotional offers."}
                </p>
                <h2 className="text-2xl font-Tajawal text-[#FFFFFF] mb-4">
                    {language === "ar"
                        ? "5. تعزيز العلامة التجارية وبناء علاقة طويلة الأمد مع العملاء"
                        : "5. Enhancing brand identity and building long-term relationships with customers"}
                </h2>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "من خلال تطوير مواقع وتطبيقات مبتكرة، يمكن للشركات الخليجية بناء حضور قوي في السوق وتعزيز علامتها التجارية. المواقع الإلكترونية والتطبيقات المميزة تعد بمثابة الواجهة الرقمية التي تمثل هوية الشركة وقيمها. من خلال تقديم خدمات قيمة وتجربة مستخدم متفوقة، يمكن للشركات بناء علاقة طويلة الأمد مع عملائها، مما يعزز من ولائهم ويشجعهم على العودة مرارًا وتكرارًا."
                        : "By developing innovative websites and applications, Gulf companies can build a strong market presence and enhance their brand identity. Distinctive websites and applications serve as the digital face that represents the company's identity and values. By providing valuable services and superior user experience, companies can build long-term relationships with their customers, enhancing their loyalty and encouraging them to return repeatedly."}
                </p>
                <h2 className="text-2xl font-Tajawal text-[#FFFFFF] mb-4">
                    {language === "ar"
                        ? "الخلاصة"
                        : "4. Providing opportunities for business expansion and increasing revenues"}
                </h2>
                <p className="text-[#FFFFFF] font-Tajawal text-lg mb-4">
                    {language === "ar"
                        ? "إن تطوير التطبيقات والمواقع الإلكترونية يعد خطوة استراتيجية هامة للشركات الخليجية التي تسعى للبقاء في صدارة المنافسة في السوق الرقمي المتنامي. من خلال تحسين تجربة العملاء، دعم التحول الرقمي، وتقديم خدمات مبتكرة تلبي احتياجات الجمهور، يمكن للشركات تحقيق نمو مستدام وزيادة الإيرادات. إذا كنت تبحث عن شريك لتطوير موقعك أو تطبيقك الإلكتروني بشكل احترافي ومبتكر، Worthod تقدم لك الحلول المثالية لتحقيق أهدافك الرقمية."
                        : "Developing applications and websites is a crucial strategic step for Gulf companies seeking to stay ahead in the growing digital market. By improving customer experience, supporting digital transformation, and offering innovative services that meet audience needs, companies can achieve sustainable growth and increase revenues. If you are looking for a partner to develop your website or application professionally and innovatively, Worthod offers you the ideal solutions to achieve your digital goals."}
                </p>
      
            </div>
            <Update language={language} />
        </div>
    );
};

export default Websites;
