import React from 'react';
import Logo from './../../../../public/assets/Images/logo.png'; // Import your logo image

const NotFoundPage = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#120C1C] to-[#2A1845] h-[100vh] flex justify-center items-center">
        <div className="max-w-screen-xl text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <a href="/" className="flex items-center">
              <img
                src={Logo}
                alt="Logo"
                className="h-10 sm:h-12 lg:h-14 cursor-pointer transition-transform duration-300 hover:scale-110"
              />
            </a>
          </div>

          {/* 404 Heading */}
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold text-white lg:text-9xl">
            404
          </h1>

          {/* Not Found Message */}
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-300 md:text-4xl">
            Page Not Found
          </p>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
