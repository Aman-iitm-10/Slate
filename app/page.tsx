"use client";
import Link from "next/link"
import "../styles/section.css"
import image from "../public/6709673.png"

import React, { useState } from 'react';
import faqData from './faq_data.json';
import InfiniteSlider from "./reviews"
import FAQComponent from "./faqs"
import Footer from "./components/Footer"; 

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="container mx-auto">

    <div className="flex one-page-section">
      <div className="one-page-section__content">
        <h1 className="text-4xl font-bold mb-4">Empower your child's future</h1>
        <p className="text-xl mb-6">We provide tailored solutions that enhance children's safety, learning, and overall development in the digital landscape.</p>
        <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Learn More
        </Link>
      </div>
      <div className="one-page-section__image">
        <img src="/6709673.png"width ="100%" alt="Company Image" />
      </div>
    </div>
 
      <div className="grid one-page-section1 grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-gray-200 ease-in-left dark:bg-gray-700 w-full aspect-video rounded-lg flex items-center justify-center">
          <p className="text-xl font-semibold">Company Image</p>
        </div>
        <div className="ease-in-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to Slate</h1>
          <p className="text-xl mb-6">Slate is an innovative startup incubated at Nirmaan, IIT Madras, dedicated to empowering parents and schools. We provide tailored solutions that enhance children's safety, learning, and overall development in the digital landscape. Based in Chennai, we understand the challenges faced by families and educational institutions today. Our mission is to create personalized digital experiences that foster growth and security, ensuring that every child reaches their full potential in a connected world.</p>
          <Link href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </Link>
        </div>
        
      </div>


      <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-3">
      <div className="md:col-span- sm:col-span-3 sm:mt-8">
          <InfiniteSlider />
        </div>
        <div className="md:col-span-3  sm:col-span-3 ">
          <FAQComponent />
        </div>
        
      
      </div>
      <Footer />
    </div>
  )
}

