import React from 'react';

const ViewServices = ({ icon, text, size = '100px' }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`mb-4 flex justify-center items-center`}
        style={{ width: size, height: size }}
      >
        <img src={icon} alt={text} className="object-contain" />
      </div>
      <span className="text-[#120C1C] text-4xl font-semibold font-Tajawal text-left" style={{ fontSize: '24px', fontWeight: 500, lineHeight: '28.8px', textDecorationSkipInk: 'none', textUnderlinePosition: 'from-font' }}>{text}</span>
    </div>
  );
};

export default ViewServices;
