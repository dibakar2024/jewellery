import React from 'react';

const partlogos = [
  "src/assets/images/partner1.jpg",
  "src/assets/images/partner2.jpg",
  "src/assets/images/partner3.jpg",
  "src/assets/images/partner4.jpg",
  "src/assets/images/partner5.jpg",
  "src/assets/images/partner6.jpg",
  "src/assets/images/partner7.jpg",
  "src/assets/images/partner8.jpg",
  
];

function PartnerLogos() {

  return (
    <div className="w-full border-t-[2px] mt-8">
      <div className="overflow-hidden bg-white border-gray-200 my-16 max-w-screen-2xl mx-auto">
        <div className="flex animate-scroll-x w-max">
          {[...partlogos, ...partlogos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-6">
              <img src={logo} alt={`Partner ${index}`} className="object-contain h-36" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PartnerLogos;
