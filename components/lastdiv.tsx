import React from 'react';

const LastDiv: React.FC = () => {
  return (
    <section className="py-16 px-4  lg:px-[100px] lg:ml-[20px] flex flex-col lg:flex-row items-center justify-between ">
      {/* Left Side Content */}
      <div className="text-white text-center lg:text-left mb-6 lg:mb-0">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Contact us for the service you want to use
        </h2>
      </div>

      {/* Right Side Button */}
      <div>
        <button className="bg-[#9EFF00] hover:bg-green-500 font-bold text-black px-6 py-3 rounded">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default LastDiv;
