// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className='text-gray-600 body-font'>
//       <div className='container flex flex-wrap px-5 py-10 mx-auto sm:py-12'>
//         <div className='flex justify-center w-full mb-8 text-xl font-medium tracking-tight sm:text-3xl sm:font-extralarge text-slate-900 md:mb-10 sm:text-center'>
//           WHY CHOOSE US ?
//         </div>
//         <div className='flex flex-wrap w-full'>
//           <div className='lg:w-2/5 md:w-1/2 md:pr-10 md:py-10'>
//             <div className='relative flex pb-12'>
//               <div className='absolute inset-0 flex items-center justify-center w-10 h-full'>
//                 <div className='w-1 h-full bg-gray-200 pointer-events-none'></div>
//               </div>
//               <div className='relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-orange'>
//                 <svg
//                   fill='none'
//                   stroke='currentColor'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   className='w-5 h-5'
//                   viewBox='0 0 24 24'
//                 >
//                   <path d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'></path>
//                 </svg>
//               </div>
//               <div className='flex-grow pl-4'>
//                 <h2 className='mb-1 text-sm font-bold tracking-wider title-font text-slate-900'>
//                   Assured Bikes
//                 </h2>
//                 <p className='leading-relaxed'>
//                   Bikes that are assured with wheel-street will be one of the
//                   highest possible quality.
//                 </p>
//               </div>
//             </div>
//             <div className='relative flex pb-12'>
//               <div className='absolute inset-0 flex items-center justify-center w-10 h-full'>
//                 <div className='w-1 h-full bg-gray-200 pointer-events-none'></div>
//               </div>
//               <div className='relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-orange'>
//                 <svg
//                   fill='none'
//                   stroke='currentColor'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   className='w-5 h-5'
//                   viewBox='0 0 24 24'
//                 >
//                   <path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
//                 </svg>
//               </div>
//               <div className='flex-grow pl-4'>
//                 <h2 className='mb-1 text-sm font-bold tracking-wider title-font text-slate-900'>
//                   Lowest Price Guarantee
//                 </h2>
//                 <p className='leading-relaxed'>
//                   Get all your favourite bikes for rent at the lowest possible
//                   price on the bike rental market.
//                 </p>
//               </div>
//             </div>

//             <div className='relative flex'>
//               <div className='relative z-10 inline-flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-full bg-orange'>
//                 <svg
//                   fill='none'
//                   stroke='currentColor'
//                   strokeLinecap='round'
//                   strokeLinejoin='round'
//                   strokeWidth='2'
//                   className='w-5 h-5'
//                   viewBox='0 0 24 24'
//                 >
//                   <path d='M22 11.08V12a10 10 0 11-5.93-9.14'></path>
//                   <path d='M22 4L12 14.01l-3-3'></path>
//                 </svg>
//               </div>
//               <div className='flex-grow pl-4'>
//                 <h2 className='mb-1 text-sm font-bold tracking-wider title-font text-slate-900'>
//                   One Stop Shop
//                 </h2>
//                 <p className='leading-relaxed'>
//                   Be it everyday commute, road trips, riding gears, and
//                   maintenance - we have them all.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <img
//             className='object-center mt-12 rounded-lg lg:w-3/5 md:w-1/2 object-fit md:mt-0'
//             src='../images/scooter.jpg'
//             alt='scooter'
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;




// import React from "react";
// import { Card } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBicycle, faUsers, faCheckCircle, faTags, faStore, faHandshake, faThumbsUp, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

// const AboutUs = () => {
//   return (
//     <div className="bg-gradient-to-b from-pink-200 to-white min-h-screen p-10">
//       {/* Header Section */}
//       <div className="flex items-center justify-between bg-pink-400 text-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-4xl font-bold">About Us</h1>
//       </div>

//       {/* Main Section */}
//       <div className="grid md:grid-cols-2 gap-8 mt-10">
//         {/* Left Section - Image */}
//         <div className="flex items-center justify-center">
//           <img
//             src="/images/aboutus.jpg"
//             alt="About Us"
//             className="rounded-lg shadow-lg w-full max-w-lg"
//           />
//         </div>

//         {/* Right Section - Content */}
//         <div className="flex flex-col justify-center space-y-4">
//           <h2 className="text-2xl font-semibold">Our Mission</h2>
//           <p className="text-gray-700 leading-relaxed">
//             At Bike-4-Rent, we aim to provide the best rental experience for all
//             our customers, ensuring safety, affordability, and convenience.
//           </p>
//           <div className="flex space-x-6">
//             <div className="flex items-center space-x-2">
//               <FontAwesomeIcon icon={faBicycle} className="text-pink-400 text-3xl" />
//               <div>
//                 <h3 className="text-lg font-bold">+ 500 Bikes</h3>
//                 <p className="text-sm text-gray-500">Available for rent</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2">
//               <FontAwesomeIcon icon={faUsers} className="text-pink-400 text-3xl" />
//               <div>
//                 <h3 className="text-lg font-bold">+ 1000 Customers</h3>
//                 <p className="text-sm text-gray-500">Served with care</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-6">Why Choose Us?</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           <div className="flex flex-col items-center text-center">
//             <FontAwesomeIcon icon={faStore} className="text-pink-400 text-4xl mb-3" />
//             <h3 className="text-lg font-bold">One Stop Shop</h3>
//             <p className="text-sm text-gray-600">All your rental needs in one place.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <FontAwesomeIcon icon={faTags} className="text-pink-400 text-4xl mb-3" />
//             <h3 className="text-lg font-bold">Lowest Price Guarantee</h3>
//             <p className="text-sm text-gray-600">Affordable rates for everyone.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <FontAwesomeIcon icon={faCheckCircle} className="text-pink-400 text-4xl mb-3" />
//             <h3 className="text-lg font-bold">Assured Bikes</h3>
//             <p className="text-sm text-gray-600">Top-quality bikes for every ride.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <FontAwesomeIcon icon={faHandshake} className="text-pink-400 text-4xl mb-3" />
//             <h3 className="text-lg font-bold">Reliable Service</h3>
//             <p className="text-sm text-gray-600">Trustworthy and dependable.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <FontAwesomeIcon icon={faThumbsUp} className="text-pink-400 text-4xl mb-3" />
//             <h3 className="text-lg font-bold">Customer Satisfaction</h3>
//             <p className="text-sm text-gray-600">Your happiness is our priority.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <FontAwesomeIcon icon={faShieldAlt} className="text-pink-400 text-4xl mb-3" />
//             <h3 className="text-lg font-bold">Guaranteed Quality</h3>
//             <p className="text-sm text-gray-600">Excellence in every service.</p>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default AboutUs;



// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBicycle,
//   faUsers,
//   faCheckCircle,
//   faTags,
//   faStore,
//   faHandshake,
//   faThumbsUp,
//   faShieldAlt,
// } from "@fortawesome/free-solid-svg-icons";

// const AboutUs = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     setAnimate(true);
//   }, []);

//   return (
//     <div className="bg-gradient-to-b from-pink-200 to-white min-h-screen p-10">
//       {/* Header Section */}
//       <div
//         className={`${
//           animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
//         } transform transition-all duration-700 ease-out flex items-center justify-between bg-pink-400 text-white p-6 rounded-lg shadow-lg`}
//       >
//         <h1 className="text-4xl font-bold hover:scale-105 transition-transform duration-300">
//           About Us
//         </h1>
//       </div>

//       {/* Main Section */}
//       <div className="grid md:grid-cols-2 gap-8 mt-10">
//         {/* Left Section - Image */}
//         <div
//           className={`${
//             animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
//           } transform transition-all duration-700 ease-out flex items-center justify-center`}
//         >
//           <img
//             src="/images/aboutus.jpg"
//             alt="About Us"
//             className="rounded-lg shadow-lg w-full max-w-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Right Section - Content */}
//         <div
//           className={`${
//             animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
//           } transform transition-all duration-700 ease-out flex flex-col justify-center space-y-4`}
//         >
//           <h2 className="text-2xl font-semibold hover:text-pink-500 transition-colors duration-300">
//             Our Mission
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             At Bike-4-Rent, we aim to provide the best rental experience for all
//             our customers, ensuring safety, affordability, and convenience.
//           </p>
//           <div className="flex space-x-6">
//             <div className="flex items-center space-x-2 group">
//               <FontAwesomeIcon
//                 icon={faBicycle}
//                 className="text-pink-400 text-3xl group-hover:scale-110 transition-transform duration-300"
//               />
//               <div>
//                 <h3 className="text-lg font-bold group-hover:text-pink-500 transition-colors duration-300">
//                   + 500 Bikes
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   Available for rent
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 group">
//               <FontAwesomeIcon
//                 icon={faUsers}
//                 className="text-pink-400 text-3xl group-hover:scale-110 transition-transform duration-300"
//               />
//               <div>
//                 <h3 className="text-lg font-bold group-hover:text-pink-500 transition-colors duration-300">
//                   + 1000 Customers
//                 </h3>
//                 <p className="text-sm text-gray-500">
//                   Served with care
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div
//         className={`${
//           animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         } transform transition-all duration-700 ease-out mt-10 bg-white p-6 rounded-lg shadow-lg`}
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6 hover:text-pink-500 transition-colors duration-300">
//           Why Choose Us?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             { icon: faStore, title: "One Stop Shop", desc: "All your rental needs in one place." },
//             { icon: faTags, title: "Lowest Price Guarantee", desc: "Affordable rates for everyone." },
//             { icon: faCheckCircle, title: "Assured Bikes", desc: "Top-quality bikes for every ride." },
//             { icon: faHandshake, title: "Reliable Service", desc: "Trustworthy and dependable." },
//             { icon: faThumbsUp, title: "Customer Satisfaction", desc: "Your happiness is our priority." },
//             { icon: faShieldAlt, title: "Guaranteed Quality", desc: "Excellence in every service." },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center group hover:bg-pink-100 p-4 rounded-lg transition-all duration-300"
//             >
//               <FontAwesomeIcon
//                 icon={item.icon}
//                 className="text-pink-400 text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
//               />
//               <h3 className="text-lg font-bold group-hover:text-pink-500 transition-colors duration-300">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-gray-600">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
// import React, { useEffect, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faBicycle,
//   faUsers,
//   faCheckCircle,
//   faTags,
//   faStore,
//   faHandshake,
//   faThumbsUp,
//   faShieldAlt,
//   faUsersGear,
// } from "@fortawesome/free-solid-svg-icons";

// const AboutUs = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     setAnimate(true);
//   }, []);

//   return (
//     <div className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen">
//       {/* Header Section */}
//       {/* <div
//         className={`${
//           animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
//         } transform transition-all duration-700 ease-out flex items-center justify-center space-x-4 p-6 rounded-lg shadow-lg `}
//       >
        
       
//         <h1 className={`text-4xl md:text-5xl font-extrabold text-orange-900 text-center transition-all duration-700 ${animate ? "opacity-100 translate-y-0 scale-110" : "opacity-0 translate-y-10 scale-90"}`}>
//               <FontAwesomeIcon icon={faUsersGear} className="text-orange-800 mr-2" />
//                 About Us
//               </h1>
//       </div> */}
//       {/* <div
//         className={`${
//           animate ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
//         } transform transition-all duration-700 ease-out flex flex-col items-center justify-center p-6 rounded-lg shadow-lg`}
//       >
//         <h1
//           className={`text-4xl  font-extrabold text-orange-900 text-center transition-all duration-700 ${
//             animate ? "opacity-100 translate-y-0 scale-110" : "opacity-0 translate-y-10 scale-90"
//           }`}
//         >
//           <FontAwesomeIcon icon={faUsersGear} className="text-orange-800 mr-2" />
//           About Us
//         </h1>
       
//       </div> */}
//       {/* <div
//         className={`text-center pt-8 pb-8  transform transition-all duration-700 ${
//           animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
        
//         <h2 className="text-4xl font-extrabold tracking-tight text- text-orange-900">
//         <FontAwesomeIcon icon={faUsersGear} className="text-orange-800 mr-2" />
//           About Us
//         </h2>
//         <p className="text-[#5a4239] mt-2">
//         Discover who we are
//         </p>
//       </div> */}
//       <div
//   className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
//     animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//   } flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg`}
// >
//   {/* Heading */}
//   <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
//     <FontAwesomeIcon icon={faUsersGear} className="text-orange-800 mr-2" />
//     Get to Know Us
//   </h2>
  
//   {/* Subtext */}
//   <p
//     className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
//       animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//     }`}
//   >
//      Discover who we are
//   </p>
// </div>


//       {/* Main Section */}
//       <div className="grid md:grid-cols-2 gap-8 mt-10">
//         {/* Left Section - Image */}
//         <div
//           className={`${
//             animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
//           } transform transition-all duration-700 ease-out flex items-center justify-center`}
//         >
//           <img
//             src="/images/aboutus.jpg"
//             alt="About Us"
//             className="rounded-lg shadow-lg w-full max-w-lg hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         {/* Right Section - Content */}
//         <div
//           className={`${
//             animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
//           } transform transition-all duration-700 ease-out flex flex-col justify-center space-y-4`}
//         >
//           <h2 className="text-2xl font-semibold text-[#733F30] hover:text-[#8B4D3A] transition-colors duration-300">
//             Our Mission
//           </h2>
//           <p className="text-[#5a4239] leading-relaxed">
//             At Bike-4-Rent, we aim to provide the best rental experience for all
//             our customers, ensuring safety, affordability, and convenience.
//           </p>
//           <div className="flex space-x-6">
//             <div className="flex items-center space-x-2 group">
//               <FontAwesomeIcon
//                 icon={faBicycle}
//                 className="text-[#A15E48] text-3xl group-hover:scale-110 transition-transform duration-300"
//               />
//               <div>
//                 <h3 className="text-lg font-bold group-hover:text-[#8B4D3A] transition-colors duration-300">
//                   + 50 Bikes
//                 </h3>
//                 <p className="text-sm text-[#5a4239]">Available for rent</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 group">
//               <FontAwesomeIcon
//                 icon={faUsers}
//                 className="text-[#A15E48] text-3xl group-hover:scale-110 transition-transform duration-300"
//               />
//               <div>
//                 <h3 className="text-lg font-bold group-hover:text-[#8B4D3A] transition-colors duration-300">
//                   + 100 Customers
//                 </h3>
//                 <p className="text-sm text-[#5a4239]">Served with care</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Why Choose Us Section */}
//       <div
//         className={`${
//           animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         } transform transition-all duration-700 ease-out mt-10 bg-[#DCA689]  p-6 rounded-lg shadow-lg`}
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6 text-[#733F30] hover:text-[#8B4D3A] transition-colors duration-300">
//           Why Choose Us?
//         </h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             { icon: faStore, title: "One Stop Shop", desc: "All your rental needs in one place." },
//             { icon: faTags, title: "Lowest Price Guarantee", desc: "Affordable rates for everyone." },
//             { icon: faCheckCircle, title: "Assured Bikes", desc: "Top-quality bikes for every ride." },
//             { icon: faHandshake, title: "Reliable Service", desc: "Trustworthy and dependable." },
//             { icon: faThumbsUp, title: "Customer Satisfaction", desc: "Your happiness is our priority." },
//             { icon: faShieldAlt, title: "Guaranteed Quality", desc: "Excellence in every service." },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center group bg-[#fff7f0] hover:bg-[#FFD9A0] p-4 rounded-lg transition-all duration-300"
//             >
//               <FontAwesomeIcon
//                 icon={item.icon}
//                 className="text-[#A15E48] text-4xl mb-3 group-hover:scale-110 transition-transform duration-300"
//               />
//               <h3 className="text-lg font-bold group-hover:text-[#8B4D3A] transition-colors duration-300">
//                 {item.title}
//               </h3>
//               <p className="text-sm text-[#5a4239]">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faUsers,
  faCheckCircle,
  faTags,
  faStore,
  faHandshake,
  faThumbsUp,
  faShieldAlt,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div
        className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } flex flex-col items-center space-y-4 p-4 sm:p-6 rounded-lg shadow-lg`}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-orange-900">
          <FontAwesomeIcon icon={faUsersGear} className="text-orange-800 mr-2" />
          Get to Know Us
        </h2>
        
        <p
          className={`text-[#5a4239] text-base sm:text-lg mt-2 transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Discover who we are
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 sm:px-0">
        {/* Left Section - Image */}
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } transform transition-all duration-700 ease-out flex items-center justify-center order-1 md:order-none`}
        >
          <img
            src="/images/aboutus.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full max-w-md md:max-w-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Section - Content */}
        <div
          className={`${
            animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          } transform transition-all duration-700 ease-out flex flex-col justify-center space-y-4 px-4 sm:px-0`}
        >
          <h2 className="text-2xl font-semibold text-[#733F30] hover:text-[#8B4D3A] transition-colors duration-300">
            Our Mission
          </h2>
          <p className="text-[#5a4239] leading-relaxed">
            At RideEase, we aim to provide the best rental experience for all
            our customers, ensuring safety, affordability, and convenience.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-2 group">
              <FontAwesomeIcon
                icon={faBicycle}
                className="text-[#A15E48] text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#8B4D3A] transition-colors duration-300">
                  + 50 Bikes
                </h3>
                <p className="text-sm text-[#5a4239]">Available for rent</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 group">
              <FontAwesomeIcon
                icon={faUsers}
                className="text-[#A15E48] text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#8B4D3A] transition-colors duration-300">
                  + 100 Customers
                </h3>
                <p className="text-sm text-[#5a4239]">Served with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div
        className={`${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } transform transition-all duration-700 ease-out mt-10 bg-[#DCA689] p-4 sm:p-6 rounded-lg shadow-lg mx-4 sm:mx-0`}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-[#733F30] hover:text-[#8B4D3A] transition-colors duration-300">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            { icon: faStore, title: "One Stop Shop", desc: "All your rental needs in one place." },
            { icon: faTags, title: "Lowest Price Guarantee", desc: "Affordable rates for everyone." },
            { icon: faCheckCircle, title: "Assured Bikes", desc: "Top-quality bikes for every ride." },
            { icon: faHandshake, title: "Reliable Service", desc: "Trustworthy and dependable." },
            { icon: faThumbsUp, title: "Customer Satisfaction", desc: "Your happiness is our priority." },
            { icon: faShieldAlt, title: "Guaranteed Quality", desc: "Excellence in every service." },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group bg-[#fff7f0] hover:bg-[#FFD9A0] p-3 sm:p-4 rounded-lg transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-[#A15E48] text-3xl sm:text-4xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-base sm:text-lg font-bold group-hover:text-[#8B4D3A] transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5a4239]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;