// import React, { Fragment, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/features/User/authSlice";
// import { LoggedInUser } from "../redux/features/User/authAction";
// import { Menu, Transition } from "@headlessui/react";
// import {
//   Bars3Icon,
//   ChevronDownIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// export default function Navbar({ scrolled }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     dispatch(LoggedInUser());
//   }, [dispatch]);

//   const { userInfo } = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//     setMenuOpen(false);
//   };

//   const navItems = [
//     { title: "Home", path: userInfo?.role === 1 ? "/admin" : "/" },
//     { title: "About Us", path: "/about" },
//     { title: "Contact Us", path: "/contact" },
//     { title: "FAQs", path: "/faqs" },
//     { title: "Terms", path: "/termsc" },
//     { title: "Attractions", path: "/attractions" },
//   ];

//   const linkClass =
//     "rounded-md px-3 py-2 text-base font-semibold text-[#FFD9A0] transition-all duration-200 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]";

//   return (
//     <nav
//       className={`fixed top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
//         scrolled
//           ? "border-[#DCA689]/60 bg-[#5B2C1D]/95 shadow-lg"
//           : "border-[#DCA689]/40 bg-[#5B2C1D]/90"
//       }`}
//       style={{ fontFamily: "'Josefin Sans', sans-serif" }}
//     >
//       <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
//           <img
//             className="h-24 w-auto"
//             src="/images/BikeForRentFinalLogo.png"
//             alt="Bike4Rent"
//           />
//         </Link>

//         <div className="hidden items-center space-x-2 md:flex">
//           {navItems.map((item) => (
//             <Link key={item.path} to={item.path} className={linkClass}>
//               {item.title}
//             </Link>
//           ))}

//           {userInfo ? (
//             <Menu as="div" className="relative">
//               <Menu.Button className="flex items-center rounded-md px-3 py-2 text-base font-semibold text-[#FFD9A0] transition hover:bg-white/10">
//                 <img
//                   src={userInfo.gender === "male" ? "/avatarmale.png" : "/avatarfemale.jpeg"}
//                   alt="avatar"
//                   className="mr-2 h-8 w-8 rounded-full border border-[#FFD9A0]/40 object-cover"
//                 />
//                 <span className="max-w-[120px] truncate">{userInfo.name}</span>
//                 <ChevronDownIcon className="ml-1 h-5 w-5" />
//               </Menu.Button>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black/5">
//                   <Menu.Item>
//                     {({ active }) => (
//                       <Link
//                         to="/userProfile"
//                         className={`block px-4 py-2 text-sm ${
//                           active ? "bg-[#FFE9CC] text-[#5B2C1D]" : "text-gray-900"
//                         }`}
//                       >
//                         Your Profile
//                       </Link>
//                     )}
//                   </Menu.Item>
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={handleLogout}
//                         className={`block w-full px-4 py-2 text-left text-sm ${
//                           active ? "bg-[#FFE9CC] text-[#5B2C1D]" : "text-gray-900"
//                         }`}
//                       >
//                         Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           ) : (
//             <Link
//               to="/login"
//               className="rounded-md bg-[#FFD9A0] px-4 py-2 text-base font-bold text-[#5B2C1D] transition-all duration-200 hover:bg-white"
//             >
//               Login
//             </Link>
//           )}
//         </div>

//         <button
//           onClick={() => setMenuOpen((open) => !open)}
//           className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#FFD9A0] transition hover:bg-white/10 focus:outline-none md:hidden"
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//         >
//           {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="flex flex-col space-y-2 bg-[#4b2418] px-4 pb-4 shadow-md md:hidden">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className={linkClass}
//             >
//               {item.title}
//             </Link>
//           ))}

//           {userInfo ? (
//             <>
//               <Link
//                 to="/orderdropdown"
//                 onClick={() => setMenuOpen(false)}
//                 className={linkClass}
//               >
//                 Your Orders
//               </Link>
//               <button onClick={handleLogout} className={`${linkClass} text-left`}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" onClick={() => setMenuOpen(false)} className={linkClass}>
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// import React, { Fragment, useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/features/User/authSlice";
// import { LoggedInUser } from "../redux/features/User/authAction";
// import { Menu, Transition } from "@headlessui/react";
// import {
//   Bars3Icon,
//   ChevronDownIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

// export default function Navbar({ scrolled }) {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     dispatch(LoggedInUser());
//   }, [dispatch]);

//   const { userInfo } = useSelector((state) => state.auth);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/");
//     setMenuOpen(false);
//   };

//   const navItems = [
//     { title: "Home", path: userInfo?.role === 1 ? "/admin" : "/" },
//     { title: "About Us", path: "/about" },
//     { title: "Contact Us", path: "/contact" },
//     { title: "FAQs", path: "/faqs" },
//     { title: "Terms", path: "/termsc" },
//     { title: "Attractions", path: "/attractions" },
//   ];

//   const linkClass =
//     "rounded-md px-3 py-2 text-base font-semibold text-[#FFD9A0] transition-all duration-200 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]";

//   return (
//     <nav
//       className={`fixed top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
//         scrolled
//           ? "border-[#DCA689]/60 bg-[#5B2C1D]/95 shadow-lg"
//           : "border-[#DCA689]/40 bg-[#5B2C1D]/90"
//       }`}
//       style={{ fontFamily: "'Josefin Sans', sans-serif" }}
//     >
//       <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
//         <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
//           <img
//             className="h-24 w-auto"
//             src="/images/BikeForRentFinalLogo.png"
//             alt="Bike4Rent"
//           />
//         </Link>

//         <div className="hidden items-center space-x-2 md:flex">
//           {navItems.map((item) => (
//             <Link key={item.path} to={item.path} className={linkClass}>
//               {item.title}
//             </Link>
//           ))}

//           {userInfo ? (
//             <Menu as="div" className="relative">
//               <Menu.Button className="flex items-center rounded-md px-3 py-2 text-base font-semibold text-[#FFD9A0] transition hover:bg-white/10">
//                 <img
//                   src={userInfo.gender === "male" ? "/avatarmale.png" : "/avatarfemale.jpeg"}
//                   alt="avatar"
//                   className="mr-2 h-8 w-8 rounded-full border border-[#FFD9A0]/40 object-cover"
//                 />
//                 <span className="max-w-[120px] truncate">{userInfo.name}</span>
//                 <ChevronDownIcon className="ml-1 h-5 w-5" />
//               </Menu.Button>

//               <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                 <Menu.Items className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black/5">
//                   {/* Your Profile */}
//                   <Menu.Item>
//                     {({ active }) => (
//                       <Link
//                         to="/userProfile"
//                         className={`block px-4 py-2 text-sm ${
//                           active ? "bg-[#FFE9CC] text-[#5B2C1D]" : "text-gray-900"
//                         }`}
//                       >
//                         Your Profile
//                       </Link>
//                     )}
//                   </Menu.Item>

//                   {/* ✅ Admin Dashboard - Only for Admin Users */}
//                   {userInfo?.role === 1 && (
//                     <Menu.Item>
//                       {({ active }) => (
//                         <Link
//                           to="/admin"
//                           className={`block px-4 py-2 text-sm font-semibold ${
//                             active ? "bg-[#FFE9CC] text-[#8B4D3A]" : "text-[#8B4D3A]"
//                           } border-t border-gray-100`}
//                         >
//                           📊 Admin Dashboard
//                         </Link>
//                       )}
//                     </Menu.Item>
//                   )}

//                   {/* Logout */}
//                   <Menu.Item>
//                     {({ active }) => (
//                       <button
//                         onClick={handleLogout}
//                         className={`block w-full px-4 py-2 text-left text-sm ${
//                           active ? "bg-[#FFE9CC] text-[#5B2C1D]" : "text-gray-900"
//                         }`}
//                       >
//                         Logout
//                       </button>
//                     )}
//                   </Menu.Item>
//                 </Menu.Items>
//               </Transition>
//             </Menu>
//           ) : (
//             <Link
//               to="/login"
//               className="rounded-md bg-[#FFD9A0] px-4 py-2 text-base font-bold text-[#5B2C1D] transition-all duration-200 hover:bg-white"
//             >
//               Login
//             </Link>
//           )}
//         </div>

//         <button
//           onClick={() => setMenuOpen((open) => !open)}
//           className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#FFD9A0] transition hover:bg-white/10 focus:outline-none md:hidden"
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//         >
//           {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
//         </button>
//       </div>

//       {menuOpen && (
//         <div className="flex flex-col space-y-2 bg-[#4b2418] px-4 pb-4 shadow-md md:hidden">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               onClick={() => setMenuOpen(false)}
//               className={linkClass}
//             >
//               {item.title}
//             </Link>
//           ))}

//           {userInfo ? (
//             <>
//               {/* ✅ Admin Dashboard - Only for Admin Users in Mobile Menu */}
//               {userInfo?.role === 1 && (
//                 <Link
//                   to="/admin"
//                   onClick={() => setMenuOpen(false)}
//                   className={linkClass}
//                 >
//                   📊 Admin Dashboard
//                 </Link>
//               )}

//               <Link
//                 to="/orderdropdown"
//                 onClick={() => setMenuOpen(false)}
//                 className={linkClass}
//               >
//                 Your Orders
//               </Link>
//               <button onClick={handleLogout} className={`${linkClass} text-left`}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/login" onClick={() => setMenuOpen(false)} className={linkClass}>
//               Login
//             </Link>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/features/User/authSlice";
import { LoggedInUser } from "../redux/features/User/authAction";
import { Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export default function Navbar({ scrolled }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispatch(LoggedInUser());
  }, [dispatch]);

  const { userInfo } = useSelector((state) => state.auth);

  // ✅ Get userInfo from localStorage if Redux is empty
  const userInfoFromStorage = localStorage.getItem("userInfo") 
    ? JSON.parse(localStorage.getItem("userInfo")) 
    : null;

  // Use Redux userInfo first, fallback to localStorage
  const displayUserInfo = userInfo || userInfoFromStorage;

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("userToken");
    localStorage.removeItem("userInfo");
    navigate("/");
    setMenuOpen(false);
  };

  const navItems = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about" },
    { title: "Contact Us", path: "/contact" },
    { title: "FAQs", path: "/faqs" },
    { title: "Terms", path: "/termsc" },
    { title: "Attractions", path: "/attractions" },
  ];

  const linkClass =
    "rounded-md px-3 py-2 text-base font-semibold text-[#FFD9A0] transition-all duration-200 hover:bg-[#FFE9CC] hover:text-[#5B2C1D]";

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur transition-all duration-300 ${
        scrolled
          ? "border-[#DCA689]/60 bg-[#5B2C1D]/95 shadow-lg"
          : "border-[#DCA689]/40 bg-[#5B2C1D]/90"
      }`}
      style={{ fontFamily: "'Josefin Sans', sans-serif" }}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img
            className="h-24 w-auto"
            src="/images/BikeForRentFinalLogo.png"
            alt="Bike4Rent"
          />
        </Link>

        <div className="hidden items-center space-x-2 md:flex">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={linkClass}>
              {item.title}
            </Link>
          ))}

          {displayUserInfo ? (
            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center rounded-md px-3 py-2 text-base font-semibold text-[#FFD9A0] transition hover:bg-white/10">
                <img
                  src={displayUserInfo.gender === "male" ? "/avatarmale.png" : "/avatarfemale.jpeg"}
                  alt="avatar"
                  className="mr-2 h-8 w-8 rounded-full border border-[#FFD9A0]/40 object-cover"
                />
                <span className="max-w-[120px] truncate">{displayUserInfo.name}</span>
                <ChevronDownIcon className="ml-1 h-5 w-5" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 overflow-hidden rounded-md bg-white shadow-xl ring-1 ring-black/5">
                  {/* Your Profile */}
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to="/userProfile"
                        className={`block px-4 py-2 text-sm ${
                          active ? "bg-[#FFE9CC] text-[#5B2C1D]" : "text-gray-900"
                        }`}
                      >
                        Your Profile
                      </Link>
                    )}
                  </Menu.Item>

                  {/* ✅ Admin Dashboard - Only for Admin Users */}
                  {/* {displayUserInfo?.role === 1 && (
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/admin"
                          className={`block px-4 py-2 text-sm font-semibold ${
                            active ? "bg-[#FFE9CC] text-[#8B4D3A]" : "text-[#8B4D3A]"
                          } border-t border-gray-100`}
                        >
                           Admin Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                  )} */}

                  {/* Logout */}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={handleLogout}
                        className={`block w-full px-4 py-2 text-left text-sm ${
                          active ? "bg-[#FFE9CC] text-[#5B2C1D]" : "text-gray-900"
                        }`}
                      >
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                  {displayUserInfo?.role === 1 && (
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/admin"
                          className={`block px-4 py-2 text-sm font-semibold ${
                            active ? "bg-[#FFE9CC] text-[#8B4D3A]" : "text-[#8B4D3A]"
                          } border-t border-gray-100`}
                        >
                           Admin Dashboard
                        </Link>
                      )}
                    </Menu.Item>
                  )}

                </Menu.Items>
              </Transition>
            </Menu>
          ) : (
            <Link
              to="/login"
              className="rounded-md bg-[#FFD9A0] px-4 py-2 text-base font-bold text-[#5B2C1D] transition-all duration-200 hover:bg-white"
            >
              Login
            </Link>
          )}
        </div>

        <button
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[#FFD9A0] transition hover:bg-white/10 focus:outline-none md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      {menuOpen && (
        <div className="flex flex-col space-y-2 bg-[#4b2418] px-4 pb-4 shadow-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={linkClass}
            >
              {item.title}
            </Link>
          ))}

          {displayUserInfo ? (
            <>
              {/* ✅ Admin Dashboard - Only for Admin Users in Mobile Menu */}
              {displayUserInfo?.role === 1 && (
                <Link
                  to="/admin"
                  onClick={() => setMenuOpen(false)}
                  className={linkClass}
                >
                  📊 Admin Dashboard
                </Link>
              )}

              <Link
                to="/orderdropdown"
                onClick={() => setMenuOpen(false)}
                className={linkClass}
              >
                Your Orders
              </Link>
              <button onClick={handleLogout} className={`${linkClass} text-left`}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuOpen(false)} className={linkClass}>
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}