import React from 'react';
import projectpng from './../../../../public/assets/Images/profile.jpg';

const services = [
  {
    title: 'خدمة 1',
    description: 'وصف مفصل عن الخدمة 1.',
    image: projectpng,
  },
  {
    title: 'خدمة 2',
    description: 'وصف مفصل عن الخدمة 2.',
    image: projectpng,
  },
  {
    title: 'خدمة 3',
    description: 'وصف مفصل عن الخدمة 3.',
    image: projectpng,
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-indigo-600 text-4xl font-semibold mb-12 text-center">الخدمات التي نقدمها</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
