// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const array = [
//     {
//       heading: "Near-by Attractions",
//       links: [
//         { name: "Fatehsagar lake", href: "https://en.wikipedia.org/wiki/Fateh_Sagar_Lake", target: '_blank' },
//         { name: "City Palace",href : "https://en.wikipedia.org/wiki/City_Palace,_Udaipur", target: '_blank' },
//         { name: "Ambrai Ghat" , href: "https://en.wikipedia.org/wiki/Ambrai_Ghat", target: '_blank' },
//         { name: "Sajjangarh Monsoon Palace" , href :"https://en.wikipedia.org/wiki/Monsoon_Palace", target: '_blank'},
//       ],
//     },

//     {
//       heading: "Quick links",
//       links: [
//         { name: "Home", href: "/" },
//         { name: "Categories", href: "/bikecategory" },
//         { name: "Reviews", href: "/reviews" },
//         { name: "Contact Us", href: "/contact" },
//       ],
//     },
//     {
//       heading: "Contact info",
//       links: [
//         { name: "9829244434" },
//         { name: "9334562344" },
//         { name: "udaipurtaxihire@gmail.com" },
//         { name: "Udaipur, Rajasthan" },
//       ],
//     },
//   ];
//   return (
//     <footer className='text-gray-600 body-font'>
//       <div className='container flex flex-col flex-wrap px-5 mx-auto sm:py-20 md:items-end lg:items-center md:flex-row md:flex-nowrap'>
//         <div className='flex-shrink-0 w-32 mx-auto text-center sm:w-64 md:mx-0 md:text-left'>
//           <img
//             className='flex items-center justify-center font-medium text-gray-900 title-font md:justify-start'
//             src='../images/BikeForRentFinalLogo.png'
//           />

//           <p className='mt-2 text-sm text-slate-900'>
//             Experience the freedom of two-wheeled exploration with us.
//           </p>
//         </div>
//         <div className='flex flex-wrap flex-grow mt-10 -mb-10 text-center md:mt-0 md:text-left'>
//           {array.map((array, index) => {
//             return (
//               <div
//                 className='w-full px-4 text-center lg:w-1/3 md:w-1/2'
//                 key={index}
//               >
//                 <h2 className='mb-3 text-base font-medium tracking-widest title-font text-orange'>
//                   {array.heading}
//                 </h2>
//                 <nav className='mb-10 list-none'>
//                   {array.links.map((link, index) => {
//                     return (
//                       <li key={index}>
//                         <Link
//                           className='text-base font-medium text-slate-900 hover:text-gray-800'
//                           to={link.href}
//                           target={link.target}
//                         >
//                           {link.name}
//                         </Link>
//                       </li>
//                     );
//                   })}
//                 </nav>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <div className='bg-gray-100'>
//         <div className='container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row'>
//           <p className='text-sm text-center text-slate-900 sm:text-left'>
//             © 2020 Bike-4-Rent —
//             <a
//               href='https://twitter.com/knyttneve'
//               rel='noopener noreferrer'
//               className='ml-1 text-slate-900'
//               target='_blank'
//             >
//               All rights reserved.
//             </a>
//           </p>
//           <span className='inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start'>
//             <a className='text-slate-900'>
//               <svg
//                 fill='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 className='w-5 h-5'
//                 viewBox='0 0 24 24'
//               >
//                 <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
//               </svg>
//             </a>
//             <a className='ml-3 text-slate-900'>
//               <svg
//                 fill='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 className='w-5 h-5'
//                 viewBox='0 0 24 24'
//               >
//                 <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
//               </svg>
//             </a>
//             <a className='ml-3 text-slate-900'>
//               <svg
//                 fill='none'
//                 stroke='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 className='w-5 h-5'
//                 viewBox='0 0 24 24'
//               >
//                 <rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
//                 <path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
//               </svg>
//             </a>
//             <a className='ml-3 text-slate-900'>
//               <svg
//                 fill='currentColor'
//                 stroke='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='0'
//                 className='w-5 h-5'
//                 viewBox='0 0 24 24'
//               >
//                 <path
//                   stroke='none'
//                   d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
//                 ></path>
//                 <circle cx='4' cy='4' r='2' stroke='none'></circle>
//               </svg>
//             </a>
//           </span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { Link } from "react-router-dom";
import { Divider, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faMapMarkerAlt, 
  faPhone, 
  faEnvelope,
  faBiking
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const { Text, Title } = Typography;

const Footer = () => {
  const footerLinks = [
    {
      heading: "Explore Udaipur",
      links: [
        { name: "Fatehsagar Lake", href: "https://en.wikipedia.org/wiki/Fateh_Sagar_Lake", target: '_blank', icon: faMapMarkerAlt },
        { name: "City Palace", href: "https://en.wikipedia.org/wiki/City_Palace,_Udaipur", target: '_blank', icon: faMapMarkerAlt },
        { name: "Ambrai Ghat", href: "https://en.wikipedia.org/wiki/Ambrai_Ghat", target: '_blank', icon: faMapMarkerAlt },
        { name: "Sajjangarh Palace", href: "https://en.wikipedia.org/wiki/Monsoon_Palace", target: '_blank', icon: faMapMarkerAlt },
      ],
    },
    {
      heading: "Quick Links",
      links: [
        { name: "Home", href: "/", icon: faBiking },
        { name: "Our Fleet", href: "/bikecategory", icon: faBiking },
        { name: "Testimonials", href: "/reviews", icon: faBiking },
        { name: "Contact Us", href: "/contact", icon: faBiking },
      ],
    },
    {
      heading: "Contact Us",
      links: [
        { name: "+91 9829244434", href: "tel:+919829244434", icon: faPhone },
        { name: "+91 9334562344", href: "tel:+919334562344", icon: faPhone },
        { name: "udaipurtaxihire@gmail.com", href: "mailto:udaipurtaxihire@gmail.com", icon: faEnvelope },
        { name: "Udaipur, Rajasthan", icon: faMapMarkerAlt },
      ],
    },
  ];

  const socialLinks = [
    { icon: faFacebook, href: "#" },
    { icon: faTwitter, href: "#" },
    { icon: faInstagram, href: "#" },
    { icon: faLinkedin, href: "#" },
  ];

  return (
    <footer className="bg-[#3f281f] text-[#fff7f0]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faBiking} className="text-[#FFD9A0] text-3xl mr-2" />
              <Title level={4} className="!text-[#fff7f0] !m-0">RideEase</Title>
            </div>
            <Text className="text-[#DCA689]">
              Experience the freedom of two-wheeled exploration with premium bikes in the heart of Udaipur.
            </Text>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#DCA689] hover:text-[#fff7f0] transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <Title level={5} className="!text-[#fff7f0] !mb-4 !font-semibold">
                {section.heading}
              </Title>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href ? (
                      <Link
                        to={link.href}
                        target={link.target}
                        className="flex items-center text-[#DCA689] hover:text-[#fff7f0] transition-colors duration-300"
                      >
                        {link.icon && <FontAwesomeIcon icon={link.icon} className="mr-2 text-[#A15E48]" />}
                        {link.name}
                      </Link>
                    ) : (
                      <div className="flex items-center text-[#DCA689]">
                        {link.icon && <FontAwesomeIcon icon={link.icon} className="mr-2 text-[#A15E48]" />}
                        {link.name}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Divider className="!border-[#733F30] !my-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Text className="text-[#DCA689] text-sm">
            Copyright {new Date().getFullYear()} BikeForRent. All rights reserved.
          </Text>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <Link to="/termsc" className="text-[#DCA689] hover:text-[#fff7f0] text-sm transition-colors duration-300">
              Privacy Policy
            </Link> */}
            <Link to="/termsc" className="text-[#DCA689] hover:text-[#fff7f0] text-sm transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/faqs" className="text-[#DCA689] hover:text-[#fff7f0] text-sm transition-colors duration-300">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
