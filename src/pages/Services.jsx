
import React from 'react';

const Services = () => {
  return (
    <section className="text-gray-600 body-font bg-white">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            All Services You Need
            <br className="hidden lg:inline-block" /> Is Here
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Sweet dishes bring joy and comfort with every bite.
            From rich cheesecakes to flaky croissants, each treat offers a moment of bliss.
            Savor chocolate truffles or enjoy refreshing fruit tarts, and indulge your sweet
            tooth with unforgettable flavors.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src='src/assets/Images/Image2.jpg' />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="src/assets/Images/Image3.jpg" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="src/assets/Images/Image4.jpg" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="gallery" className="w-full h-full object-cover object-center block" src="src/assets/Images/Image5.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="src/assets/Images/Image6.jpg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="gallery" className="w-full object-cover h-full object-center block" src="src/assets/Images/Image7.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
