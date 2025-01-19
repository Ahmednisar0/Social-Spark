'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="flex flex-col lg:flex-row h-[1000px] items-center lg:h-screen justify-between p-10 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/bghome.png)' }}
    >
      {/* Left Side Content with Motion */}
      <motion.div
        className="text-white lg:ml-[100px] max-w-lg"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Building Brands Title */}
        <h1 className="text-4xl  font-bold">
          Building Brands with Exceptional Design, Development, and Marketing
        </h1>

        {/* Description */}
        <p className="text-[16px] mt-10 text-gray-300">
          Social Spark Enver Studio is a full-service digital studio offering a range of solutions, including UI/UX design, web development, and digital marketing. We are dedicated to delivering exceptional services that help bring your digital vision to life.
        </p>

        {/* Button */}



  <button className="bg-[#9EFF00] mt-10 font-bold text-black px-6 py-3 rounded hover:bg-green-500">
    Our Services
  </button>


      </motion.div>

      {/* Right Side Image with Motion */}
      <motion.div
        className="w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/Herosecpic.png"
          width={578}
          height={547}
          alt="Hero"
          className=" hidden lg:block"
        />
    <div className=' ml-[-106px] h-[400px]   lg:hidden w-[400px] '> <img
  src="/images/Herosecpic.png"
 
  alt="Hero"
  className=" w-full h-full block lg:hidden"
/>
</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
