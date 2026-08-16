// import { createSlice } from "@reduxjs/toolkit";
// import {
//   userLogin,
//   userRegister,
//   userAll,
//   LoggedInUser,
//   editUserById,
//   getUserById,
//   forgotPassword,
// } from "./authAction";
// import jwt from "jwt-decode";
// // initialize userToken from local storage
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;
// const userInfo = userToken ? jwt(userToken) : null;
// const initialState = {
//   loading: false,
//   userInfo,
//   userToken,
//   error: null,
//   success: false,
//   users: [],
//   userById: null,
// };
// // console.log(userInfo);
// const authSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("userToken");
//       state.loading = false;
//       state.userInfo = null;
//       state.userToken = null;
//       state.error = null;
//       state.users = [];
//     },
//     setCredentials: (state, { payload }) => {
//       state.userInfo = payload.data;
//     },
//     clearFields: (state, { payload }) => {
//       state.success = false;
//       state.loading = false;
//       state.error = null;
//       state.userById = null;
//     },
//   },
//   extraReducers: {
//     // register user
//     [userRegister.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userRegister.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.success = true; // registration successful
//     },
//     [userRegister.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // login user
//     [userLogin.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userLogin.fulfilled]: (state, { payload }) => {
//       const user = jwt(payload.token);
//       state.loading = false;
//       state.success = true;
//       state.userInfo = payload.user;
//       state.userToken = payload.token;
//       localStorage.setItem("userToken", payload.token);
//     },
//     [userLogin.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // forget-Password user
//     [forgotPassword.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [forgotPassword.fulfilled]: (state, { payload }) => {
//       const user = jwt(payload.token);
//       state.loading = false;
//       state.userInfo = payload.user;
//       state.userToken = payload.token;
//     },
//     [forgotPassword.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     //all the users

//     [userAll.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userAll.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.users = payload;
//     },
//     [userAll.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // get logged in  user
//     [LoggedInUser.pending]: (state) => {
//       state.loading = true;
//       state.error = false;
//     },
//     [LoggedInUser.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
//     },
//     [LoggedInUser.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     //all the users by id
//     [getUserById.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [getUserById.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userById = payload;
//     },
//     [getUserById.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     //update user
//     [editUserById.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [editUserById.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.success = true;
//     },
//     [editUserById.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//   },
// });

// export const { logout, setCredentials, clearFields } = authSlice.actions;
// export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import {
//   userLogin,
//   userRegister,
//   userAll,
//   LoggedInUser,
//   editUserById,
//   getUserById,
//   forgotPassword,
//   sendOtp,
// } from "./authAction";
// import jwt from "jwt-decode";

// // Initialize userToken from local storage
// const userToken = localStorage.getItem("userToken")
//   ? localStorage.getItem("userToken")
//   : null;

// let userInfo = null;
// try {
//   userInfo = userToken ? jwt(userToken) : null;
// } catch (error) {
//   console.error("Invalid token:", error);
//   localStorage.removeItem("userToken");
//   userInfo = null;
// }

// const initialState = {
//   loading: false,
//   userInfo: userInfo,
//   userToken: userToken,
//   error: null,
//   success: false,
//   users: [],
//   userById: null,
// };

// const authSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       localStorage.removeItem("userToken");
//       localStorage.removeItem("userId");
//       state.loading = false;
//       state.userInfo = null;
//       state.userToken = null;
//       state.error = null;
//       state.users = [];
//       state.success = false;
//     },
//     setCredentials: (state, { payload }) => {
//       state.userInfo = payload.data;
//     },
//     clearFields: (state) => {
//       state.success = false;
//       state.loading = false;
//       state.error = null;
//       state.userById = null;
//     },
//   },
//   extraReducers: {
//     // Send OTP
//     [sendOtp.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [sendOtp.fulfilled]: (state) => {
//       state.loading = false;
//       state.success = true;
//     },
//     [sendOtp.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // register user
//     [userRegister.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userRegister.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.success = true;
//     },
//     [userRegister.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // login user
//     [userLogin.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userLogin.fulfilled]: (state, { payload }) => {
//       try {
//         state.loading = false;
//         state.success = true;
//         state.userInfo = payload.user;
//         state.userToken = payload.token;
//         localStorage.setItem("userToken", payload.token);
//       } catch (error) {
//         state.loading = false;
//         state.error = "Invalid token received";
//       }
//     },
//     [userLogin.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // forget-Password user
//     [forgotPassword.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [forgotPassword.fulfilled]: (state, { payload }) => {
//       try {
//         state.loading = false;
//         state.userInfo = payload.user;
//         state.userToken = payload.token;
//         state.success = true;
//         if (payload.token) {
//           localStorage.setItem("userToken", payload.token);
//         }
//       } catch (error) {
//         state.loading = false;
//         state.error = "Invalid token received";
//       }
//     },
//     [forgotPassword.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     //all the users
//     [userAll.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [userAll.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.users = payload;
//     },
//     [userAll.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     // get logged in user - FIXED
//     [LoggedInUser.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [LoggedInUser.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userInfo = payload;
//       state.success = true;
//       state.error = null;
//     },
//     [LoggedInUser.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//       state.userInfo = null;
//     },

//     //all the users by id
//     [getUserById.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [getUserById.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.userById = payload;
//     },
//     [getUserById.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },

//     //update user
//     [editUserById.pending]: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     [editUserById.fulfilled]: (state, { payload }) => {
//       state.loading = false;
//       state.success = true;
//     },
//     [editUserById.rejected]: (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     },
//   },
// });

// export const { logout, setCredentials, clearFields } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  userRegister,
  userAll,
  LoggedInUser,
  editUserById,
  getUserById,
  forgotPassword,
  sendOtp,
} from "./authAction";
import jwt from "jwt-decode";

// Initialize userToken from local storage
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

let userInfo = null;
try {
  userInfo = userToken ? jwt(userToken) : null;
} catch (error) {
  console.error("Invalid token:", error);
  localStorage.removeItem("userToken");
  userInfo = null;
}

const initialState = {
  loading: false,
  userInfo: userInfo,
  userToken: userToken,
  error: null,
  success: false,
  users: [],
  userById: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userId");
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
      state.users = [];
      state.success = false;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload.data;
    },
    clearFields: (state) => {
      state.success = false;
      state.loading = false;
      state.error = null;
      state.userById = null;
    },
  },
  extraReducers: {
    // Send OTP
    [sendOtp.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [sendOtp.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [sendOtp.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // register user
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      try {
        state.loading = false;
        state.success = true;
        state.userInfo = payload.user;
        state.userToken = payload.token;
        localStorage.setItem("userToken", payload.token);
        
        // ✅ Store userInfo with role in localStorage
        const userData = {
          name: payload.user.name,
          email: payload.user.email,
          _id: payload.user._id,
          role: payload.user.role || 0,
          gender: payload.user.gender || "male"
        };
        localStorage.setItem("userInfo", JSON.stringify(userData));
      } catch (error) {
        state.loading = false;
        state.error = "Invalid token received";
      }
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // forget-Password user
    [forgotPassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [forgotPassword.fulfilled]: (state, { payload }) => {
      try {
        state.loading = false;
        state.userInfo = payload.user;
        state.userToken = payload.token;
        state.success = true;
        if (payload.token) {
          localStorage.setItem("userToken", payload.token);
          
          // ✅ Store userInfo with role in localStorage
          const userData = {
            name: payload.user.name,
            email: payload.user.email,
            _id: payload.user._id,
            role: payload.user.role || 0,
            gender: payload.user.gender || "male"
          };
          localStorage.setItem("userInfo", JSON.stringify(userData));
        }
      } catch (error) {
        state.loading = false;
        state.error = "Invalid token received";
      }
    },
    [forgotPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //all the users
    [userAll.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.users = payload;
    },
    [userAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    // get logged in user
    [LoggedInUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [LoggedInUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.success = true;
      state.error = null;
      
      // ✅ Store userInfo with role in localStorage
      const userData = {
        name: payload.name,
        email: payload.email,
        _id: payload._id,
        role: payload.role || 0,
        gender: payload.gender || "male"
      };
      localStorage.setItem("userInfo", JSON.stringify(userData));
    },
    [LoggedInUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },

    //all the users by id
    [getUserById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getUserById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userById = payload;
    },
    [getUserById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },

    //update user
    [editUserById.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editUserById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [editUserById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout, setCredentials, clearFields } = authSlice.actions;
export default authSlice.reducer;