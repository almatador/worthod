import React from 'react';
import { useLanguage } from '../../../contnt/LanguageContext';
import Hero from '../../../Layouts/hero';
import Project from '../../../Layouts/project';
import Services from '../../../Layouts/servies';
import Pricing from '../../../Layouts/plan';
import Services2 from '../../../Layouts/servies2';
import Update from '../../../Layouts/updeta';
import Contct from '../../../Layouts/contct';

const Homepage = () => {
    const { language } = useLanguage(); // الحصول على اللغة الحالية

    return (
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
            <Hero language={language} />
            <div className="my-20"></div>
            <Services language={language} />
            <div className="my-20"></div>
            <Services2 language={language} />
            <div className="my-20"></div>
            <Project language={language} />
            <div className="my-20"></div>
            <Pricing language={language} />
            <div className="my-20"></div>
            <Update language={language} />
            <div className="my-20"></div>
            <Contct language={language} />
        </div>
    );
};

export default Homepage;
