import React, { useState } from 'react';
import Input from './../Components/inpout'; // استدعاء المكون
import phoneicon from './../../public/assets/Images/phone.png';
import instgramicon from './../../public/assets/Images/instgram.png';
import emailicon from './../../public/assets/Images/email.png';
import linkedinicon from './../../public/assets/Images/linkedin.png';
import snapchaticon from './../../public/assets/Images/snapchat.png';
import xtwitericon from './../../public/assets/Images/xtwiter.png';
import whatsappicon from './../../public/assets/Images/whatsapp.png';

const Contct = ({ language = 'en' }) => {
  const [text, setText] = useState('');
  const isArabic = language === 'ar';

  const handleInputChange = (e) => setText(e.target.value);

  const texts = {
    en: {
      title1: 'Get in Touch with Us Today',
      description1:
        'Have questions or need assistance? Fill out the form below, and we’ll get back to you promptly.',
      sendButton: 'Send Your Message Now',
      title2: 'Contact Us Anytime',
      description2:
        "Connect with us via phone, WhatsApp, or email. We're here to help your business grow.",
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      email: 'Email',
      socialTitle: 'Connect with Us on Social Media',
      socialDescription:
        'Stay updated with our latest projects, services, and exclusive offers by following us on our social media channels. Let\'s build a stronger connection today!',
    },
    ar: {
      title1: 'تواصل معنا اليوم',
      description1: 'هل لديك أسئلة أو تحتاج إلى مساعدة؟ املأ النموذج أدناه وسنعاود الاتصال بك قريبًا.',
      sendButton: 'أرسل رسالتك الآن',
      title2: 'اتصل بنا في أي وقت',
      description2: 'تواصل معنا عبر الهاتف أو الواتساب أو البريد الإلكتروني. نحن هنا لمساعدتك في تطوير عملك.',
      phone: 'الهاتف',
      whatsapp: 'واتساب',
      email: 'البريد الإلكتروني',
      socialTitle: 'تواصل معنا عبر وسائل التواصل الاجتماعي',
      socialDescription:
        'ابقَ على اطلاع بأحدث مشاريعنا وخدماتنا وعروضنا الحصرية من خلال متابعة قنواتنا على وسائل التواصل الاجتماعي. لنُبني معًا علاقة أقوى اليوم!',
    },
  };

  const t = texts[language];

  return (
    <div
      className={`flex flex-col sm:flex-row sm:space-x-6 ${
        isArabic ? 'text-right' : 'text-left'
      }`}
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* القسم الأول */}
      <div className="text-white p-6 rounded-lg shadow-lg sm:w-1/2 w-full flex flex-col justify-between items-start">
        <div className="text-center">
          <h1 className="text-start font-Tajawal text-[32px] sm:text-[40px]">{t.title1}</h1>
          <p className="text-start font-Tajawal mt-7 text-sm sm:text-base">{t.description1}</p>
        </div>
        <div className="w-full sm:w-[500px] flex flex-col items-start space-y-4">
          <Input
            type="text"
            placeholder={isArabic ? 'الاسم الكامل:' : 'Full Name:'}
            value={text}
            onChange={handleInputChange}
            className="mt-2"
          />
          <Input
            type="text"
            placeholder={isArabic ? 'البريد الإلكتروني:' : 'Email Address:'}
            value={text}
            onChange={handleInputChange}
            className="mt-2"
          />
          <Input
            type="text"
            placeholder={isArabic ? 'رقم الهاتف:' : 'Phone Number:'}
            value={text}
            onChange={handleInputChange}
            className="mt-2"
          />
          <Input
            type="text"
            placeholder={isArabic ? 'الرسالة:' : 'Message:'}
            value={text}
            onChange={handleInputChange}
            className="mt-2"
          />
        </div>
        <a
          href="#"
          className="justify-center inline-block bg-gradient-to-r from-[#7214FF] to-[#311658] text-white text-center font-Tajawal py-4 px-8 rounded-full shadow-md hover:opacity-90 transition-all duration-300 mt-4"
        >
          <span className="font-Tajawal text-lg sm:text-xl lg:text-2xl">{t.sendButton}</span>
        </a>
      </div>

      {/* الخط الفاصل */}
      <div className="h-[500px] w-[10px] bg-white rounded-lg"></div>

      {/* القسم الثاني */}
      <div className="text-white p-6 rounded-lg shadow-lg sm:w-1/2 w-full">
        <div className="text-center">
          <h1 className="text-start font-Tajawal text-[32px] sm:text-[40px]">{t.title2}</h1>
          <p className="text-start font-Tajawal mt-7 text-sm sm:text-base">{t.description2}</p>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-10">
            <img src={phoneicon} alt="phone" className="w-9 h-9" />
            <p className="text-white text-sm sm:text-base">+201277756831</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <img src={whatsappicon} alt="whatsapp" className="w-9 h-9" />
            <p className="text-white text-sm sm:text-base">+201277756831</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <img src={emailicon} alt="email" className="w-9 h-9" />
            <p className="text-white text-sm sm:text-base">abedalrhmnhassan@gmail.com</p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-start font-Tajawal text-[32px] sm:text-[40px] mt-10">{t.socialTitle}</h1>
          <p className="text-start font-Tajawal mt-10 text-sm sm:text-base">{t.socialDescription}</p>
        </div>
        <div className="flex items-center justify-center sm:gap-[104px] gap-4 mt-10 ">
          <div>
            <img src={snapchaticon} alt="snapchat" className="w-9 h-9" />
          </div>
          <div>
            <img src={linkedinicon} alt="linkedin" className="w-9 h-9" />
          </div>
          <div>
            <img src={xtwitericon} alt="x" className="w-9 h-9" />
          </div>
          <div>
            <img src={instgramicon} alt="instagram" className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contct;
