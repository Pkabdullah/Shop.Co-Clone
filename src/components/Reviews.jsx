"use client"
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { RiStarSLine } from "react-icons/ri"
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
const CustomerTestimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const testimonials = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 5,
      review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 5,
      review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
    },
    {
      id: 3,
      name: "Sarah M.",
      rating: 5,
      review: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <RiStarSLine
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">OUR HAPPY CUSTOMERS</h2>
          <div className="flex gap-4 items-center">
            <button className="p-2 rounded-full transition-colors hover:bg-gray-100">
              <FaChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 rounded-full transition-colors hover:bg-gray-100">
              <FaChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3"data-aos="zoom-in-up">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-6 bg-white rounded-2xl border border-gray-200 transition-shadow hover:shadow-lg">
              {/* Stars */}
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Customer Name with Verified Badge */}
              <div className="flex gap-2 items-center mb-4">
                <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                <div className="flex justify-center items-center w-5 h-5 bg-green-500 rounded-full">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              
              {/* Review Text */}
              <p className="leading-relaxed text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
