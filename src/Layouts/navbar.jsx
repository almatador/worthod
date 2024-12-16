import React from 'react';
import Logo from './../../public/assets/Images/logo.png'; // Import your logo image

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-20 flex items-center justify-between py-6 px-20" >
            {/* الشعار */}
            <div className="flex">
                <img src={Logo} alt="Logo" className="h-14" /> {/* زادت قيمة الارتفاع */}
            </div>

            {/* القائمة */}
            <ul className="flex space-x-10 text-white text-xl"> {/* زادت المسافة والحجم */}
                <li>
                    <a href="/" className="relative group">
                        Home
                        <span className="absolute left-0 w-0 h-1 bg-white transition-all group-hover:w-full bottom-0"></span>
                    </a>
                </li>
                <li>
                    <a href="/about" className="hover:text-blue-300">About</a>
                </li>
                <li>
                    <a href="/services" className="hover:text-blue-300">Services</a>
                </li>
                <li>
                    <a href="/packages" className="hover:text-blue-300">Packages</a>
                </li>
                <li>
                    <a href="/portfolio" className="hover:text-blue-300">Portfolio</a>
                </li>
                <li>
                    <a href="/contact" className="hover:text-blue-300">Contact</a>
                </li>
            </ul>

            {/* زر "Start Now" */}
            <div>
                <a
                    href="/start"
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-full shadow-md hover:opacity-90 transition-all"
                >
                    Start Now
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
