// import React, { useState } from 'react';
// import Logo from './../../public/assets/Images/logo.png'; // Import your logo image
// import IconLang from './../Components/icon/iconlang'; // Import your logo image

// const Navbar = () => {
//     const [language, setLanguage] = useState('en'); // حالة اللغة الافتراضية هي الإنجليزية
//     const toggleLanguage = () => {
//         setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en')); // التبديل بين الإنجليزية والعربية
//     };

//     return (
//         <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between py-6 px-20 bg-gradient-to-r from-[#120C1C] to-[#3c255e] rounded-b-[56px] shadow-md">
//             {/* الشعار */}
//             <div className="flex">
//                 <a href="/" className="flex items-center">
//                     <img
//                         src={Logo}
//                         alt="Logo"
//                         className="h-14 cursor-pointer transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     />
//                 </a>
//             </div>

//             {/* القائمة */}
//             <ul className="flex space-x-10 text-white text-2xl">
//                 <li className="relative group">
//                     <a
//                         href="/"
//                         className="transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     >
//                         Home
//                     </a>
//                     {/* الخط أسفل زر "Home" */}
//                     <span className="absolute left-0 w-0 h-1 bg-white transition-all group-hover:w-full bottom-0"></span>
//                 </li>
//                 <li>
//                     <a
//                         href="/about"
//                         className="relative group transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     >
//                         About
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="/services"
//                         className="relative group transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     >
//                         Services
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="/packages"
//                         className="relative group transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     >
//                         Packages
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="/portfolio"
//                         className="relative group transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     >
//                         Portfolio
//                     </a>
//                 </li>
//                 <li>
//                     <a
//                         href="/contact"
//                         className="relative group transition-transform duration-300 hover:scale-150" // انبساق عند التحويم
//                     >
//                         Contact
//                     </a>
//                 </li>
//             </ul>

//             {/* زر تغيير اللغة */}

//             {/* زر "Start Now" */}
//             <div className="flex items-center space-x-6">
//                 {/* زر تغيير اللغة */}

//                 {/* أيقونة اللغة */}
//                 <div className="cursor-pointer" onClick={toggleLanguage}>
//                     <IconLang /> {/* استدعاء أيقونة اللغة */}
//                 </div>

//                 {/* النص الخاص بتغيير اللغة */}
//                 <div className="text-white text-lg cursor-pointer" onClick={toggleLanguage}>
//                     {language === 'en' ? 'AR' : 'EN'}
//                 </div>

//                 {/* زر "Start Now" */}
//                 <a
//                     href="/start"
//                     className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-full shadow-md hover:opacity-90 transition-transform duration-300 hover:scale-110" // انبساق عند التحويم
//                 >
//                     Start Now
//                 </a>
//             </div>

//         </nav>
//     );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import Logo from './../../public/assets/Images/logo.png'; // Import your logo image
import IconLang from './../Components/icon/iconlang'; // Import your icon

const Navbar = () => {
    const [language, setLanguage] = useState('en'); // Default language is English
    const [menuOpen, setMenuOpen] = useState(false); // Sidebar state
    const [navbarHeight, setNavbarHeight] = useState(0); // Dynamic navbar height

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'en' ? 'ar' : 'en')); // Toggle between English and Arabic
    };

    // Adjust navbar height dynamically based on content
    useEffect(() => {
        const navbar = document.querySelector('nav');
        setNavbarHeight(navbar.offsetHeight);
    }, [menuOpen]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between flex-wrap py-4 px-4 sm:px-8 lg:px-20 bg-gradient-to-r from-[#120C1C] to-[#3c255e] rounded-b-[56px] shadow-md">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="flex items-center">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-10 sm:h-12 lg:h-14 cursor-pointer transition-transform duration-300 hover:scale-150"
                        />
                    </a>
                </div>

                {/* Small screen sidebar */}
                <div className="sm:hidden flex items-center">
                    <button
                        className="text-white text-xl"
                        onClick={() => setMenuOpen(!menuOpen)} // Toggle sidebar
                    >
                        ☰
                    </button>
                    {menuOpen && (
                        <ul className="absolute top-16 left-0 right-0 bg-gradient-to-r from-[#120C1C] to-[#3c255e] p-4 space-y-4 text-white text-lg">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/packages">Packages</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    )}
                </div>

                {/* Main menu for larger screens */}
                <ul className="hidden sm:flex flex-wrap space-x-4 sm:space-x-6 lg:space-x-10 text-white text-sm sm:text-lg lg:text-2xl">
                    <li className="relative group">
                        <a href="/" className="transition-transform duration-300 hover:scale-150">
                            Home
                        </a>
                        <span className="absolute left-0 w-0 h-1 bg-white transition-all group-hover:w-full bottom-0"></span>
                    </li>
                    <li>
                        <a href="/about" className="relative group transition-transform duration-300 hover:scale-150">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/services" className="relative group transition-transform duration-300 hover:scale-150">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="/packages" className="relative group transition-transform duration-300 hover:scale-150">
                            Packages
                        </a>
                    </li>
                    <li>
                        <a href="/portfolio" className="relative group transition-transform duration-300 hover:scale-150">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="relative group transition-transform duration-300 hover:scale-150">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="flex items-center space-x-4 sm:space-x-6">
                    {/* Language icon */}
                    <div className="cursor-pointer" onClick={toggleLanguage}>
                        <IconLang />
                    </div>

                    {/* Language text */}
                    <div className="text-white text-sm sm:text-lg cursor-pointer" onClick={toggleLanguage}>
                        {language === 'en' ? 'AR' : 'EN'}
                    </div>

                    {/* "Start Now" button */}
                    <a
                        href="/start"
                        className="px-4 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm sm:text-lg rounded-full shadow-md hover:opacity-90 transition-transform duration-300 hover:scale-110"
                    >
                        Start Now
                    </a>
                </div>
            </nav>

            {/* Adjust margin for the next section */}
            <div style={{ marginTop: `${navbarHeight}px` }}>
                {/* Hero or next section content */}
            </div>
        </>
    );
};

export default Navbar;
