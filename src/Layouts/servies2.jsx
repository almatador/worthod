import React from 'react';
import ViewServices from './../Components/viweservies'; // استدعاء المكون
import Designing from './../../public/assets/Images/Designing Website store.png';
import Website from './../../public/assets/Images/Website Design.png';
import Application from './../../public/assets/Images/Application Design.png';
import Web from './../../public/assets/Images/Web Hosting.png';
import SEO from './../../public/assets/Images/SEO Optimization.png';
import Dashboard from './../../public/assets/Images/Dashboard Design.png';
import serviceimage from './../../public/assets/Images/service2.png';

const services = [
  {
    icon: Designing,
    text: "Designing Website store",
  },
  {
    icon: Website,
    text: "Website Design",
  },
  {
    icon: Application,
    text: "Application Design",
  },
  {
    icon: Web,
    text: "Web Hosting",
  },
  {
    icon: SEO,
    text: "SEO Optimization",
  },
  {
    icon: Dashboard,
    text: "Dashboard Design",
  },
];

const Services2 = () => {
  return (
    
    <div
      className="py-10 flex flex-col items-center justify-center "
    >

      <div className="container mx-auto justify-between">
        <h1 className="text-4xl font-Tajawal mb-10 text-center text-gray-100">
          What Do We Offer?
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-center">
          {/* الصورة على الجانب الأيسر */}

          {/* الخدمات على الجانب الأيمن */}
          <div className="w-full lg:w-2/3 grid grid-cols-3 sm:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-[56px] shadow-lg  flex flex-col items-center"
              >
                <ViewServices icon={service.icon} text={service.text} size="140px" />
              </div>
            ))}
          </div>
          <div className=" w-full md:w-5/12 flex justify-center items-center mb-10 lg:mb-0 ">
            <img src={serviceimage} alt="Service" className="rounded-lg shadow-lg " />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services2;
