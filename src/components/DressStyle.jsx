"use client"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import React from 'react';

const styles = [
  { name: 'Casual', image: '/images/dress-style-1.png' },
  { name: 'Formal', image: '/images/dress-style-2.png' },
  { name: 'Party', image: '/images/dress-style-3.png' },
  { name: 'Gym', image: '/images/dress-style-4.png' },
];

const DressStyle = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="px-4 py-12 mx-auto max-w-6xl bg-gray-100 rounded-3xl">
      <h2 className="mb-10 text-3xl font-black text-center text-gray-900 sm:text-5xl">
        BROWSE BY DRESS STYLE
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {styles.map((style, index) => (
          <div
            key={index}
            className="overflow-hidden relative bg-white rounded-xl shadow transition-shadow duration-300 hover:shadow-lg"data-aos="fade-up"
          >
            <img
              src={style.image}
              alt={style.name}
              className="object-cover w-full h-48 sm:h-60 md:h-64"
            />
            <div className="absolute top-4 left-4 text-3xl font-semibold text-black">
              {style.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DressStyle;
