// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../Helper/Spinner";
// import { userLogin } from "../redux/features/User/authAction";
// import { clearFields } from "../redux/features/User/authSlice";
// import Layout from "./Layout";
// import Error from "../Helper/Error";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation(); // Get the location state
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loading, userInfo } = useSelector((state) => state.auth);
//   const [errors, setErrors] = useState("");

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   // Redirect authenticated user to intended page or default page
//   useEffect(() => {
//     if (userInfo) {
//       dispatch(clearFields());
//       const locationState = location.state;
//       if (locationState?.from) {
//         navigate(locationState.from, { state: locationState.orderData });
//       } else if (email === "djmgroup23@gmail.com") {
//         navigate("/admin");
//       } else {
//         navigate("/");
//       }
//     }
//   }, [userInfo, dispatch, navigate, location, email]); // Added dependencies

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//       role: email === "djmgroup23@gmail.com" ? 1 : 0,
//     };
//     const datas = await dispatch(userLogin(data));
//     if (datas.error) {
//       setErrors(datas.payload);
//       dispatch(clearFields());
//     }
//   };

//   return (
//     <Layout title={"Bike-4-Rent : Login"}>
//       <div className='flex flex-col justify-center h-screen px-6 py-12 lg:px-8 bg-slate-50'>
//         <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
//           <Link to='/'>
//             <img
//               className='w-auto h-44 mx-auto justify-center'
//               src='../images/BikeForRentFinalLogo.png'
//               alt='Your Company'
//             />
//           </Link>
//           <h2 className='mt-5 text-2xl font-bold leading-9 tracking-tight text-center text-slate-900'>
//             Sign in to your account
//           </h2>
//         </div>

//         <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
//           <form className='space-y-6' onSubmit={onSubmit}>
//             <div>
//               <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
//                 Email address
//               </label>
//               <div className='mt-2'>
//                 <input
//                   id='email'
//                   name='email'
//                   type='email'
//                   autoComplete='email'
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   className='block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                 />
//               </div>
//             </div>

//             <div>
//               <div className='flex items-center justify-between'>
//                 <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
//                   Password
//                 </label>
//               </div>
//               <div className='mt-2'>
//                 <input
//                   id='password'
//                   name='password'
//                   type='password'
//                   autoComplete='current-password'
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className='block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
//                 />
//               </div>
//               <div className='flex flex-col mt-1 '>
//                 <Link to='/sendOtp' className='text-sm font-semibold text-right cursor-pointer text-slate-900'>
//                   Forgot password?
//                 </Link>
//               </div>
//               {errors && <Error>{errors}</Error>}
//             </div>
//             <div>
//               <button
//                 type='submit'
//                 className='flex justify-center w-full px-3 py-1.5 text-sm font-semibold leading-6 text-black rounded-md shadow-sm bg-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
//                 disabled={loading}
//               >
//                 {loading ? <Spinner /> : "Login"}
//               </button>
//             </div>
//           </form>

//           <p className='mt-3 text-sm text-center text-gray-500'>
//             <Link to='/signup' className='font-semibold leading-6 text-slate-900 '>
//               Don't have an account ?
//               <span className='text-orange'> Sign up</span>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Login;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../Helper/Spinner";
// import { userLogin } from "../redux/features/User/authAction";
// import { clearFields } from "../redux/features/User/authSlice";
// import Layout from "./Layout";
// import Error from "../Helper/Error";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKey } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loading, userInfo } = useSelector((state) => state.auth);
//   const [errors, setErrors] = useState("");

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   useEffect(() => {
//     if (userInfo) {
//       dispatch(clearFields());
//       const locationState = location.state;
//       if (locationState?.from) {
//         navigate(locationState.from, { state: locationState.orderData });
//       } else if (email === "djmgroup23@gmail.com") {
//         navigate("/admin");
//       } else {
//         navigate("/");
//       }
//     }
//   }, [userInfo, dispatch, navigate, location, email]);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//       role: email === "djmgroup23@gmail.com" ? 1 : 0,
//     };
//     const datas = await dispatch(userLogin(data));
//     if (datas.error) {
//       setErrors(datas.payload);
//       dispatch(clearFields());
//     }
//   };

//   return (
//     <Layout title={"Bike-4-Rent : Login"}>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-[#fff7f0] to-[#fde9dc] p-4">
//         <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mb-8">
//           {/* Large Logo with minimal spacing */}
//           <div className="flex justify-center">
//             <Link to="/">
//               <img
//                 src="../images/BikeForRentFinalLogo.png"
//                 alt="Bike-4-Rent Logo"
//                 className="h-36 w-auto mr-3" // Large but not overwhelming
//               />
//             </Link>
//           </div>

//           {/* Compact form layout */}
//           <h2 className="text-xl font-bold text-center text-gray-800  mb-4">
//             Log in to your account
//           </h2>

//           <form onSubmit={onSubmit} className="space-y-3">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email address
//               </label>
//               <div className="relative">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="absolute left-3 top-3 text-gray-400"
//                 />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Password
//               </label>
//               <div className="relative">
//                 <FontAwesomeIcon
//                   icon={faKey}
//                   className="absolute left-3 top-3 text-gray-400"
//                 />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
//                   required
//                 />
//               </div>
//               <div className="text-right mt-1">
//                 <Link
//                   to="/sendOtp"
//                   className="text-xs text-indigo-600 hover:text-indigo-500"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             {errors && <Error>{errors}</Error>}

//             <button
//               type="submit"
//               className="w-full py-2 px-4 mt-2 bg-[#8B4D3A] text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               disabled={loading}
//             >
//               {loading ? <Spinner /> : "Login"}
//             </button>
//           </form>

//           {/* Compact signup section */}
//           <div className="mt-3 text-center">
//             <p className="text-xs text-gray-600 mb-1">
//               Don't have an account?
//             </p>
//             <Link
//               to="/signup"
//               className="inline-block w-full py-2 px-4 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
//             >
//               Sign up
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Login;

// import React, { useEffect, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Spinner from "../Helper/Spinner";
// import { userLogin } from "../redux/features/User/authAction";
// import { clearFields } from "../redux/features/User/authSlice";
// import Layout from "./Layout";
// import Error from "../Helper/Error";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faKey, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loading, userInfo } = useSelector((state) => state.auth);
//   const [errors, setErrors] = useState("");

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, []);

//   useEffect(() => {
//     if (userInfo) {
//       dispatch(clearFields());
//       const locationState = location.state;
//       if (locationState?.from) {
//         navigate(locationState.from, { state: locationState.orderData });
//       } else if (email === "djmgroup23@gmail.com") {
//         navigate("/admin");
//       } else {
//         navigate("/");
//       }
//     }
//   }, [userInfo, dispatch, navigate, location, email]);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     const data = {
//       email: email,
//       password: password,
//       role: email === "djmgroup23@gmail.com" ? 1 : 0,
//     };
//     const datas = await dispatch(userLogin(data));
//     if (datas.error) {
//       setErrors(datas.payload);
//       dispatch(clearFields());
//     }
//   };

//   return (
//     <Layout title={"Bike-4-Rent : Login"}>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] p-4 md:p-8">
//         <div className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl mb-10 transition-all duration-500 hover:shadow-2xl hover:bg-white">
//           {/* Logo with enhanced hover effect */}
//           <div className="flex flex-col items-center mb-1 p-0 group">
//             <Link 
//               to="/" 
//               className="transition-all duration-500 hover:scale-105 hover:rotate-1"
//             >
//               <img
//                 src="../images/BikeForRentFinalLogo.png"
//                 alt="Bike-4-Rent Logo"
//                 className="h-32 md:h-36 w-auto transition-transform duration-500 group-hover:drop-shadow-lg"
//               />
//             </Link>
            
//           </div>

//           <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5a4239]  mt-0 mb-6 p=0 transition-colors duration-500 group">
//             <span className="inline-block group-hover:text-[#733F30] group-hover:drop-shadow-sm">
//               Log in to your account
//             </span>
//           </h2>

//           <form onSubmit={onSubmit} className="space-y-5">
//             <div className="group">
//               <label className="block text-sm md:text-base font-medium text-[#5a4239]/90 mb-2 transition-all duration-300 group-hover:text-[#733F30]">
//                 Email address
//               </label>
//               <div className="relative transition-all duration-500 hover:scale-[1.01]">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="absolute left-3 top-3 text-[#A15E48] transition-all duration-300 group-hover:text-[#8B4D3A] group-hover:scale-110"
//                 />
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full pl-10 pr-3 py-2.5 border-2 border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#733F30] focus:border-transparent transition-all duration-300 hover:border-[#A15E48] placeholder-[#A15E48]/50"
//                   placeholder="your@email.com"
//                   required
//                 />
//               </div>
//             </div>

//             <div className="group">
//               <label className="block text-sm md:text-base font-medium text-[#5a4239]/90 mb-2 transition-all duration-300 group-hover:text-[#733F30]">
//                 Password
//               </label>
//               <div className="relative transition-all duration-500 hover:scale-[1.01]">
//                 <FontAwesomeIcon
//                   icon={faKey}
//                   className="absolute left-3 top-3 text-[#A15E48] transition-all duration-300 group-hover:text-[#8B4D3A] group-hover:scale-110"
//                 />
//                 <input
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full pl-10 pr-3 py-2.5 border-2 border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#733F30] focus:border-transparent transition-all duration-300 hover:border-[#A15E48] placeholder-[#A15E48]/50"
//                   placeholder="••••••••"
//                   required
//                 />
//               </div>
//               <div className="text-right mt-2 transition-all duration-300 hover:translate-x-1">
//                 <Link
//                   to="/sendOtp"
//                   className="text-xs md:text-sm font-semibold text-[#8B4D3A] hover:text-[#5a4239] transition-all duration-300 hover:underline hover:underline-offset-4"
//                 >
//                   Forgot password?
//                 </Link>
//               </div>
//             </div>

//             {errors && <Error>{errors}</Error>}

//             <button
//               type="submit"
//               className="w-full py-3 px-4 mt-6 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] focus:outline-none focus:ring-2 focus:ring-[#733F30] focus:ring-offset-2 transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg group"
//               disabled={loading}
//             >
//               <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
//                 {loading ? <Spinner /> : "Login"}
//               </span>
//             </button>
//           </form>

//           <div className="mt-8 text-center group">
//             <p className="text-sm md:text-base text-[#5a4239]/80 mb-4 transition-all duration-300 group-hover:text-[#5a4239]">
//               Don't have an account?
//             </p>
//             <Link
//               to="/signup"
//               className="inline-block w-full py-2.5 px-4 text-sm md:text-base font-medium bg-gradient-to-r from-[#A15E48] to-[#DCA689] text-white rounded-lg hover:from-[#8B4D3A] hover:to-[#A15E48] focus:outline-none focus:ring-2 focus:ring-[#5a4239] focus:ring-offset-2 transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg group"
//             >
//               <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
//                 Create an account
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                 </svg>
//               </span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Login;
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../Helper/Spinner";
import { userLogin } from "../redux/features/User/authAction";
import { clearFields } from "../redux/features/User/authSlice";
import Layout from "./Layout";
import Error from "../Helper/Error";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, userInfo } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (userInfo) {
      dispatch(clearFields());
      const locationState = location.state;
      if (locationState?.from) {
        navigate(locationState.from, { state: locationState.orderData });
      } else if (userInfo.role === 1) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [userInfo, dispatch, navigate, location]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    const datas = await dispatch(userLogin(data));
    if (datas.error) {
      setErrors(datas.payload);
      dispatch(clearFields());
    }
  };

  return (
    <Layout title={"RideEase : Login"}>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] p-4 md:p-8">
        <div className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl mb-10 transition-all duration-500 hover:shadow-2xl hover:bg-white">
          {/* Logo with enhanced hover effect */}
          <div className="flex flex-col items-center mb-1 p-0 group">
            <Link 
              to="/" 
              className="transition-all duration-500 hover:scale-105 hover:rotate-1"
            >
              <img
                src="../images/BikeForRentFinalLogo.png"
                alt="RideEase Logo"
                className="h-32 md:h-36 w-auto transition-transform duration-500 group-hover:drop-shadow-lg"
              />
            </Link>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#5a4239] mt-0 mb-6 transition-colors duration-500 group">
            <span className="inline-block group-hover:text-[#733F30] group-hover:drop-shadow-sm">
              Log in to your account
            </span>
          </h2>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="group">
              <label className="block text-sm md:text-base font-medium text-[#5a4239]/90 mb-2 transition-all duration-300 group-hover:text-[#733F30]">
                Email address
              </label>
              <div className="relative transition-all duration-500 hover:scale-[1.01]">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute left-3 top-3 text-[#A15E48] transition-all duration-300 group-hover:text-[#8B4D3A] group-hover:scale-110"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border-2 border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#733F30] focus:border-transparent transition-all duration-300 hover:border-[#A15E48] placeholder-[#A15E48]/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-sm md:text-base font-medium text-[#5a4239]/90 mb-2 transition-all duration-300 group-hover:text-[#733F30]">
                Password
              </label>
              <div className="relative transition-all duration-500 hover:scale-[1.01]">
                <FontAwesomeIcon
                  icon={faKey}
                  className="absolute left-3 top-3 text-[#A15E48] transition-all duration-300 group-hover:text-[#8B4D3A] group-hover:scale-110"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border-2 border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#733F30] focus:border-transparent transition-all duration-300 hover:border-[#A15E48] placeholder-[#A15E48]/50"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="text-right mt-2 transition-all duration-300 hover:translate-x-1">
                <Link
                  to="/sendOtp"
                  className="text-xs md:text-sm font-semibold text-[#8B4D3A] hover:text-[#5a4239] transition-all duration-300 hover:underline hover:underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            {errors && <Error>{errors}</Error>}

            <button
              type="submit"
              className="w-full py-3 px-4 mt-6 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] focus:outline-none focus:ring-2 focus:ring-[#733F30] focus:ring-offset-2 transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg group"
              disabled={loading}
            >
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                {loading ? <Spinner /> : "Login"}
              </span>
            </button>
          </form>

          <div className="mt-8 text-center group">
            <p className="text-sm md:text-base text-[#5a4239]/80 mb-4 transition-all duration-300 group-hover:text-[#5a4239]">
              Don't have an account?
            </p>
            <Link
              to="/signup"
              className="inline-block w-full py-2.5 px-4 text-sm md:text-base font-medium bg-gradient-to-r from-[#A15E48] to-[#DCA689] text-white rounded-lg hover:from-[#8B4D3A] hover:to-[#A15E48] focus:outline-none focus:ring-2 focus:ring-[#5a4239] focus:ring-offset-2 transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg group"
            >
              <span className="inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                Create an account
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;