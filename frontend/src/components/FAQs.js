

// import React, { useEffect, useState } from "react";
// import { Collapse, Input } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPersonCircleQuestion,
//   faInfoCircle,
//   faFileContract,
//   faWallet,
//   faMapMarkedAlt,
//   faUserShield,
// } from "@fortawesome/free-solid-svg-icons";

// const { Panel } = Collapse;
// const { Search } = Input;

// const FAQS = () => {
//   const [animate, setAnimate] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const faqCategoriesWithIcons = [
//     {
//       category: "General",
//       icon: faInfoCircle,
//       questions: [
//         {
//           question: "What is Bike-4-Rent?",
//           answer:
//             "Bike-4-Rent is a premium two-wheeler rental service that allows you to rent bikes with ease across the city.",
//         },
//         {
//           question: "What makes us special?",
//           answer:
//             "We offer assured quality bikes, lowest prices, flexible rental options, and excellent customer support.",
//         },
//         {
//           question: "How does Bike-4-Rent work?",
//           answer:
//             "You choose your bike, select dates, upload necessary documents, and pick up your ride at the designated location.",
//         },
//       ],
//     },
//     {
//       category: "Rental Policy",
//       icon: faFileContract,
//       questions: [
//         {
//           question: "What documents need to be uploaded?",
//           answer: "You will need a valid driver’s license and a government-issued ID proof.",
//         },
//         {
//           question: "Is fuel included in the tariff?",
//           answer: "No, fuel charges are not included in the rental tariff. The vehicle will be provided with minimal fuel.",
//         },
//         {
//           question: "Is there any limit on the number of kilometres?",
//           answer:
//             "No, we offer unlimited kilometres with our rentals unless specified otherwise.",
//         },
//         {
//           question: "Do I have to pay a deposit?",
//           answer: "Yes, a refundable deposit is required at the time of booking.",
//         },
//         {
//           question: "When can we expect the refund?",
//           answer:
//             "Refunds are processed within 24-48 hours after you return the bike.",
//         },
//         {
//           question: "Is there any penalty for late return?",
//           answer:
//             "Yes, late returns will incur additional charges as per the company policy.",
//         },
//       ],
//     },
//     {
//       category: "Booking & Cancellation",
//       icon: faWallet,
//       questions: [
//         {
//           question: "How do I cancel my booking?",
//           answer:
//             "You can cancel via your dashboard or contact our customer support team.",
//         },
//         {
//           question: "What is the cancellation policy?",
//           answer:
//             "Cancellations made 24 hours before the booking time will get a full refund.",
//         },
//       ],
//     },
//     {
//       category: "Pickup & Drop",
//       icon: faMapMarkedAlt,
//       questions: [
//         {
//           question: "Who should I contact to pick up the vehicle and how?",
//           answer:
//             "Our local partner details will be provided post booking confirmation.",
//         },
//         {
//           question: "Can I pick and drop the vehicle at different locations?",
//           answer:
//             "Yes, this option is available with extra fees for selected cities.",
//         },
//       ],
//     },
//     {
//       category: "Eligibility",
//       icon: faUserShield,
//       questions: [
//         {
//           question: "Is there any limit on the age of the rider?",
//           answer:
//             "Yes, the rider must be at least 18 years old and hold a valid driving license.",
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredFaqs = faqCategoriesWithIcons
//     .map((section) => ({
//       ...section,
//       questions: section.questions.filter((q) =>
//         q.question.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     }))
//     .filter((section) => section.questions.length > 0);

//   return (
//     <section
//       className={`max-w-7xl px-4 py-10 mx-auto transform transition-all duration-700 grid grid-cols-1 lg:grid-cols-3 gap-8 ${
//         animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       {/* FAQ Section */}
//       <div className="lg:col-span-2">
//         <div className="text-center pt-8 pb-8 flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg bg-[#fff7f0]">
//           <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
//             <FontAwesomeIcon
//               icon={faPersonCircleQuestion}
//               className="text-orange-800 mr-2"
//             />
//             Have Questions?
//           </h2>
//           <p className="text-[#5a4239] text-lg mt-2">
//             Explore Our FAQs for Quick Help.
//           </p>
//           <div className="w-full max-w-md mt-4">
//             <Search
//               placeholder="Search FAQs"
//               onChange={(e) => setSearchTerm(e.target.value)}
//               enterButton
//             />
//           </div>
//         </div>

//         {filteredFaqs.map((section, idx) => (
//           <div key={idx} className="mt-6">
//             <h3 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
//               <FontAwesomeIcon
//                 icon={section.icon}
//                 className="text-orange-800"
//               />
//               {section.category}
//             </h3>
//             <Collapse
//               accordion
//               bordered={false}
//               className="faq-collapse bg-[#fff7f0] rounded-lg shadow-md"
//               expandIconPosition="right"
//             >
//               {section.questions.map((item, qIdx) => (
//                 <Panel
//                   header={item.question}
//                   key={qIdx}
//                   className="hover:bg-orange-100 transition duration-300"
//                 >
//                   <p className="text-slate-700">{item.answer}</p>
//                 </Panel>
//               ))}
//             </Collapse>
//           </div>
//         ))}
//       </div>

//       {/* Side Panel */}
//       <aside className="space-y-8">
//         {/* Promotional Offers */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg">
//           <h3 className="text-2xl font-bold text-orange-900 mb-4">Promotional Offers</h3>
//           <ul className="list-disc pl-5 space-y-2 text-slate-700">
//             <li>Get 20% off on weekend bookings!</li>
//             <li>Flat ₹100 cashback on your first rental.</li>
//             <li>Refer a friend and earn ₹200 credits.</li>
//           </ul>
//         </div>

//         {/* Recent Updates */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg">
//           <h3 className="text-2xl font-bold text-orange-900 mb-4">Recent Updates</h3>
//           <ul className="space-y-2 text-slate-700">
//             <li>New bike models added to our fleet!</li>
//             <li>Extended rental hours for night riders.</li>
//             <li>Now available in 3 more cities: Pune, Jaipur, and Hyderabad.</li>
//           </ul>
//         </div>

//         {/* How It Works */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg">
//           <h3 className="text-2xl font-bold text-orange-900 mb-4">How It Works</h3>
//           <ol className="list-decimal pl-5 space-y-2 text-slate-700">
//             <li>Select your preferred bike from our catalog.</li>
//             <li>Choose your rental dates and upload documents.</li>
//             <li>Complete payment and pick up your bike.</li>
//             <li>Enjoy your ride and return it at the scheduled time.</li>
//           </ol>
//         </div>

        
// <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg mt-4">
//   <h3 className="text-2xl font-bold text-orange-900 mb-4">Travel Tips</h3>
//   <ul className="list-disc pl-5 space-y-2 text-slate-700">
//     <li>Plan your route in advance to avoid last-minute confusion.</li>
//     <li>Carry a valid ID and necessary documents at all times.</li>
//     <li>Always wear a helmet and ensure your safety gear is in place.</li>
//     <li>Check the weather forecast before heading out.</li>
//     <li>Keep emergency contact numbers handy.</li>
//     <li>Pack essentials like water, snacks, and a first-aid kit.</li>
//     <li>Respect local traffic laws and regulations.</li>
//   </ul>
// </div>
//       </aside>
//     </section>
//   );
// };

// export default FAQS;

// import React, { useEffect, useState } from "react";
// import { Collapse, Input } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { SearchOutlined } from '@ant-design/icons';

// import {
//   faPersonCircleQuestion,
//   faInfoCircle,
//   faFileContract,
//   faWallet,
//   faMapMarkedAlt,
//   faUserShield,
// } from "@fortawesome/free-solid-svg-icons";

// const { Panel } = Collapse;
// const { Search } = Input;

// const FAQS = () => {
//   const [animate, setAnimate] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const faqCategoriesWithIcons = [
//     {
//       category: "General",
//       icon: faInfoCircle,
//       questions: [
//         {
//           question: "What is Bike-4-Rent?",
//           answer:
//             "Bike-4-Rent is a premium two-wheeler rental service that allows you to rent bikes with ease across the city.",
//         },
//         {
//           question: "What makes us special?",
//           answer:
//             "We offer assured quality bikes, lowest prices, flexible rental options, and excellent customer support.",
//         },
//         {
//           question: "How does Bike-4-Rent work?",
//           answer:
//             "You choose your bike, select dates, upload necessary documents, and pick up your ride at the designated location.",
//         },
//       ],
//     },
//     {
//       category: "Rental Policy",
//       icon: faFileContract,
//       questions: [
//         {
//           question: "What documents need to be uploaded?",
//           answer: "You will need a valid driver’s license and a government-issued ID proof.",
//         },
//         {
//           question: "Is fuel included in the tariff?",
//           answer: "No, fuel charges are not included in the rental tariff. The vehicle will be provided with minimal fuel.",
//         },
//         {
//           question: "Is there any limit on the number of kilometres?",
//           answer:
//             "No, we offer unlimited kilometres with our rentals unless specified otherwise.",
//         },
//         {
//           question: "Do I have to pay a deposit?",
//           answer: "Yes, a refundable deposit is required at the time of booking.",
//         },
//         {
//           question: "When can we expect the refund?",
//           answer:
//             "Refunds are processed within 24-48 hours after you return the bike.",
//         },
//         {
//           question: "Is there any penalty for late return?",
//           answer:
//             "Yes, late returns will incur additional charges as per the company policy.",
//         },
//       ],
//     },
//     {
//       category: "Booking & Cancellation",
//       icon: faWallet,
//       questions: [
//         {
//           question: "How do I cancel my booking?",
//           answer:
//             "You can cancel via your dashboard or contact our customer support team.",
//         },
//         {
//           question: "What is the cancellation policy?",
//           answer:
//             "Cancellations made 24 hours before the booking time will get a full refund.",
//         },
//       ],
//     },
//     {
//       category: "Pickup & Drop",
//       icon: faMapMarkedAlt,
//       questions: [
//         {
//           question: "Who should I contact to pick up the vehicle and how?",
//           answer:
//             "Our local partner details will be provided post booking confirmation.",
//         },
//         {
//           question: "Can I pick and drop the vehicle at different locations?",
//           answer:
//             "Yes, this option is available with extra fees for selected cities.",
//         },
//       ],
//     },
//     {
//       category: "Eligibility",
//       icon: faUserShield,
//       questions: [
//         {
//           question: "Is there any limit on the age of the rider?",
//           answer:
//             "Yes, the rider must be at least 18 years old and hold a valid driving license.",
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredFaqs = faqCategoriesWithIcons
//     .map((section) => ({
//       ...section,
//       questions: section.questions.filter((q) =>
//         q.question.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     }))
//     .filter((section) => section.questions.length > 0);

//   return (
//     <div className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen">
//     <section
//       className={`max-w-7xl px-4 py-10 mx-auto transform transition-all duration-700 grid grid-cols-1 lg:grid-cols-3 gap-8 ${
//         animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       {/* FAQ Section */}
//       <div className="lg:col-span-2">
//         <div className="text-center pt-8 pb-8 flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg bg-[#fff7f0]">
//           <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
//             <FontAwesomeIcon
//               icon={faPersonCircleQuestion}
//               className="text-orange-800 mr-2"
//             />
//             Have Questions?
//           </h2>
//           <p className="text-[#5a4239] text-lg mt-2">
//             Explore Our FAQs for Quick Help.
//           </p>
//           <div className="w-full max-w-md mt-4">
//             <Search
//               placeholder="Search FAQs"
//               onChange={(e) => setSearchTerm(e.target.value)}
              
//               className="hover:border-orange-900 focus:border-orange-600  focus:ring focus:ring-orange-300 transition duration-300 transition duration-300"
//             />
//           </div>
//         </div>

//         {filteredFaqs.map((section, idx) => (
//           <div key={idx} className="mt-6">
//             <h3 className="text-2xl font-semibold text-slate-800 mb-4 flex items-center gap-3">
//               <FontAwesomeIcon
//                 icon={section.icon}
//                 className="text-orange-800"
//               />
//               {section.category}
//             </h3>
//             <Collapse
//               accordion
//               bordered={false}
//               className="faq-collapse bg-[#fff7f0] rounded-lg shadow-md"
//               expandIconPosition="right"
//             >
//               {section.questions.map((item, qIdx) => (
//                 <Panel
//                   header={item.question}
//                   key={qIdx}
//                   className="hover:bg-orange-100 transition duration-300"
//                 >
//                   <p className="text-slate-700">{item.answer}</p>
//                 </Panel>
//               ))}
//             </Collapse>
//           </div>
//         ))}
//       </div>

//       {/* Side Panel */}
//       <aside className="space-y-8">
//         {/* Promotional Offers */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300">
//   <h3 className="text-2xl font-bold text-orange-900 mb-4">Promotional Offers</h3>
//   <ul className="list-disc pl-5 space-y-2 text-slate-700">
//     <li>Get 20% off on weekend bookings!</li>
//     <li>Flat ₹100 cashback on your first rental.</li>
//     <li>Refer a friend and earn ₹200 credits.</li>
//   </ul>
// </div>

//         {/* Recent Updates */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300">
//   <h3 className="text-2xl font-bold text-orange-900 mb-4">Recent Updates</h3>
//   <ul className="space-y-2 text-slate-700">
//     <li>New bike models added to our fleet!</li>
//     <li>Extended rental hours for night riders.</li>
//     <li>Now available in 3 more cities: Pune, Jaipur, and Hyderabad.</li>
//   </ul>
// </div>


//         {/* How It Works */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300">
//   <h3 className="text-2xl font-bold text-orange-900 mb-4">How It Works</h3>
//   <ol className="list-decimal pl-5 space-y-2 text-slate-700">
//     <li>Select your preferred bike from our catalog.</li>
//     <li>Choose your rental dates and upload documents.</li>
//     <li>Complete payment and pick up your bike.</li>
//     <li>Enjoy your ride and return it at the scheduled time.</li>
//   </ol>
// </div>


//         {/* Travel Tips */}
//         <div className="p-6 bg-[#fdf3e6] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-300">
//   <h3 className="text-2xl font-bold text-orange-900 mb-4">Travel Tips</h3>
//   <ul className="list-disc pl-5 space-y-2 text-slate-700">
//     <li>Plan your route in advance to avoid last-minute confusion.</li>
//     <li>Carry a valid ID and necessary documents at all times.</li>
//     <li>Always wear a helmet and ensure your safety gear is in place.</li>
//     <li>Check the weather forecast before heading out.</li>
//     <li>Keep emergency contact numbers handy.</li>
//     <li>Pack essentials like water, snacks, and a first-aid kit.</li>
//     <li>Respect local traffic laws and regulations.</li>
//   </ul>
// </div>

//       </aside>
//     </section>
//     </div>
//   );
// };

// export default FAQS;

// import React, { useEffect, useState } from "react";
// import { Collapse, Input } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { SearchOutlined } from '@ant-design/icons';

// import {
//   faPersonCircleQuestion,
//   faInfoCircle,
//   faFileContract,
//   faWallet,
//   faMapMarkedAlt,
//   faUserShield,
//   faGift,
//   faBell,
//   faCogs,
//   faMapSigns,
// } from "@fortawesome/free-solid-svg-icons";

// const { Panel } = Collapse;
// const { Search } = Input;

// const FAQS = () => {
//   const [animate, setAnimate] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");

//   const faqCategoriesWithIcons = [
//     {
//       category: "General",
//       icon: faInfoCircle,
//       questions: [
//         {
//           question: "What is Bike-4-Rent?",
//           answer:
//             "Bike-4-Rent is a premium two-wheeler rental service that allows you to rent bikes with ease across the city.",
//         },
//         {
//           question: "What makes us special?",
//           answer:
//             "We offer assured quality bikes, lowest prices, flexible rental options, and excellent customer support.",
//         },
//         {
//           question: "How does Bike-4-Rent work?",
//           answer:
//             "You choose your bike, select dates, upload necessary documents, and pick up your ride at the designated location.",
//         },
//       ],
//     },
//     {
//       category: "Rental Policy",
//       icon: faFileContract,
//       questions: [
//         {
//           question: "What documents need to be uploaded?",
//           answer: "You will need a valid driver’s license and a government-issued ID proof.",
//         },
//         {
//           question: "Is fuel included in the tariff?",
//           answer: "No, fuel charges are not included in the rental tariff. The vehicle will be provided with minimal fuel.",
//         },
//         {
//           question: "Is there any limit on the number of kilometres?",
//           answer:
//             "No, we offer unlimited kilometres with our rentals unless specified otherwise.",
//         },
//         {
//           question: "Do I have to pay a deposit?",
//           answer: "Yes, a refundable deposit is required at the time of booking.",
//         },
//         {
//           question: "When can we expect the refund?",
//           answer:
//             "Refunds are processed within 24-48 hours after you return the bike.",
//         },
//         {
//           question: "Is there any penalty for late return?",
//           answer:
//             "Yes, late returns will incur additional charges as per the company policy.",
//         },
//       ],
//     },
//     {
//       category: "Booking & Cancellation",
//       icon: faWallet,
//       questions: [
//         {
//           question: "How do I cancel my booking?",
//           answer:
//             "You can cancel via your dashboard or contact our customer support team.",
//         },
//         {
//           question: "What is the cancellation policy?",
//           answer:
//             "Cancellations made 24 hours before the booking time will get a full refund.",
//         },
//       ],
//     },
//     {
//       category: "Pickup & Drop",
//       icon: faMapMarkedAlt,
//       questions: [
//         {
//           question: "Who should I contact to pick up the vehicle and how?",
//           answer:
//             "Our local partner details will be provided post booking confirmation.",
//         },
//         {
//           question: "Can I pick and drop the vehicle at different locations?",
//           answer:
//             "Yes, this option is available with extra fees for selected cities.",
//         },
//       ],
//     },
//     {
//       category: "Eligibility",
//       icon: faUserShield,
//       questions: [
//         {
//           question: "Is there any limit on the age of the rider?",
//           answer:
//             "Yes, the rider must be at least 18 years old and hold a valid driving license.",
//         },
//       ],
//     },
//   ];

//   useEffect(() => {
//     const timer = setTimeout(() => setAnimate(true), 300);
//     return () => clearTimeout(timer);
//   }, []);

//   const filteredFaqs = faqCategoriesWithIcons
//     .map((section) => ({
//       ...section,
//       questions: section.questions.filter((q) =>
//         q.question.toLowerCase().includes(searchTerm.toLowerCase())
//       ),
//     }))
//     .filter((section) => section.questions.length > 0);

//   return (
//     <div className="mt-10 bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen">
//       <section
//         className={`max-w-7xl px-4 py-10 mx-auto transform transition-all duration-700 grid grid-cols-1 lg:grid-cols-3 gap-8 ${
//           animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="lg:col-span-2">
//         <div
//   className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
//     animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//   } flex flex-col items-center space-y-4 p-6 rounded-lg shadow-lg`}
// >
            
//             <h2 className="text-4xl font-extrabold tracking-tight text-orange-900">
//               <FontAwesomeIcon
//                 icon={faPersonCircleQuestion}
//                 className="text-orange-800 mr-2"
//               />
//               Have Questions?
//             </h2>
//             <p className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
//       animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//     }`}>
//               Explore Our FAQs for Quick Help.
//             </p>
//             <div className="w-full max-w-md mt-4">
//               <Search
//                 placeholder="Search FAQs"
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="hover:border-[#733F30] focus:border-[#A15E48] focus:ring focus:ring-orange-300 transition duration-300"
//               />
//             </div>
//           </div>
//           <div
//           className={`${
//             animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
//           } transform transition-all duration-700 ease-out`}
//         >
//           {filteredFaqs.map((section, idx) => (
//             <div key={idx} className="mt-6">
//               <h3 className="text-2xl font-semibold text-[#733F30] mb-4 flex items-center gap-3">
//                 <FontAwesomeIcon
//                   icon={section.icon}
//                   className="text-orange-800"
//                 />
//                 {section.category}
//               </h3>
//               <Collapse
//                 accordion
//                 bordered={false}
//                 className="faq-collapse bg-[#fff7f0] rounded-lg shadow-md"
//                 expandIconPosition="right"
//               >
//                 {section.questions.map((item, qIdx) => (
//                   <Panel
//                     header={item.question}
//                     key={qIdx}
//                     className="hover:bg-[#F0C8B0] transition duration-300"
//                   >
//                     <p className="text-[#5a4239]">{item.answer}</p>
//                   </Panel>
//                 ))}
//               </Collapse>
//             </div>
//           ))}</div>
//         </div>

//         <aside className="space-y-8">
//         <div
//           className={`${
//             animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
//           } transform transition-all duration-700 ease-out flex flex-col justify-center space-y-4`}
//         >
//           <div className="p-6 bg-[#F0C8B0]  rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
//             <h3 className="text-2xl font-bold text-[#8B4D3A] mb-4">
//             <FontAwesomeIcon icon={faGift} className="text-orange-800 mr-2" />Promotional Offers</h3>
//             <ul className="list-disc pl-5 space-y-2 text-[#5a4239]">
//               <li>Get 20% off on weekend bookings!</li>
//               <li>Flat ₹100 cashback on your first rental.</li>
//               <li>Refer a friend and earn ₹200 credits.</li>
//             </ul>
//           </div>

//           <div className="p-6 bg-[#F0C8B0] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
//             <h3 className="text-2xl font-bold text-[#8B4D3A] mb-4">
//             <FontAwesomeIcon icon={faBell} className="text-orange-800 mr-2" />Recent Updates</h3>
//             <ul className="space-y-2 text-[#5a4239]">
//               <li>New bike models added to our fleet!</li>
//               <li>Extended rental hours for night riders.</li>
//               <li>Now available in 3 more cities: Pune, Jaipur, and Hyderabad.</li>
//             </ul>
//           </div>

//           <div className="p-6 bg-[#F0C8B0] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
//             <h3 className="text-2xl font-bold text-[#8B4D3A] mb-4">
//             <FontAwesomeIcon icon={faCogs} className="text-orange-800 mr-2" />How It Works</h3>
//             <ol className="list-decimal pl-5 space-y-2 text-[#5a4239]">
//               <li>Select your preferred bike from our catalog.</li>
//               <li>Choose your rental dates and upload documents.</li>
//               <li>Complete payment and pick up your bike.</li>
//               <li>Enjoy your ride and return it at the scheduled time.</li>
//             </ol>
//           </div>

//           <div className="p-6 bg-[#F0C8B0] rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
//             <h3 className="text-2xl font-bold text-[#8B4D3A] mb-4">
//             <FontAwesomeIcon icon={faMapSigns} className="text-orange-800 mr-2" />Travel Tips</h3>
//             <ul className="list-disc pl-5 space-y-2 text-[#5a4239]">
//               <li>Plan your route in advance to avoid last-minute confusion.</li>
//               <li>Carry a valid ID and necessary documents at all times.</li>
//               <li>Always wear a helmet and ensure your safety gear is in place.</li>
//               <li>Check the weather forecast before heading out.</li>
//               <li>Keep emergency contact numbers handy.</li>
//               <li>Pack essentials like water, snacks, and a first-aid kit.</li>
//               <li>Respect local traffic laws and regulations.</li>
//             </ul>
//           </div>
//           </div>
//         </aside>
        
//       </section>
//     </div>
//   );
// };

// export default FAQS;
import React, { useEffect, useState } from "react";
import { Collapse, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchOutlined } from '@ant-design/icons';

import {
  faPersonCircleQuestion,
  faInfoCircle,
  faFileContract,
  faWallet,
  faMapMarkedAlt,
  faUserShield,
  faGift,
  faBell,
  faCogs,
  faMapSigns,
} from "@fortawesome/free-solid-svg-icons";

const { Panel } = Collapse;
const { Search } = Input;

const FAQS = () => {
  const [animate, setAnimate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const faqCategoriesWithIcons = [
    {
      category: "General",
      icon: faInfoCircle,
      questions: [
        {
          question: "What is RideEase?",
          answer:
            "RideEase is a premium two-wheeler rental service that allows you to rent bikes with ease across the city.",
        },
        {
          question: "What makes us special?",
          answer:
            "We offer assured quality bikes, lowest prices, flexible rental options, and excellent customer support.",
        },
        {
          question: "How does RideEase work?",
          answer:
            "You choose your bike, select dates, upload necessary documents, and pick up your ride at the designated location.",
        },
      ],
    },
    {
      category: "Rental Policy",
      icon: faFileContract,
      questions: [
        {
          question: "What documents need to be uploaded?",
          answer: "You will need a valid driver's license and a government-issued ID proof.",
        },
        {
          question: "Is fuel included in the tariff?",
          answer: "No, fuel charges are not included in the rental tariff. The vehicle will be provided with minimal fuel.",
        },
        {
          question: "Is there any limit on the number of kilometres?",
          answer:
            "No, we offer unlimited kilometres with our rentals unless specified otherwise.",
        },
        {
          question: "Do I have to pay a deposit?",
          answer: "Yes, a refundable deposit is required at the time of booking.",
        },
        {
          question: "When can we expect the refund?",
          answer:
            "Refunds are processed within 24-48 hours after you return the bike.",
        },
        {
          question: "Is there any penalty for late return?",
          answer:
            "Yes, late returns will incur additional charges as per the company policy.",
        },
      ],
    },
    {
      category: "Booking & Cancellation",
      icon: faWallet,
      questions: [
        {
          question: "How do I cancel my booking?",
          answer:
            "You can cancel via your dashboard or contact our customer support team.",
        },
        {
          question: "What is the cancellation policy?",
          answer:
            "Cancellations made 24 hours before the booking time will get a full refund.",
        },
      ],
    },
    {
      category: "Pickup & Drop",
      icon: faMapMarkedAlt,
      questions: [
        {
          question: "Who should I contact to pick up the vehicle and how?",
          answer:
            "Our local partner details will be provided post booking confirmation.",
        },
        {
          question: "Can I pick and drop the vehicle at different locations?",
          answer:
            "Yes, this option is available with extra fees for selected cities.",
        },
      ],
    },
    {
      category: "Eligibility",
      icon: faUserShield,
      questions: [
        {
          question: "Is there any limit on the age of the rider?",
          answer:
            "Yes, the rider must be at least 18 years old and hold a valid driving license.",
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const filteredFaqs = faqCategoriesWithIcons
    .map((section) => ({
      ...section,
      questions: section.questions.filter((q) =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((section) => section.questions.length > 0);

  return (
    <div className="bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] min-h-screen">
      <section
        className={`max-w-7xl px-4 sm:px-6 py-10 mx-auto transform transition-all duration-700 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 ${
          animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Main FAQ Content */}
        <div className="lg:col-span-2">
          <div className={`text-center pt-8 pb-8 transform transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } flex flex-col items-center space-y-4 p-4 sm:p-6 rounded-lg shadow-lg bg-white/50`}>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-orange-900">
              <FontAwesomeIcon
                icon={faPersonCircleQuestion}
                className="text-orange-800 mr-2"
              />
              Have Questions?
            </h2>
            <p className={`text-[#5a4239] text-lg mt-2 transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Explore Our FAQs for Quick Help.
            </p>
            <div className="w-full max-w-md mt-4 px-4 sm:px-0">
              <Search
                placeholder="Search FAQs"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="hover:border-[#733F30] focus:border-[#A15E48] focus:ring focus:ring-orange-300 transition duration-300"
                enterButton={<SearchOutlined />}
              />
            </div>
          </div>
          
          <div className={`${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          } transform transition-all duration-700 ease-out`}>
            {filteredFaqs.map((section, idx) => (
              <div key={idx} className="mt-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-[#733F30] mb-4 flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={section.icon}
                    className="text-orange-800"
                  />
                  {section.category}
                </h3>
                <Collapse
                  accordion
                  bordered={false}
                  className="faq-collapse bg-white/70 rounded-lg shadow-md"
                  expandIconPosition="right"
                >
                  {section.questions.map((item, qIdx) => (
                    <Panel
                      header={<span className="text-base sm:text-lg">{item.question}</span>}
                      key={qIdx}
                      className="hover:bg-[#F0C8B0] transition duration-300"
                    >
                      <p className="text-[#5a4239] text-sm sm:text-base">{item.answer}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6 lg:space-y-8">
          <div
            className={`${
              animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            } transform transition-all duration-700 ease-out flex flex-col justify-center space-y-4`}
          >
            <div className="p-4 sm:p-6 bg-[#F0C8B0]/90 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B4D3A] mb-4">
                <FontAwesomeIcon icon={faGift} className="text-orange-800 mr-2" />
                Promotional Offers
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#5a4239]">
                <li>Get 20% off on weekend bookings!</li>
                <li>Flat ₹100 cashback on your first rental.</li>
                <li>Refer a friend and earn ₹200 credits.</li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 bg-[#F0C8B0]/90 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B4D3A] mb-4">
                <FontAwesomeIcon icon={faBell} className="text-orange-800 mr-2" />
                Recent Updates
              </h3>
              <ul className="space-y-2 text-sm sm:text-base text-[#5a4239]">
                <li>New bike models added to our fleet!</li>
                <li>Extended rental hours for night riders.</li>
                <li>Now available in 3 more cities: Pune, Jaipur, and Hyderabad.</li>
              </ul>
            </div>

            <div className="p-4 sm:p-6 bg-[#F0C8B0]/90 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B4D3A] mb-4">
                <FontAwesomeIcon icon={faCogs} className="text-orange-800 mr-2" />
                How It Works
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base text-[#5a4239]">
                <li>Select your preferred bike from our catalog.</li>
                <li>Choose your rental dates and upload documents.</li>
                <li>Complete payment and pick up your bike.</li>
                <li>Enjoy your ride and return it at the scheduled time.</li>
              </ol>
            </div>

            <div className="p-4 sm:p-6 bg-[#F0C8B0]/90 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-400">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B4D3A] mb-4">
                <FontAwesomeIcon icon={faMapSigns} className="text-orange-800 mr-2" />
                Travel Tips
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-[#5a4239]">
                <li>Plan your route in advance to avoid last-minute confusion.</li>
                <li>Carry a valid ID and necessary documents at all times.</li>
                <li>Always wear a helmet and ensure your safety gear is in place.</li>
                <li>Check the weather forecast before heading out.</li>
                <li>Keep emergency contact numbers handy.</li>
                <li>Pack essentials like water, snacks, and a first-aid kit.</li>
                <li>Respect local traffic laws and regulations.</li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default FAQS;