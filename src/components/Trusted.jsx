import React from "react";

const Trusted = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-center mb-8 text-[#696984] text-lg font-medium">
        Trusted by 5,000+ Companies Worldwide
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 justify-items-center">
        <img className="h-7" src="img/company/google.svg" />
        <img className="h-7" src="img/company/netflix.svg" />
        <img className="h-7" src="img/company/airbnb.svg" />
        <img
          className="h-7 transform translate-y-2"
          src="img/company/amazon.svg"
        />
        <img className="h-7" src="img/company/facebook.svg" />
        <img className="h-7" src="img/company/grab.svg" />
      </div>
    </div>
  );
};

export default Trusted;
