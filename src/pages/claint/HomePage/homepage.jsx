import React from 'react';
import Hero from '../../../Layouts/hero';
import Project from '../../../Layouts/project';
import Services from '../../../Layouts/servies';
import Pricing from '../../../Layouts/plan';
const Homepage = () => {
    return (
        <div>
            <Hero />
            <Services/>
            <Project />
            <Pricing/>
        </div>
    );
};

export default Homepage;
