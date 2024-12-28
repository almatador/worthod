import React from 'react';
import Hero from '../../../Layouts/hero';
import Project from '../../../Layouts/project';
import Services from '../../../Layouts/servies';
import Pricing from '../../../Layouts/plan';
import Services2 from '../../../Layouts/servies2';
import Update from '../../../Layouts/updeta';
import Contct from '../../../Layouts/contct';
const Homepage = () => {
    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8"> {/* تعديل الحاوية */}
            <Hero />
            <div className="my-20"></div> {/* مسافة 200 بيكسل */}
            <Services />
            <div className="my-20"></div> {/* مسافة 200 بيكسل */}
            <Services2 />
            <div className="my-20"></div> {/* مسافة 200 بيكسل */}
            <Project />
            <div className="my-20"></div> {/* مسافة 200 بيكسل */}
            <Pricing />
            <div className="my-20"></div> {/* مسافة 200 بيكسل */}
            <Update />
            <div className="my-20"></div> {/* مسافة 200 بيكسل */}
            <Contct />          
        </div>
    );
};

export default Homepage;
