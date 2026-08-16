// import { createAsyncThunk } from "@reduxjs/toolkit";
// import Http from "../../../Helper/Http";
// import Axios from "axios";

// // ✅ Send OTP to email
// export const sendOtp = createAsyncThunk(
//   "user/sendOtp",
//   async ({ email }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       // Send POST request to backend API to trigger OTP email
//       const data = await Axios.post(`/api/v1/auth/send-otp`, { email }, config);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// // ✅ User Login
// export const userLogin = createAsyncThunk(
//   "user/login",
//   async (datas, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const data = await Axios.post(`/api/v1/auth/login`, datas, config);
//       localStorage.setItem("userToken", data.data.token);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// // ✅ Register User
// // export const userRegister = createAsyncThunk(
// //   "user/register",
// //   async (userData, { rejectWithValue }) => {
// //     try {
// //       const config = {
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //       };
// //       const data = await Axios.post(`/api/v1/auth/register`, userData, config);
// //       return data.data;
// //     } catch (error) {
// //       console.log(error);
// //       if (error.response && error.response.data.message) {
// //         return rejectWithValue(error.response.data.message);
// //       } else {
// //         return rejectWithValue(error.message);
// //       }
// //     }
// //   }
// // );

// export const userRegister = createAsyncThunk(
//   "user/register",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };
//       const response = await Axios.post(`/api/v1/auth/register`, userData, config);

//       // ✅ Check if the response contains the user ID
//       const userId = response.data?.user?._id || response.data?._id;

//       if (userId) {
//         localStorage.setItem("userId", userId); // ✅ Store userId
//       }

//       return response.data;
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );


// // ✅ Forgot Password (new password submission after OTP)
// export const forgotPassword = createAsyncThunk(
//   "user/forgetpassword",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const data = await Http.post(`/api/v1/auth/forgot-password`, userData);
//       return data.data;
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// // ✅ Get All Users (Admin)
// export const userAll = createAsyncThunk(
//   "user/all",
//   async (allUser, { rejectWithValue }) => {
//     try {
//       const data = await Http.get(`/api/v1/auth/getallusers`);
//       return data.data.users;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// // ✅ Get Current Logged-in User
// export const LoggedInUser = createAsyncThunk(
//   "user/me",
//   async (alluser, { rejectWithValue }) => {
//     try {
//       const data = await Http.get("/api/v1/auth/me");
//       console.log('240:',data);
//       return data.data.user;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );

// // ✅ Get User by ID
// export const getUserById = createAsyncThunk(
//   "user/id",
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await Http.get(`/user/userById/${id}`);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
// export const  updateUserProfile = createAsyncThunk(
  
// );

// // ✅ Edit User by ID
// export const editUserById = createAsyncThunk(
//   "user/edit",
//   async (item, { rejectWithValue }) => {
//     try {
//       const data = await Http.put(`/api/v1/auth/edit-user`, item);
//       return data.data;
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );


// export const addLicense = createAsyncThunk(
//   "user/license",
//   async (licenseData, { rejectWithValue }) => {
//     console.log('7:bikeAction:', licenseData);
//     try {
//       const data = await Http.post("/api/v1/auth/update-license", licenseData);
//       return data.data;
//     } catch (error) {
//       console.log(error);
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message);
//       } else {
//         return rejectWithValue(error.message);
//       }
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import Http from "../../../Helper/Http";
import Axios from "axios";

// ✅ Set base URL for Axios
Axios.defaults.baseURL = "http://localhost:5001";

// ✅ Send OTP to email
export const sendOtp = createAsyncThunk(
  "user/sendOtp",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await Axios.post(`/api/v1/auth/send-otp`, { email }, config);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ User Login
export const userLogin = createAsyncThunk(
  "user/login",
  async (datas, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const data = await Axios.post(`/api/v1/auth/login`, datas, config);
      localStorage.setItem("userToken", data.data.token);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Register User
export const userRegister = createAsyncThunk(
  "user/register",
  async (userData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await Axios.post(`/api/v1/auth/register`, userData, config);

      const userId = response.data?.user?._id || response.data?._id;
      if (userId) {
        localStorage.setItem("userId", userId);
      }

      return response.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Forgot Password
export const forgotPassword = createAsyncThunk(
  "user/forgetpassword",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await Http.post(`/api/v1/auth/forgot-password`, userData);
      return data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Get All Users (Admin)
export const userAll = createAsyncThunk(
  "user/all",
  async (allUser, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/api/v1/auth/getallusers`);
      return data.data.users;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Get Current Logged-in User - FIXED
export const LoggedInUser = createAsyncThunk(
  "user/me",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        return rejectWithValue("No token found");
      }

      const data = await Http.get("/api/v1/auth/me");
      console.log('User data:', data.data);
      
      if (data.data.success) {
        return data.data.user;
      } else {
        return rejectWithValue(data.data.message || "Failed to get user");
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem("userToken");
        localStorage.removeItem("userId");
      }
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Get User by ID
export const getUserById = createAsyncThunk(
  "user/id",
  async (id, { rejectWithValue }) => {
    try {
      const data = await Http.get(`/user/userById/${id}`);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Update User Profile
export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await Http.put(`/api/v1/auth/edit-user`, userData);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Edit User by ID
export const editUserById = createAsyncThunk(
  "user/edit",
  async (item, { rejectWithValue }) => {
    try {
      const data = await Http.put(`/api/v1/auth/edit-user`, item);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// ✅ Add License
export const addLicense = createAsyncThunk(
  "user/license",
  async (licenseData, { rejectWithValue }) => {
    console.log('License data:', licenseData);
    try {
      const data = await Http.post("/api/v1/auth/update-license", licenseData);
      return data.data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);