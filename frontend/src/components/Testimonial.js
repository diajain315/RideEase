// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Divider } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments } from "@fortawesome/free-solid-svg-icons"; // Import specific icon
// import { Carousel } from "antd";
// const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const res = await axios.get("/api/v1/review/all");
//         if (res.data.success) {
//           setReviews(res.data.reviews);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   return (
//     <section className='bg-orange-50 text-gray-700 body-font flex-wrap justify-center'>

//       <div className='container px-5 py-8 mx-auto'>
//       <Divider className="!h-1 !w-24 !min-w-0 !mx-auto !my-0 !mb-4 bg-gradient-to-r from-[#5a4239] to-orange-900" />
//       <h2 className="!text-4xl !font-bold !text-orange-900 flex items-center justify-center gap-3 !mb-2 !mt-4">
//         <FontAwesomeIcon
//         icon={faComments}
//         className="mr-3 text-3xl sm:text-4xl text-orange-900"
//       />
//           Our Testimonials
//         </h2>
//         <Carousel autoplay className='mx-auto w-[20rem] sm:w-[26rem]'>
//           {reviews.map((review, index) => (
//             <div
//               className='px-3 py-6 mb-6 border-2 rounded-md'
//               key={index}
//             >
//               <div className='flex flex-col items-center justify-center text-center'>
//                 <img
//                   alt='testimonial'
//                   className='w-20 h-20 mb-6 rounded-full object-cover border-2 border-gray-200 bg-gray-100'
//                   src='/images/testimonials/avatar.jpg'
//                 />
//                 <p className='leading-relaxed italic'>" {review.message} "</p>
//                 <div className='flex mt-4'>
//                   {[...Array(5)].map((_, i) => (
//                     <span
//                       key={i}
//                       className={`text-yellow-500 text-lg ${
//                         i < review.rating ? "fas fa-star" : "far fa-star"
//                       }`}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>
//                 <h2 className='mt-4 text-sm font-medium tracking-wider text-gray-900 title-font'>
//                   - {review.name}
//                 </h2>
//               </div>
//             </div>
//           ))}
//         </Carousel>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Divider } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "antd";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get("/api/v1/review/all");
        if (res.data.success) {
          setReviews(res.data.reviews);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };
    fetchReviews();
  }, []);

  // Helper function to split reviews into chunks
  const chunkReviews = (arr, chunkSize) => {
    if (!arr.length || chunkSize < 1) return [];

    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Divide reviews into 3 groups
  const reviewChunks = chunkReviews(reviews, Math.ceil(reviews.length / 3));

  return (
    <section className="bg-[#fff7f0] text-gray-700 body-font flex-wrap justify-center">
      <div className="container px-5 py-8 mx-auto mb-3">
        <Divider className="!h-1 !w-24 !min-w-0 !mx-auto !my-0 !mb-4 bg-gradient-to-r from-[#5a4239] to-orange-900" />
        <h2 className="!text-3xl sm:!text-4xl !font-bold !text-orange-900 flex items-center justify-center gap-3 !mb-2 !mt-4 text-center">
          <FontAwesomeIcon
            icon={faComments}
            className="mr-3 text-3xl sm:text-4xl text-orange-900"
          />
          Our Testimonials
        </h2>

        {reviewChunks.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10">
            {reviewChunks.map((chunk, chunkIndex) => (
            <Carousel autoplay key={chunkIndex} className="mx-auto w-full max-w-sm">
              {chunk.map((review, index) => (
                <div className="px-4 py-8 mb-8 border rounded-lg shadow-md bg-[#FFE7C5] border-[#DCA689]/70" key={index}>
                  <div className="flex flex-col items-center justify-center text-center">
                    <img
                      alt="testimonial"
                      className="inline-block object-cover object-center w-20 h-20 mb-6 bg-gray-100 border-4 border-orange-900 rounded-full shadow-sm"
                      src="/images/testimonials/avatar.jpg"
                    />
                    <p className="mb-4 text-sm text-[#5a4239] leading-relaxed">" {review.message} "</p>
                    <div className="flex mt-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < review.rating ? "#FACC15" : "none"} // yellow-400
                          viewBox="0 0 24 24"
                          stroke="#FACC15"
                          strokeWidth={1.5}
                          className="w-8 h-8 inline-block" // Larger stars, no margin
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499l2.122 4.296 4.74.689-3.431 3.343.81 4.725-4.241-2.229-4.241 2.23.81-4.726-3.431-3.343 4.74-.689 2.122-4.296z"
                          />
                        </svg>
                      ))}



                    </div>
                    <h2 className="text-lg font-semibold tracking-wide text-orange-900">
                      - {review.name}
                    </h2>
                  </div>
                </div>
              ))}
            </Carousel>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-lg border border-[#DCA689]/70 bg-white p-6 text-center shadow-sm">
            <p className="text-[#5a4239]">
              Reviews will appear here as soon as customers start sharing their rides.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonial;



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Carousel } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faComments } from "@fortawesome/free-solid-svg-icons";

// const TestimonialCarousel = ({ reviews, dotPosition }) => (
//   <Carousel
//     autoplay
//     dotPosition={dotPosition}
//     className="m-auto sm:w-[26rem] w-[20rem]"
//   >
//     {reviews.map((review, index) => (
//       <div
//         className="px-4 py-8 mb-6 border-2 rounded-lg shadow-md bg-[#FFE7C5] border-gray-200"
//         key={index}
//       >
//         <div className="flex flex-col items-center justify-center h-full text-center">
//           <img
//             alt={review.name}
//             className="inline-block object-cover object-center w-20 h-20 mb-6 bg-gray-100 border-4 border-orange-900 rounded-full shadow-sm"
//             src={review.image}
//           />
//           <p className="mb-4 text-sm text-[#5a4239] leading-relaxed">
//             {review.review}
//           </p>
//           <span className="inline-block w-12 h-1 mt-4 mb-2 rounded bg-orange-900"></span>
//           <h2 className="text-lg font-semibold tracking-wide text-orange-900">
//             {review.name}
//           </h2>
//         </div>
//       </div>
//     ))}
//   </Carousel>
// );

// const Testimonial = () => {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const res = await axios.get("/api/v1/review/all");
//         if (res.data.success) {
//           setReviews(res.data.reviews);
//         }
//       } catch (error) {
//         console.error("Error fetching reviews:", error);
//       }
//     };
//     fetchReviews();
//   }, []);

//   // Helper function to split reviews into chunks
//   const chunkReviews = (arr, chunkSize) => {
//     const chunks = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//       chunks.push(arr.slice(i, i + chunkSize));
//     }
//     return chunks;
//   };

//   // Divide reviews into groups
//   const reviewChunks = chunkReviews(reviews, Math.ceil(reviews.length / 3));

//   return (
//     <section className="bg-gradient-to-r from-orange-50 via-white to-orange-50 text-gray-700 body-font flex-wrap justify-center">
//       <div className="container px-6 py-12 mx-auto flex-wrap justify-center">
//         <h2 className="!text-4xl !font-bold !text-orange-900 flex items-center justify-center gap-3 !mb-2">
//           <FontAwesomeIcon
//             icon={faComments}
//             className="mr-3 text-3xl sm:text-4xl text-orange-900"
//           />
//           Our Testimonials
//         </h2>
//         <div className="flex flex-col gap-6 sm:flex-row justify-center">
//           {reviewChunks.map((chunk, index) => (
//             <TestimonialCarousel
//               key={index}
//               reviews={chunk}
//               dotPosition="bottom"
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;
