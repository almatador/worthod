import React, { useState } from 'react';
import Input from './../Components/inpout'; // استدعاء المكون
import phoneicon from './../../public/assets/Images/phone.png';
import instgramicon from './../../public/assets/Images/instgram.png';
import emailicon from './../../public/assets/Images/email.png';
import linkedinicon from './../../public/assets/Images/linkedin.png';
import snapchaticon from './../../public/assets/Images/snapchat.png';
import xtwitericon from './../../public/assets/Images/xtwiter.png';
import whatsappicon from './../../public/assets/Images/whatsapp.png';

const Contct = () => {
  // تعريف الحالة
  const [text, setText] = useState('');

  // وظيفة تحديث النص
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleInputChangeemail = (e) => {
    setText(e.target.value);
  };
  const handleInputChangephone = (e) => {
    setText(e.target.value);
  };
  const handleInputChangemassege = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-6">
      {/* الديف الأول */}
      <div className="text-white p-6 rounded-lg shadow-lg sm:w-1/2 w-full flex flex-col justify-between items-start">
        <div className="text-center">
          <h1 className="text-start font-Tajawal text-[32px] sm:text-[40px]">
            Get in Touch with Us Today
          </h1>
          <p className="text-start font-Tajawal mt-7 text-sm sm:text-base">
            Have questions or need assistance? Fill out the form
            below, and we’ll get back to you promptly
          </p>
        </div>
        <div className="w-full sm:w-[500px] flex flex-col items-start space-y-4">
          <Input
            type="text"
            placeholder="Full Name:"
            value={text}
            onChange={handleInputChange}
            className="mt-2"
          />
          <Input
            type="text"
            placeholder="Email Address:"
            value={text}
            onChange={handleInputChangeemail}
            className="mt-2"
          />
          <Input
            type="text"
            placeholder="Phone Number:"
            value={text}
            onChange={handleInputChangephone}
            className="mt-2"
          />
          <Input
            type="text"
            placeholder="Message:"
            value={text}
            onChange={handleInputChangemassege}
            className="mt-2"
          />
        </div>
        <a
          href="#"
          className="justify-center inline-block bg-gradient-to-r from-[#7214FF] to-[#311658] text-white text-center font-Tajawal py-4 px-8 rounded-full shadow-md hover:opacity-90 transition-all duration-300 mt-4"
        >
          <span className="font-Tajawal text-lg sm:text-xl lg:text-2xl">
            Send Your Message Now
          </span>
        </a>
      </div>

      {/* الخط الفاصل */}
      <div className="h-[10px] sm:h-[500px] sm:w-[10px] bg-white rounded-lg sm:hidden mt-6 sm:mt-0 mx-auto"></div>

      {/* الديف الثاني */}
      <div className="text-white p-6 rounded-lg shadow-lg sm:w-1/2 w-full">
        <div className="text-center">
          <h1 className="text-start font-Tajawal text-[32px] sm:text-[40px]">
            Contact Us Anytime
          </h1>
          <p className="text-start font-Tajawal mt-7 text-sm sm:text-base">
            Connect with us via phone, WhatsApp, or email. We're
            here to help your business grow.
          </p>
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
            <p className="text-white text-sm sm:text-base">
              abedalrhmnhassan@gmail.com
            </p>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-start font-Tajawal text-[32px] sm:text-[40px] mt-10">
            Connect with Us on Social Media
          </h1>
          <p className="text-start font-Tajawal mt-10 text-sm sm:text-base">
            Stay updated with our latest projects, services, and
            exclusive offers by following us on our social media
            channels. Let's build a stronger connection today!
          </p>
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
            <img src={instgramicon} alt="instgram" className="w-9 h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contct;
