
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { userRegister } from "../redux/features/User/authAction";
import { Formik, ErrorMessage } from "formik";
import { ValidateUser } from "../common/Validation";
import { clearFields } from "../redux/features/User/authSlice";
import Error from "../Helper/Error";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success } = useSelector((state) => state.auth);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (success) {
      dispatch(clearFields());
      navigate("/login");
    }
  }, [success]);

  return (
    <Layout title={"RideEase : Signup"}>
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] py-8 px-4">
        {/* Card container with proper spacing */}
        <div className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
          
          {/* Logo with top spacing */}
          <div className="flex flex-col items-center mb-6">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="../images/BikeForRentFinalLogo.png"
                alt="RideEase Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-center text-[#5a4239] mb-6">
            Sign up for your account
          </h2>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
              phone: "", // Added phone number field
              gender: "", // New field for gender
            }}
            validationSchema={ValidateUser}
            onSubmit={async (values, actions) => {
              const data = await dispatch(userRegister(values));
              if (data.error) {
                setErrors(data.payload);
                dispatch(clearFields());
              }
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit} className="space-y-4">
                {/* Username Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Username
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.name || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="name" />
                  </span>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Email address
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.email || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="email" />
                  </span>
                </div>

                {/* Phone Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Phone Number
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="text"
                      autoComplete="tel"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.phone || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="phone" />
                  </span>
                </div>

                {/* Password Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faKey}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="password" />
                  </span>
                </div>

                {/* Confirm Password Field */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faKey}
                      className="absolute left-3 top-3 text-[#A15E48] text-sm"
                    />
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.confirmPassword || ""}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="confirmPassword" />
                  </span>
                </div>

                {/* Gender Radio Buttons */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Gender
                  </label>
                  <div className="relative">
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        checked={props.values.gender === "male"}
                        className="mr-2"
                      />
                      Male
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        checked={props.values.gender === "female"}
                        className="mr-2"
                      />
                      Female
                    </label>
                    <label className="inline-flex items-center mr-4">
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        checked={props.values.gender === "other"}
                        className="mr-2"
                      />
                      Other
                    </label>
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="gender" />
                  </span>
                </div>

                {errors && <Error>{errors}</Error>}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 mt-5 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Signing up..." : "Sign up"}
                </button>
              </form>
            )}
          </Formik>

          <div className="mt-6 text-center">
            <p className="text-sm text-[#5a4239]/80">
              Already have an account?{" "}
              <Link to="/login" className="text-[#8B4D3A] hover:underline font-medium">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Signup;
