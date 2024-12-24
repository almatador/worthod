import React from 'react';
import Hero from '../../../Layouts/hero';
import Project from '../../../Layouts/project';
import Services from '../../../Layouts/servies';
import Pricing from '../../../Layouts/plan';
import Services2 from '../../../Layouts/servies2';

const Homepage = () => {
    return (
        <div>
            <Hero />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Services />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Services2 />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Project />
            <div className='my-20'></div> {/* مسافة 200 بيكسل */}
            <Pricing />
        </div>
    );
};

export default Homepage;
