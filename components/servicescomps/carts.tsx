// pages/services.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

interface Service {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ServiceCategory {
  title: string;
  description: string;  // Added description field for each category
  services: Service[];
}

const ServicesPage: React.FC = () => {
  const [servicesData, setServicesData] = useState<ServiceCategory[]>([]);

  useEffect(() => {
    const fetchServicesData = async () => {
      try {
        const response = await fetch('/api/services');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ServiceCategory[] = await response.json();
        setServicesData(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchServicesData();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-[#93b858e0] min-h-screen">
      <div className="container w-full justify-center flex items center mx-auto px-4 py-8">
        {servicesData.map((category) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="my-8"
          >
            {/* Category Title and Description */}
            <div className="flex justify-between lg:w-[1100px] mb-[30px] lg:flex-row flex-col">
              <motion.h2
                className="text-3xl lg:w-[500px] lg:mt-7 text-white font-bold"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {category.title}
              </motion.h2>
              <p className="text-gray-400 lg:w-[550px] mt-4 lg:mt-0 h-[70px] text-sm">
                {category.description}
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:w-[1100px] gap-6">
              {category.services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white mt-[40px] p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img src={service.image} alt={service.name} className="lg:w-[330px] h-auto rounded-lg" />
                  <div className="flex space-x-2 mt-4">
                    <div className="w-4 h-4 mt-[5px] bg-blue-500 rounded-full"></div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 lg:h-[70px] mb-4">{service.description}</p>
                  <button className="flex items-center border border-black px-4 py-2 text-black font-semibold hover:bg-black hover:text-white rounded-md">
                    View More
                    <FaArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
