import React from 'react';
import Hero from '../../../Layouts/hero';
import Project from '../../../Layouts/project';
import Services from '../../../Layouts/servies';
import Pricing from '../../../Layouts/plan';
import Services2 from '../../../Layouts/servies2';
import Update from '../../../Layouts/updeta';
const Homepage = () => {
    return (
        <div className='container mx-auto px-4'>
            <Hero />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Services />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Services2 />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Project />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Pricing />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Update />
        </div>
    );
};

export default Homepage;
