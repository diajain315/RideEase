// // import { comparePassword, hashPassword } from "../helpers/authHelper.js";
// // import userModel from "../models/userModel.js";
// // import JWT from "jsonwebtoken";

// // // POST REGISTER
// // export const registerController = async (req, res) => {
// //   try {
// //     const { name, email, password, role, answer } = req.body;
// //     let isAdmin;
// //     // Validations
// //     if (!name) {
// //       return res.send({ error: "Name is required" });
// //     }
// //     if (!email) {
// //       return res.send({ error: "Email is required" });
// //     }
// //     if (!password) {
// //       return res.send({ error: "Password is required" });
// //     }
// //     if (!answer) {
// //       return res.send({ error: "Security Question field is required" });
// //     }
// //     if(email==='djmgroup23@gmail.com'){
// //       isAdmin=true;
// //     }
// //     // check user
// //     const existingUser = await userModel.findOne({ email });
// //     // existing user
// //     if (existingUser && !isAdmin) {
// //       return res.status(409).send({
// //         success: false,
// //         message: "Email already exists !!!",
// //       });
// //     }
// //     // register user
// //     const hashedPassword = await hashPassword(password);
// //     // save
// //     const user = await new userModel({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       answer,
// //       role : isAdmin ? 1:0
// //     }).save();
// //     console.log('40:',user);
// //     res.status(201).send({
// //       success: true,
// //       message: "User registration successfull",
// //       user: {
// //         user: user.name,
// //         email: user.email,
// //         _id: user._id,
// //       },
// //     });
// //   } catch (error) {
// //     res.status(500).send({
// //       success: false,
// //       message: "Registration error",
// //       error,
// //     });
// //   }
// // };

// // // POST LOGIN
// // export const loginController = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;
// //     // Validation
// //     if (!email || !password) {
// //       return res.status(400).send({
// //         success: false,
// //         message: "Invalid or missing credentials",
// //       });
// //     }
// //     // check user
// //     const user = await userModel.findOne({ email });
// //     if (!user) {
// //       return res.status(401).send({
// //         success: false,
// //         message: "Invalid credentials",
// //       });
// //     }
// //     const match = await comparePassword(password, user.password);
// //     if (!match) {
// //       return res.status(401).send({
// //         success: false,
// //         message: "Invalid credentials",
// //       });
// //     }
// //     // token
// //     const token = JWT.sign(
// //       { _id: user._id, name: user.name, role: user.role },
// //       process.env.JWT_SECRET,
// //       {
// //         expiresIn: "7d",
// //       }
// //     );
// //     res.status(200).send({
// //       success: true,
// //       message: "Login successfull",
// //       user: {
// //         name: user.name,
// //         email: user.email,
// //         _id: user._id,
// //         role: user.role,
// //       },
// //       token,
// //     });
// //   } catch (error) {
// //     res.status(500).send({
// //       success: false,
// //       message: "Login failed",
// //       error,
// //     });
// //   }
// // };

// // // Fetch all the users
// // export const AllUsersController = async (req, res) => {
// //   try {
// //     const allUsers = await userModel.find({}, { password: 0 });
// //     if (!allUsers) {
// //       return res.status(204).send({
// //         success: true,
// //         message: "No data was found",
// //       });
// //     }
// //     res.status(200).send({
// //       success: true,
// //       users: allUsers,
// //     });
// //   } catch (error) {
// //     res.status(500).send({
// //       success: false,
// //       message: "Something went wrong",
// //       error,
// //     });
// //   }
// // };

// // // Forgot Password Controller
// // export const forgotPasswordController = async (req, res) => {
// //   try {
// //     const { email, answer, newPassword } = req.body;
// //     if (!email) {
// //       return res.status(400).send({ message: "Email is required" });
// //     }
// //     if (!answer) {
// //       return res
// //         .status(400)
// //         .send({ message: "Security question field is required" });
// //     }
// //     if (!newPassword) {
// //       return res.status(400).send({ message: "New Password is required" });
// //     }

// //     const user = await userModel.findOne({ email });
// //     // validation
// //     if (!user) {
// //       return res.status(400).send({
// //         success: false,
// //         message: "Invalid Credentials",
// //       });
// //     }
// //     if (user.answer == answer) {
// //       const hashed = await hashPassword(newPassword);
// //       await userModel.findOneAndUpdate({ email }, { password: hashed });
// //       // token
// //       const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
// //         expiresIn: "7d",
// //       });
// //       res.status(200).send({
// //         success: true,
// //         message: "Password updated successfully",
// //         user: {
// //           name: user.name,
// //           email: user.email,
// //           _id: user._id,
// //           role: user.role,
// //         },
// //         token,
// //       });
// //     } else {
// //       return res.status(401).send({
// //         success: false,
// //         message: "Security answer did not match !!",
// //       });
// //     }

// //     // check
// //   } catch (error) {
// //     res
// //       .status(500)
// //       .send({ success: false, message: "Something went wrong", error });
// //   }
// // };

// // // update profile or get the status of LoggedInUser

// // export const userProfileController = async (req, res) => {
// //   try {
// //     const user = await userModel.findById(req.user._id);
// //     if (!user) {
// //       res.status(400).send({
// //         success: false,
// //         message: "User not found ",
// //       });
// //       res.status(200).send({
// //         success: false,
// //         user,
// //         message: "Userinfo fetched successfully",
// //       });
// //     }
// //   } catch (error) {
// //     res.status(500).send({
// //       success: false,
// //       error,
// //       message: "Something went wrong",
// //     });
// //   }
// // };


// import { comparePassword, hashPassword } from "../helpers/authHelper.js";
// import userModel from "../models/userModel.js";
// import JWT from "jsonwebtoken";
// import nodemailer from "nodemailer"; // ✅ Added for sending OTP

// // ✅ Utility function to generate 6-digit OTP
// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// // ✅ Send OTP Email via nodemailer
// const sendOtpEmail = async (email, otp) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MAIL_USER, // your Gmail
//       pass: process.env.MAIL_PASS, // app password from Gmail
//     },
//   });

//   await transporter.sendMail({
//     from: `"BikeRental App" <${process.env.MAIL_USER}>`,
//     to: email,
//     subject: "Your OTP Code",
//     html: `<p>Your OTP is <strong>${otp}</strong>. It expires in 5 minutes.</p>`,
//   });
// };

// // ✅ New controller: Send OTP
// export const sendOtpController = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) return res.status(400).send({ success: false, message: "Email is required" });

//     const user = await userModel.findOne({ email });
//     if (!user) return res.status(404).send({ success: false, message: "User not found" });

//     const otp = generateOTP();
//     const expiry = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes from now

//     user.otp = { code: otp, expiry };
//     await user.save();

//     await sendOtpEmail(email, otp);

//     res.status(200).send({ success: true, message: "OTP sent to your email" });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Failed to send OTP", error });
//   }
// };

// // POST REGISTER – Existing
// export const registerController = async (req, res) => {
//   try {
//     const { name, email, password, role, answer } = req.body;
//     let isAdmin;

//     if (!name) return res.send({ error: "Name is required" });
//     if (!email) return res.send({ error: "Email is required" });
//     if (!password) return res.send({ error: "Password is required" });
//     if (!answer) return res.send({ error: "Security Question field is required" });

//     if (email === "djmgroup23@gmail.com") isAdmin = true;

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser && !isAdmin) {
//       return res.status(409).send({ success: false, message: "Email already exists !!!" });
//     }

//     const hashedPassword = await hashPassword(password);

//     const user = await new userModel({
//       name,
//       email,
//       password: hashedPassword,
//       answer,
//       role: isAdmin ? 1 : 0,
//     }).save();

//     res.status(201).send({
//       success: true,
//       message: "User registration successful",
//       user: { user: user.name, email: user.email, _id: user._id },
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Registration error", error });
//   }
// };

// // POST LOGIN – Existing
// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).send({ success: false, message: "Invalid or missing credentials" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(401).send({ success: false, message: "Invalid credentials" });
//     }

//     const match = await comparePassword(password, user.password);
//     if (!match) {
//       return res.status(401).send({ success: false, message: "Invalid credentials" });
//     }

//     const token = JWT.sign(
//       { _id: user._id, name: user.name, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).send({
//       success: true,
//       message: "Login successful",
//       user: { name: user.name, email: user.email, _id: user._id, role: user.role },
//       token,
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Login failed", error });
//   }
// };

// // Forgot Password Controller – Existing
// export const forgotPasswordController = async (req, res) => {
//   try {
//     const { email, answer, newPassword } = req.body;
//     if (!email || !answer || !newPassword) {
//       return res.status(400).send({ message: "All fields are required" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).send({ success: false, message: "Invalid Credentials" });
//     }

//     if (user.answer === answer) {
//       const hashed = await hashPassword(newPassword);
//       await userModel.findOneAndUpdate({ email }, { password: hashed });

//       const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "7d",
//       });

//       res.status(200).send({
//         success: true,
//         message: "Password updated successfully",
//         user: {
//           name: user.name,
//           email: user.email,
//           _id: user._id,
//           role: user.role,
//         },
//         token,
//       });
//     } else {
//       return res.status(401).send({
//         success: false,
//         message: "Security answer did not match !!",
//       });
//     }
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Something went wrong", error });
//   }
// };

// // AllUsersController – Existing
// export const AllUsersController = async (req, res) => {
//   try {
//     const allUsers = await userModel.find({}, { password: 0 });
//     if (!allUsers) {
//       return res.status(204).send({ success: true, message: "No data was found" });
//     }
//     res.status(200).send({ success: true, users: allUsers });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Something went wrong", error });
//   }
// };

// // User Profile Controller – Existing
// export const userProfileController = async (req, res) => {
//   try {
//     const user = await userModel.findById(req.user._id);
//     if (!user) {
//       return res.status(400).send({ success: false, message: "User not found" });
//     }

//     res.status(200).send({
//       success: true,
//       user,
//       message: "User info fetched successfully",
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, error, message: "Something went wrong" });
//   }
// };


// import { comparePassword, hashPassword } from "../helpers/authHelper.js";
// import userModel from "../models/userModel.js";
// import JWT from "jsonwebtoken";
// import nodemailer from "nodemailer"; // ✅ For sending OTP

// // ✅ Utility function to generate 6-digit OTP
// const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// // ✅ Function to send OTP email
// const sendOtpEmail = async (email, otp) => {
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: `"BikeRental App" <${process.env.MAIL_USER}>`,
//     to: email,
//     subject: "Your OTP Code",
//     html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 5 minutes.</p>`,
//   });
// };

// // ✅ Verify OTP Controller
// export const verifyOtpController= async (req, res) => {
//   try {
//     const { email, otp } = req.body;
//     if (!email || !otp) {
//       return res.status(400).send({ success: false, message: "Email and OTP are required" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user || !user.otp || !user.otp.code) {
//       return res.status(404).send({ success: false, message: "OTP not found or expired" });
//     }

//     const isOtpValid = user.otp.code === otp;
//     const isOtpExpired = new Date() > new Date(user.otp.expiry);

//     if (!isOtpValid) {
//       return res.status(401).send({ success: false, message: "Invalid OTP" });
//     }

//     if (isOtpExpired) {
//       return res.status(410).send({ success: false, message: "OTP expired" });
//     }

//     // ✅ Clear OTP after successful verification
//     user.otp = undefined;
//     await user.save();

//     res.status(200).send({ success: true, message: "OTP verified successfully" });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "OTP verification failed", error });
//   }
// };


// // ✅ SEND OTP Controller
// export const sendOtpController = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) return res.status(400).send({ success: false, message: "Email is required" });

//     const user = await userModel.findOne({ email });
//     if (!user) return res.status(404).send({ success: false, message: "User not found" });

//     const otp = generateOTP();
//     const expiry = new Date(Date.now() + 1 * 60 * 1000); // 1 minutes

//     user.otp = { code: otp, expiry };
//     await user.save();
//     await sendOtpEmail(email, otp);

//     res.status(200).send({ success: true, message: "OTP sent successfully to email" });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Failed to send OTP", error });
//   }
// };

// // ✅ REGISTER Controller
// export const registerController = async (req, res) => {
//   try {
//     const { name, email, password, role, answer } = req.body;
//     let isAdmin = false;

//     if (!name) return res.send({ error: "Name is required" });
//     if (!email) return res.send({ error: "Email is required" });
//     if (!password) return res.send({ error: "Password is required" });
//     if (!answer) return res.send({ error: "Security Question field is required" });

//     if (email === "djmgroup23@gmail.com") isAdmin = true;

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser && !isAdmin) {
//       return res.status(409).send({ success: false, message: "Email already exists !!!" });
//     }

//     const hashedPassword = await hashPassword(password);

//     const user = await new userModel({
//       name,
//       email,
//       password: hashedPassword,
//       answer,
//       role: isAdmin ? 1 : 0,
//     }).save();

//     res.status(201).send({
//       success: true,
//       message: "User registration successful",
//       user: { name: user.name, email: user.email, _id: user._id },
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Registration error", error });
//   }
// };

// // ✅ LOGIN Controller
// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).send({ success: false, message: "Invalid or missing credentials" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(401).send({ success: false, message: "Invalid credentials" });
//     }

//     const match = await comparePassword(password, user.password);
//     if (!match) {
//       return res.status(401).send({ success: false, message: "Invalid credentials" });
//     }

//     const token = JWT.sign(
//       { _id: user._id, name: user.name, role: user.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     res.status(200).send({
//       success: true,
//       message: "Login successful",
//       user: { name: user.name, email: user.email, _id: user._id, role: user.role },
//       token,
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Login failed", error });
//   }
// };

// // ✅ FORGOT PASSWORD Controller
// export const forgotPasswordController = async (req, res) => {
//   try {
//     const { email, answer, newPassword } = req.body;
//     if (!email || !answer || !newPassword) {
//       return res.status(400).send({ message: "All fields are required" });
//     }

//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(400).send({ success: false, message: "Invalid Credentials" });
//     }

//     if (user.answer !== answer) {
//       return res.status(401).send({ success: false, message: "Security answer did not match!" });
//     }

//     const hashed = await hashPassword(newPassword);
//     await userModel.findOneAndUpdate({ email }, { password: hashed });

//     const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

//     res.status(200).send({
//       success: true,
//       message: "Password updated successfully",
//       user: { name: user.name, email: user.email, _id: user._id, role: user.role },
//       token,
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Something went wrong", error });
//   }
// };

// // ✅ GET ALL USERS
// export const AllUsersController = async (req, res) => {
//   try {
//     const allUsers = await userModel.find({}, { password: 0 });
//     if (!allUsers || allUsers.length === 0) {
//       return res.status(204).send({ success: true, message: "No data found" });
//     }
//     res.status(200).send({ success: true, users: allUsers });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Something went wrong", error });
//   }
// };

// // ✅ USER PROFILE Controller
// export const userProfileController = async (req, res) => {
//   try {
//     const user = await userModel.findById(req.user._id);
//     if (!user) {
//       return res.status(400).send({ success: false, message: "User not found" });
//     }

//     res.status(200).send({
//       success: true,
//       user,
//       message: "User info fetched successfully",
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, error, message: "Something went wrong" });
//   }
// };



import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";
import nodemailer from "nodemailer";
import fs from "fs";


// ✅ Utility to generate 6-digit OTP
const generateOTP = () => Math.floor(1000 + Math.random() * 1000).toString();

// ✅ Nodemailer setup to send OTP email
const sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Bike-4-Rent App" <${process.env.MAIL_USER}>`,
    to: email,
    subject: "Your OTP Code",
    html: `<p>Your OTP is <strong>${otp}</strong>. It will expire in 1 minute.</p>`,
  });
};

export const registerController = async (req, res) => {
  try {
    const { name, email, password,phone,gender } = req.body;
    let isAdmin = email === "djmgroup23@gmail.com";

    if (!name || !email || !password || !phone || !gender) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser && !isAdmin) {
      return res.status(409).send({ success: false, message: "Email already exists!" });
    }

    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      password: hashedPassword,
      role: isAdmin ? 1 : 0,
      phone,
      gender,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user: { name: user.name, email: user.email, _id: user._id,phone: user.phone,gender: user.gender },
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Registration error", error });
  }
};
// export const registerController = async (req, res) => {
//   try {
//     const { name, email, password} = req.body;

//     let isAdmin = email === "djmgroup23@gmail.com";

//     if (!name || !email || !password ) {
//       return res.status(400).send({ error: "All fields are required" });
//     }

//     const existingUser = await userModel.findOne({ email });
//     if (existingUser && !isAdmin) {
//       return res.status(409).send({ success: false, message: "Email already exists!" });
//     }

//     const hashedPassword = await hashPassword(password);
//     const user = await new userModel({
//       name,
//       email,
//       password: hashedPassword,
//       answer,
//       role: isAdmin ? 1 : 0,
//     }).save();

//     res.status(201).send({
//       success: true,
//       message: "User registered successfully",
//       user: { name: user.name, email: user.email, _id: user._id},
//     });
//   } catch (error) {
//     res.status(500).send({ success: false, message: "Registration error", error });
//   }
// };

// ✅ LOGIN Controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({ success: false, message: "Missing credentials" });
    }

    const user = await userModel.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
      return res.status(401).send({ success: false, message: "Invalid credentials" });
    }

    const token = JWT.sign(
      { _id: user._id, name: user.name, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: { name: user.name, email: user.email, _id: user._id, role: user.role },
      token,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Login failed", error });
  }
};

// ✅ SEND OTP Controller
export const sendOtpController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).send({ success: false, message: "Email is required" });

    const user = await userModel.findOne({ email });
    if (!user) return res.status(404).send({ success: false, message: "User not found" });

    const otp = generateOTP();
    const expiry = new Date(Date.now() + 1 * 60 * 1000); // 1 min

    user.otp = { code: otp, expiry };
    await user.save();
    console.log('✅ OTP saved:', user.otp); 
    console.log(user);
    await sendOtpEmail(email, otp);

    res.status(200).send({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Failed to send OTP", error });
  }
};

// ✅ VERIFY OTP Controller
export const verifyOtpController = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).send({ success: false, message: "Email and OTP are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user || !user.otp || !user.otp.code) {
      return res.status(404).send({ success: false, message: "OTP not found or expired" });
    }

    const isOtpValid = user.otp.code === otp;
    const isOtpExpired = new Date() > new Date(user.otp.expiry);

    if (!isOtpValid) {
      return res.status(401).send({ success: false, message: "Invalid OTP" });
    }

    if (isOtpExpired) {
      return res.status(410).send({ success: false, message: "OTP expired" });
    }

    user.otp = undefined;
    await user.save();

    res.status(200).send({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "OTP verification failed", error });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email || !answer || !newPassword) {
      return res.status(400).send({ message: "All fields are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user || user.answer !== answer) {
      return res.status(401).send({ success: false, message: "Invalid credentials or answer" });
    }

    const hashed = await hashPassword(newPassword);
    await userModel.findOneAndUpdate({ email }, { password: hashed });

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.status(200).send({
      success: true,
      message: "Password updated successfully",
      user: { name: user.name, email: user.email, _id: user._id, role: user.role },
      token,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something went wrong", error });
  }
};

export const resetPasswordController = async (req, res) => {
  try {

    console.log('818:',req.body);
    const { newPassword, email } = req.body;
    if (!newPassword) {
      return res.status(400).send({ success: false, message: "Email and new password are required" });
    }

    const user = await userModel.findOne({ email });

      
    const hashedPassword = await hashPassword(newPassword);
    user.password = hashedPassword;
    user.otp = undefined;
    await user.save();

    res.status(200).send({ success: true, message: "Password reset successful" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Password reset failed", error });
  }
};

// export const resetPasswordController = async(req,res) =>{
//   const {email} = req.body;
//   console.log(email);

// };

// ✅ GET ALL USERS
export const AllUsersController = async (req, res) => {
  try {
    const allUsers = await userModel.find({}, { password: 0 });
    if (!allUsers || allUsers.length === 0) {
      return res.status(204).send({ success: true, message: "No data found" });
    }
    res.status(200).send({ success: true, users: allUsers });
  } catch (error) {
    res.status(500).send({ success: false, message: "Something went wrong", error });
  }
};


export const userProfileController = async (req, res) => {
  try {
    const user = await userModel.findById(req.user._id).select("-password"); // Exclude password
    if (!user) {
      return res.status(400).send({ success: false, message: "User not found" });
    }

    res.status(200).send({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        _id: user._id,
        gender: user.gender,
        phone: user.phone,
        role: user.role
      },
      message: "User info fetched successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, error, message: "Something went wrong" });
  }
};


export const editUserController = async (req, res) => {
  try {
    const { id, formdata } = req.body;
    
    // Validate input
    if (!id) {
      return res.status(400).json({ 
        success: false, 
        message: "User ID is required" 
      });
    }
    
    if (!formdata || Object.keys(formdata).length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "No data provided for update" 
      });
    }
    
    // Find user by ID and update
    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      { $set: formdata },
      { new: true, runValidators: true }
    ).select("-password"); // Exclude password from the returned document
    
    // Check if user exists
    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      user: updatedUser
    });
    
  } catch (error) {
    console.error("Error updating user:", error);
    
    // Handle specific MongoDB errors
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format"
      });
    }
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    
    // Generic error response
    return res.status(500).json({
      success: false,
      message: "Error updating user profile"
    });
  }
};

export const updateLicenseDetails = async (req, res) => {
  try {
   
    const { userId, licenseNumber } = req.fields;
    const {licenseFile} = req.files;    
    console.log(JSON.stringify(licenseFile, null, 2));

    if (!userId || !licenseNumber || !licenseFile) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Optionally, add file validation (e.g., checking file type)
    const allowedFileTypes = ["image/jpeg", "image/png", "application/pdf"];
    if (!allowedFileTypes.includes(licenseFile.type)) {
      return res.status(400).json({ success: false, message: "Invalid file type. Please upload an image or PDF" });
    }
    let licenseData = {};
    if (licenseFile) {
      licenseData = {
        licenseFile: {
          data: fs.readFileSync(licenseFile.path),
          contentType: licenseFile.type,
        },
      };
    }    // Update the user's license details
    const user = await userModel.findByIdAndUpdate(
      userId,
      {
        licenseNumber,
        ...licenseData
        , // Adds the file path to the user
      },
      { new: true } // Returns the updated user
    );

    // If the user isn't found
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: error.message });
  }
};
