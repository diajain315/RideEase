import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Formik, ErrorMessage, Form, useFormik } from "formik";
import Error from "../Helper/Error";
import Layout from "./Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faUser, faPhone, faEnvelope, faSave, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { LoggedInUser, editUserById } from "../redux/features/User/authAction";
import * as Yup from "yup";

export const ValidateProfile = Yup.object().shape({

  name: Yup.string()
    .matches(
      /^[A-Za-z]+(?:\s[A-Za-z]+){0,1}$/,
      "Username can only contain alphabetical characters with one whitespace."
    )
    .min(3, "Username must be at least 3 characters long.")
    .max(15, "Username cannot be longer than 15 characters.")
    .required("*Name is required"),
    phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter a valid Indian phone number")
    .required("Phone number is required"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Select a valid gender")
    .required("Gender is required"),
});

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo, loading } = useSelector((state) => state.auth);
  const [profileError, setProfileError] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    gender: ""
  });

  // Fetch user data on component mount
  useEffect(() => {
    dispatch(LoggedInUser());
  }, [dispatch]);

  // Update local form values whenever userInfo changes
  useEffect(() => {
    if (userInfo) {
      setFormValues({
        name: userInfo.name || "",
        email: userInfo.email || "",
        phone: userInfo.phone || "",
        gender: userInfo.gender || "",
      });
    }
  }, [userInfo]);

  // Success message timeout
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    if (updateSuccess) {
      const timer = setTimeout(() => {
        setUpdateSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [updateSuccess]);

  // Handle form submission
  const handleSubmit = async (values, actions) => {
     
    const updateData = {
      name: values.name,
      phone: values.phone,
      gender: values.gender,
    };
    let data = {
        id: userInfo._id,
        formdata: updateData,
      };
    try {
    await dispatch(editUserById(data));
      setUpdateSuccess(true);
      setProfileError("");
      // Refresh user data
      dispatch(LoggedInUser());
    } catch (error) {
      setProfileError(error?.message || "Update failed. Please try again.");
    } finally {
      actions.setSubmitting(false);
    }
  };

  if (loading || !userInfo) {
    return (
      <Layout title="RideEase : Profile Loading">
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B4D3A]"></div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="RideEase : User Profile">
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] py-8 px-4">
        {/* Card container with proper spacing */}
        <div className="w-full max-w-md p-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg">
          
          {/* Logo with top spacing */}
          <div className="flex flex-col items-center mb-6">
            <Link to="/" className="transition-transform duration-300 hover:scale-105">
              <img
                src="../images/BikeForRentFinalLogo.png"
                alt="Bike-4-Rent Logo"
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Heading */}
          <h2 className="text-xl font-bold text-center text-[#5a4239] mb-6">
            User Profile
          </h2>

          {updateSuccess && (
            <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
              Profile updated successfully!
            </div>
          )}

          <Formik
            enableReinitialize={true} // This is key to updating when props change
            initialValues={formValues} // Use the state that updates with userInfo
           validationSchema={ValidateProfile}
            onSubmit={handleSubmit}
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
                      value={props.values.name}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="name" />
                  </span>
                </div>

                {/* Email Field (Read-only) */}
                <div className="group">
                  <label className="block text-sm font-medium text-[#5a4239]/90 mb-1.5">
                    Email address (cannot be changed)
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
                      value={props.values.email}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg bg-gray-100 cursor-not-allowed"
                      disabled
                    />
                  </div>
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
                      value={props.values.phone}
                      className="w-full pl-9 pr-3 py-2 text-sm border border-[#DCA689]/70 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#733F30]"
                      required
                    />
                  </div>
                  <span className="text-red-500 text-xs">
                    <ErrorMessage name="phone" />
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

                {profileError && <Error>{profileError}</Error>}

                <div className="flex flex-col sm:flex-row gap-3 mt-5">
  <button
    type="submit"
    className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white rounded-lg hover:from-[#733F30] hover:to-[#8B4D3A] focus:outline-none focus:ring-1 focus:ring-[#733F30] flex items-center justify-center"
    disabled={props.isSubmitting}
  >
    <FontAwesomeIcon icon={faSave} className="mr-2" />
    {props.isSubmitting ? "Updating..." : "Update Profile"}
  </button>
  
  <Link
  to="/orderdropdown"
  className="flex-1 py-2.5 px-4 bg-gradient-to-r from-[#5a4239] to-[#785c51] text-white rounded-lg hover:from-[#4a352d] hover:to-[#5a4239] focus:outline-none focus:ring-1 focus:ring-[#4a352d] flex items-center justify-center"
>
  <FontAwesomeIcon icon={faListCheck} className="mr-2" />
  Your Orders
</Link>

</div>
              </form>
            )}
          </Formik>

          <div className="mt-6 text-center">
            <Link 
              to="/" 
              className="text-sm text-[#8B4D3A] hover:underline font-medium"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UserProfile;