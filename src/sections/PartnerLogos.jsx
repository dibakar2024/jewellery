import React from 'react';

const partlogos = [
  "/assets/images/partner1.jpg",
  "/assets/images/partner2.jpg",
  "/assets/images/partner3.jpg",
  "/assets/images/partner4.jpg",
  "/assets/images/partner5.jpg",
  "/assets/images/partner6.jpg",
  "/assets/images/partner7.jpg",
  "/assets/images/partner8.jpg",
  
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
