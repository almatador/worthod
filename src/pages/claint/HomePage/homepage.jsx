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
            <div className='w-10'></div>
            <Services/>
            <div className='w-10'></div>
            <Services2/>
            <div className='w-10'></div>
            <Project />
            <div className='w-10'></div>
            <Pricing/>
        </div>
    );
};

export default Homepage;
