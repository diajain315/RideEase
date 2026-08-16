// /* global Razorpay */
// import React, { useState } from "react";
// import {useLocation, useNavigate } from "react-router-dom";
// import {
//   Button,
//   Checkbox,
//   Upload,
//   message,
//   Card,
//   Typography,
//   Divider,
//   Row,
//   Col,
// } from "antd";
// import { UploadOutlined, CheckCircleOutlined } from "@ant-design/icons";
// import axios from 'axios';
// const { Title, Paragraph } = Typography;

// const Terms = () => {
//  const navigate = useNavigate();
//   const location = useLocation();
//   const [agreed, setAgreed] = useState(false);
//   const [fileList, setFileList] = useState([]);
//   const price = location.state?.totalAmount || 100;
//   const orderId = localStorage.getItem("orderId");

//   // Handle file upload
//   const handleFileChange = ({ fileList }) => setFileList(fileList);

//   // Handle form submission
//   const checkoutHandler = async (amount, orderId) => {
//     try {
//       const { data: keyData } = await axios.get("/api/v1/getKey");
//       const { key } = keyData;

//       const { data: orderData } = await axios.post("/api/v1/payment/process", {
//         amount: amount,
//       });

//       const { order } = orderData;

//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "Bike4Rent",
//         description: "Rental Payment",
//         order_id: order.id,
//         handler: async function (response) {
//           // ✅ Razorpay payment successful
//           await axios.put(`/api/v1/order/update-status/${orderId}`, {
//             status: "Delivered",
//             paymentId: response.razorpay_payment_id,
//           });

//           window.location.href = `/payment-success?paymentId=${response.razorpay_payment_id}`;
//         },
//         modal: {
//           ondismiss: async function () {
//             // ❌ Payment closed or failed
//             await axios.put(`/api/v1/order/update-status/${orderId}`, {
//               status: "Not Delivered",
//               paymentId: "",
//             });

//             message.warning("Payment was cancelled.");
//           },
//         },
//         prefill: {
//           name: "Mannan Agrawal",
//           email: "mannanagrawal17@gmail.com",
//           contact: "9979934238",
//         },
//         theme: {
//           color: "#F37254",
//         },
//       };

//       const razor = new Razorpay(options);
//       razor.open();
//     } catch (err) {
//       console.error("❌ Error during payment setup:", err.response || err);
//       message.error("Something went wrong. Please try again.");
//     }

//     if (fileList.length === 0) {
//       message.error("Please upload a valid driving license.");
//       return;
//     }

//     message.success("Terms accepted! Proceeding to payment...");
//     navigate("/payment", {
//       state: { ...location.state, termsAccepted: true },
//     });
//   };



//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: "20px",
//       }}
//     >
//       <Card
//         title={
//           <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
//             Terms and Conditions
//           </Title>
//         }
//         bordered={false}
//         style={{
//           maxWidth: 1000, 
//           width: "100%",
//           backgroundColor: "#fff",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           borderRadius: 10,
//           padding: 24,
//         }}
//       >
//         <Typography>
//           <Paragraph
//             style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}
//           >
//             Welcome to <strong>Bike4Rent Udaipur</strong>. Please read our terms before proceeding.
//           </Paragraph>

//           <Divider />

//           <Row gutter={[16, 16]}>
//             <Col span={24}>
//               <Title level={4}>1. Rental Agreement</Title>
//               <Paragraph>
//                 - Minimum age: <strong>18 years</strong> with a valid driving license. <br />
//                 - Bike must be returned in the same condition as received. <br />
//                 - Rental period must be followed; extension requires approval.
//               </Paragraph>
//             </Col>

//             <Col span={24}>
//               <Title level={4}>2. Liability</Title>
//               <Paragraph>
//                 - Renter is responsible for <strong>damages, fines, and accidents</strong>. <br />
//                 - Company is <strong>not liable</strong> for personal injuries during the rental period.
//               </Paragraph>
//             </Col>

//             <Col span={24}>
//               <Title level={4}>3. Payment & Refund Policy</Title>
//               <Paragraph>
//                 - Full payment is required before taking the bike. <br />
//                 <strong>Cancellation Policy:</strong> <br />
//                 - <strong>No refund</strong> will be provided once the order is placed.
//               </Paragraph>
//             </Col>

//             <Col span={24}>
//               <Title level={4}>4. Driving License Requirement</Title>
//               <Paragraph>
//                 - You must upload a valid government-issued <strong>driving license</strong> before proceeding.
//               </Paragraph>

//               <Upload
//                 fileList={fileList}
//                 onChange={handleFileChange}
//                 beforeUpload={() => false} 
//                 maxCount={1}
//                 accept=".jpg,.png,.pdf"
//               >
//                 <Button
//                   icon={<UploadOutlined />}
//                   block
//                   style={{
//                     backgroundColor: "#1890ff",
//                     color: "white",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Upload Driving License
//                 </Button>
//               </Upload>
//             </Col>

//             <Col span={24}>
//               <Checkbox
//                 onChange={(e) => setAgreed(e.target.checked)}
//                 style={{ fontSize: "14px", marginTop: "10px" }}
//               >
//                 I agree to the terms and conditions
//               </Checkbox>
//             </Col>

//             <Col span={24}>
//               <Button
//                 type="primary"
//                 block
//                 icon={<CheckCircleOutlined />}
//                 size="large"
//                 className="mt-4"
//                 onClick={()=>checkoutHandler(price)}
//                 disabled={!agreed || fileList.length === 0}
//                 style={{
//                   backgroundColor: agreed && fileList.length > 0 ? "#52c41a" : "#d9d9d9",
//                   color: "white",
//                   fontWeight: "bold",
//                   marginTop: "15px",
//                 }}
//               >
//                 Proceed to Payment({price})
//               </Button>
//             </Col>
//           </Row>
//         </Typography>
//       </Card>
//     </div>
//   );
// };
// export default Terms;
/* global Razorpay */

// import React, { useState } from "react";
// import {useLocation, useNavigate } from "react-router-dom";
// import {
//   Button,
//   Checkbox,
//   Upload,
//   message,
//   Card,
//   Typography,
//   Divider,
//   Row,
//   Col,
// } from "antd";
// import { UploadOutlined, CheckCircleOutlined } from "@ant-design/icons";
// import axios from 'axios';
// const { Title, Paragraph } = Typography;

// const Terms = () => {
//  const navigate = useNavigate();
//   const location = useLocation();
//   const [agreed, setAgreed] = useState(false);
//   const [fileList, setFileList] = useState([]);
//   const price = location.state?.totalAmount || 100;



//   // Handle file upload
//   const handleFileChange = ({ fileList }) => setFileList(fileList);

//   // Handle form submission
//   const checkoutHandler = async (amount) => {
//     try {
//       const { data: keyData } = await axios.get("/api/v1/getKey");
//       const { key } = keyData;

//       const { data: orderData } = await axios.post("/api/v1/payment/process", {
//         amount: amount
//       });

//       const { order } = orderData;

//       const options = {
//         key,
//         amount: order.amount, // in paise
//         currency: "INR",
//         name: "Bike4Rent",
//         description: "Rental Payment",
//         order_id: order.id,
//         handler: function (response) {
//           // 🟢 Redirect after payment
//           window.location.href = "/payment-success";
//         },
//         prefill: {
//           name: "Mannan Agrawal",
//           email: "mannanagrawal17@gmail.com",
//           contact: "9979934238"
//         },
//         theme: {
//           color: "#F37254"
//         }
//       };

//       const razor = new Razorpay(options);
//       razor.open();
//     } catch (err) {
//       console.error("❌ Error during payment setup:", err.response || err);
//       message.error("Something went wrong. Please try again.");
//     }
//   };



//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: "20px",
//       }}
//     >
//       <Card
//         title={
//           <Title level={2} style={{ textAlign: "center", marginBottom: 0 }}>
//             Terms and Conditions
//           </Title>
//         }
//         bordered={false}
//         style={{
//           maxWidth: 1000, 
//           width: "100%",
//           backgroundColor: "#fff",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           borderRadius: 10,
//           padding: 24,
//         }}
//       >
//         <Typography>
//           <Paragraph
//             style={{ textAlign: "center", fontSize: "16px", fontWeight: "500" }}
//           >
//             Welcome to <strong>Bike4Rent Udaipur</strong>. Please read our terms before proceeding.
//           </Paragraph>

//           <Divider />

//           <Row gutter={[16, 16]}>
//             <Col span={24}>
//               <Title level={4}>1. Rental Agreement</Title>
//               <Paragraph>
//                 - Minimum age: <strong>18 years</strong> with a valid driving license. <br />
//                 - Bike must be returned in the same condition as received. <br />
//                 - Rental period must be followed; extension requires approval.
//               </Paragraph>
//             </Col>

//             <Col span={24}>
//               <Title level={4}>2. Liability</Title>
//               <Paragraph>
//                 - Renter is responsible for <strong>damages, fines, and accidents</strong>. <br />
//                 - Company is <strong>not liable</strong> for personal injuries during the rental period.
//               </Paragraph>
//             </Col>

//             <Col span={24}>
//               <Title level={4}>3. Payment & Refund Policy</Title>
//               <Paragraph>
//                 - Full payment is required before taking the bike. <br />
//                 <strong>Cancellation Policy:</strong> <br />
//                 - <strong>No refund</strong> will be provided once the order is placed.
//               </Paragraph>
//             </Col>

//             <Col span={24}>
//               <Title level={4}>4. Driving License Requirement</Title>
//               <Paragraph>
//                 - You must upload a valid government-issued <strong>driving license</strong> before proceeding.
//               </Paragraph>

//               <Upload
//                 fileList={fileList}
//                 onChange={handleFileChange}
//                 beforeUpload={() => false} 
//                 maxCount={1}
//                 accept=".jpg,.png,.pdf"
//               >
//                 <Button
//                   icon={<UploadOutlined />}
//                   block
//                   style={{
//                     backgroundColor: "#1890ff",
//                     color: "white",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Upload Driving License
//                 </Button>
//               </Upload>
//             </Col>

//             <Col span={24}>
//               <Checkbox
//                 onChange={(e) => setAgreed(e.target.checked)}
//                 style={{ fontSize: "14px", marginTop: "10px" }}
//               >
//                 I agree to the terms and conditions
//               </Checkbox>
//             </Col>

//             <Col span={24}>
//               <Button
//                 type="primary"
//                 block
//                 icon={<CheckCircleOutlined />}
//                 size="large"
//                 className="mt-4"
//                 onClick={()=>checkoutHandler(price)}
//                 disabled={!agreed || fileList.length === 0}
//                 style={{
//                   backgroundColor: agreed && fileList.length > 0 ? "#52c41a" : "#d9d9d9",
//                   color: "white",
//                   fontWeight: "bold",
//                   marginTop: "15px",
//                 }}
//               >
//                 Proceed to Payment({price})
//               </Button>
//             </Col>
//           </Row>
//         </Typography>
//       </Card>
//     </div>
//   );
// };
// export default Terms;
// import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import {
//   Button,
//   Checkbox,
//   Upload,
//   message,
//   Card,
//   Typography,
//   Divider,
//   Row,
//   Col,
//   Input,
// } from "antd";
// import { UploadOutlined, CheckCircleOutlined } from "@ant-design/icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFileAlt,
//   faShieldAlt,
//   faCreditCard,
//   faIdCard,
//   faCheckCircle,
// } from "@fortawesome/free-solid-svg-icons";
// import axios from 'axios';
// import { useDispatch, useSelector } from "react-redux";
// import { addLicense } from "../redux/features/User/authAction";
// const { Title, Paragraph } = Typography;

// const Terms = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   const dispatch = useDispatch(); 
//   console.log('453:',userInfo);
//   const location = useLocation();
//   const [agreed, setAgreed] = useState(false);
//   const [fileList, setFileList] = useState(null);
//   const [licenseNumber, setLicenseNumber] = useState("");
//   const [licenseError, setLicenseError] = useState(false);
//   const price = location.state?.totalAmount || 100;

//   // Handle file upload
//   const handleFileChange = ({ fileList }) => setFileList(fileList);
//   const validateLicense = (license) => {
//     // Example pattern: Indian license format like GJ01 12345678901
//     const pattern = /^[A-Z]{2}[0-9]{2}\s?[0-9]{11}$/;
//     return pattern.test(license);
//   };
  
//   const beforeUpload = (file) => {
//     const isImage = file.type.startsWith("image/");
//     if (!isImage) {
//       message.error("Only image files are allowed!");
//     } else {
//       setFileList(file);
//     }
//     return false;
//   };
//   // Handle form submission
//   const checkoutHandler = async (amount) => {
//     try {
//       const { data: keyData } = await axios.get("/api/v1/getKey");
//       const { key } = keyData;

//       const { data: orderData } = await axios.post("/api/v1/payment/process", {
//         amount: amount
//       });
//       const licenseData = new FormData();
//       licenseData.append("userId", userInfo._id);
//       licenseData.append("licenseNumber", licenseNumber);
//       licenseData.append("licenseFile", fileList);
//     dispatch(addLicense(licenseData));

    

//       const { order } = orderData;

//       const options = {
//         key,
//         amount: order.amount, // in paise
//         currency: "INR",
//         name: "Bike4Rent",
//         description: "Rental Payment",
//         order_id: order.id,
//         handler: function (response) {
//           window.location.href = "/payment-success";
//         },
//         prefill: {
//           name: "Mannan Agrawal",
//           email: "mannanagrawal17@gmail.com",
//           contact: "9979934238"
//         },
//         theme: {
//           color: "#8B4D3A"
//         }
//       };

//       const razor = new Razorpay(options);
//       razor.open();
//     } catch (err) {
//       console.error("❌ Error during payment setup:", err.response || err);
//       message.error("Something went wrong. Please try again.");
//     }
//   };
  

//   return (
//     <div className="bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] min-h-screen py-8 px-4">
//       <div className="max-w-4xl mx-auto">
//         <Card
//           className="rounded-xl shadow-lg border-none overflow-hidden"
//           title={
//             <Title
//               level={2}
//               className="text-center mb-0 font-extrabold tracking-tight text-orange-900"
//             >
//               Terms and Conditions
//             </Title>
//           }
//           headStyle={{
//             backgroundColor: "#fff7f0",
//             borderBottom: "1px solid #e8d5cc",
//             padding: "24px"
//           }}
//           bodyStyle={{
//             backgroundColor: "white",
//             padding: "32px"
//           }}
//         >
//           <Typography>
//             <Paragraph className="text-center text-lg text-[#5a4239]/90 mb-8">
//               Welcome to <strong className="text-[#8B4D3A]">BikeForRent Udaipur</strong>.
//               Please read our terms before proceeding.
//             </Paragraph>

//             <Divider className="border-[#e8d5cc]" />

//             <Row gutter={[16, 24]}>
//               <Col span={24}>
//                 <div className="flex items-start gap-4">
//                   <FontAwesomeIcon
//                     icon={faFileAlt}
//                     className="text-[#A15E48] text-xl mt-1"
//                   />
//                   <div>
//                     <Title level={4} className="text-[#5a4239] mb-2">
//                       Rental Agreement
//                     </Title>
//                     <Paragraph className="text-[#5a4239]/90">
//                       - Minimum age: <strong>18 years</strong> with a valid driving license. <br />
//                       - Bike must be returned in the same condition as received. <br />
//                       - Rental period must be followed; extension requires approval.
//                     </Paragraph>
//                   </div>
//                 </div>
//               </Col>

//               <Col span={24}>
//                 <div className="flex items-start gap-4">
//                   <FontAwesomeIcon
//                     icon={faShieldAlt}
//                     className="text-[#A15E48] text-xl mt-1"
//                   />
//                   <div>
//                     <Title level={4} className="text-[#5a4239] mb-2">
//                       Liability
//                     </Title>
//                     <Paragraph className="text-[#5a4239]/90">
//                       - Renter is responsible for <strong>damages, fines, and accidents</strong>. <br />
//                       - Company is <strong>not liable</strong> for personal injuries during the rental period.
//                     </Paragraph>
//                   </div>
//                 </div>
//               </Col>

//               <Col span={24}>
//                 <div className="flex items-start gap-4">
//                   <FontAwesomeIcon
//                     icon={faCreditCard}
//                     className="text-[#A15E48] text-xl mt-1"
//                   />
//                   <div>
//                     <Title level={4} className="text-[#5a4239] mb-2">
//                       Payment & Refund Policy
//                     </Title>
//                     <Paragraph className="text-[#5a4239]/90">
//                       - Full payment is required before taking the bike. <br />
//                       <strong>Cancellation Policy:</strong> <br />
//                       - <strong>No refund</strong> will be provided once the order is placed.
//                     </Paragraph>
//                   </div>
//                 </div>
//               </Col>

//               <Col span={24}>
//                 <div className="flex items-start gap-4">
//                   <FontAwesomeIcon
//                     icon={faIdCard}
//                     className="text-[#A15E48] text-xl mt-1"
//                   />
//                   <div>
//                     <Title level={4} className="text-[#5a4239] mb-2">
//                       Driving License Requirement
//                     </Title>
//                     <Paragraph className="text-[#5a4239]/90 mb-4">
//                       - You must upload a valid government-issued <strong>driving license</strong> before proceeding.
//                     </Paragraph>

//                      <Upload beforeUpload={beforeUpload} listType="picture" maxCount={1}>
//                       <Button
//                         icon={<UploadOutlined />}
//                         className="bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white font-semibold hover:from-[#733F30] hover:to-[#8B4D3A]"
//                         style={{ maxWidth: "300px" }}
//                       >
//                         Upload Driving License
//                       </Button>
//                     </Upload>
//                     <div className="mt-4">
//                       <Input
//                         placeholder="Enter Driving License Number (e.g., GJ01 12345678901)"
//                         value={licenseNumber}
//                         onChange={(e) => {
//                           const val = e.target.value;
//                           setLicenseNumber(val);
//                           setLicenseError(!validateLicense(val));
//                         }}
//                         status={licenseError && licenseNumber ? "error" : ""}
//                         maxLength={20}
//                         className="max-w-md"
//                       />
//                       {licenseError && licenseNumber && (
//                         <p className="text-red-500 text-sm mt-1">
//                           Invalid license number format.
//                         </p>
//                       )}
//                     </div>

//                   </div>
//                 </div>
//               </Col>

//               <Col span={24}>
//                 <Checkbox
//                   onChange={(e) => setAgreed(e.target.checked)}
//                   className="text-[#5a4239] mt-6"
//                 >
//                   I agree to the terms and conditions
//                 </Checkbox>
//               </Col>

//               <Col span={24}>
//                 <Button
//                   type="primary"
//                   block
//                   icon={<FontAwesomeIcon icon={faCheckCircle} />}
//                   size="large"
//                   onClick={() => checkoutHandler(price)}
//                   // disabled={!agreed || fileList.length === 0 || !licenseNumber || licenseError}
//                   disabled={!agreed || !fileList || fileList.length === 0 || !licenseNumber || licenseError}


//                   className={`mt-6 h-12 text-lg font-semibold ${agreed && fileList.length > 0 ?
//                     'bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] hover:from-[#733F30] hover:to-[#8B4D3A]' :
//                     'bg-gray-300 cursor-not-allowed'}`}
//                 >
//                   Proceed to Payment (₹{price})
//                 </Button>
//               </Col>
//             </Row>
//           </Typography>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default Terms;
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Upload,
  message,
  Card,
  Typography,
  Divider,
  Row,
  Col,
  Input,
} from "antd";
import { UploadOutlined, CheckCircleOutlined } from "@ant-design/icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faShieldAlt,
  faCreditCard,
  faIdCard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addLicense } from "../redux/features/User/authAction";
const { Title, Paragraph } = Typography;

const Terms = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch(); 
  console.log('453:',userInfo);
  const location = useLocation();
  const [agreed, setAgreed] = useState(false);
  const [fileList, setFileList] = useState(null);
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseError, setLicenseError] = useState(false);
  const price = location.state?.totalAmount || 100;

  // Handle file upload
  const handleFileChange = ({ fileList }) => setFileList(fileList);
  const validateLicense = (license) => {
    // Example pattern: Indian license format like GJ01 12345678901
    const pattern = /^[A-Z]{2}[0-9]{2}\s?[0-9]{11}$/;
    return pattern.test(license);
  };
  
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Only image files are allowed!");
    } else {
      setFileList(file);
    }
    return false;
  };
  // Handle form submission
  const checkoutHandler = async (amount) => {
    try {
      const { data: keyData } = await axios.get("/api/v1/getKey");
      const { key } = keyData;

      const { data: orderData } = await axios.post("/api/v1/payment/process", {
        amount: amount
      });
      const licenseData = new FormData();
      licenseData.append("userId", userInfo._id);
      licenseData.append("licenseNumber", licenseNumber);
      licenseData.append("licenseFile", fileList);
    dispatch(addLicense(licenseData));

    

      const { order } = orderData;

      const options = {
        key,
        amount: order.amount, // in paise
        currency: "INR",
        name: "Bike4Rent",
        description: "Rental Payment",
        order_id: order.id,
        handler: function (response) {
          window.location.href = "/payment-success";
        },
        prefill: {
          name: "Mannan Agrawal",
          email: "mannanagrawal17@gmail.com",
          contact: "9979934238"
        },
        theme: {
          color: "#8B4D3A"
        }
      };

      const razor = new Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("❌ Error during payment setup:", err.response || err);
      message.error("Something went wrong. Please try again.");
    }
  };
  

  return (
    <div className="bg-gradient-to-br from-[#fff7f0] via-[#fde9dc] to-[#f8d9c6] min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Card
          className="rounded-xl shadow-lg border-none overflow-hidden"
          title={
            <Title
              level={2}
              className="text-center mb-0 font-extrabold tracking-tight text-orange-900"
            >
              Terms and Conditions
            </Title>
          }
          headStyle={{
            backgroundColor: "#fff7f0",
            borderBottom: "1px solid #e8d5cc",
            padding: "24px"
          }}
          bodyStyle={{
            backgroundColor: "white",
            padding: "32px"
          }}
        >
          <Typography>
            <Paragraph className="text-center text-lg text-[#5a4239]/90 mb-8">
              Welcome to <strong className="text-[#8B4D3A]">BikeForRent Udaipur</strong>.
              Please read our terms before proceeding.
            </Paragraph>

            <Divider className="border-[#e8d5cc]" />

            <Row gutter={[16, 24]}>
              <Col span={24}>
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="text-[#A15E48] text-xl mt-1"
                  />
                  <div>
                    <Title level={4} className="text-[#5a4239] mb-2">
                      Rental Agreement
                    </Title>
                    <Paragraph className="text-[#5a4239]/90">
                      - Minimum age: <strong>18 years</strong> with a valid driving license. <br />
                      - Bike must be returned in the same condition as received. <br />
                      - Rental period must be followed; extension requires approval.
                    </Paragraph>
                  </div>
                </div>
              </Col>

              <Col span={24}>
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={faShieldAlt}
                    className="text-[#A15E48] text-xl mt-1"
                  />
                  <div>
                    <Title level={4} className="text-[#5a4239] mb-2">
                      Liability
                    </Title>
                    <Paragraph className="text-[#5a4239]/90">
                      - Renter is responsible for <strong>damages, fines, and accidents</strong>. <br />
                      - Company is <strong>not liable</strong> for personal injuries during the rental period.
                    </Paragraph>
                  </div>
                </div>
              </Col>

              <Col span={24}>
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={faCreditCard}
                    className="text-[#A15E48] text-xl mt-1"
                  />
                  <div>
                    <Title level={4} className="text-[#5a4239] mb-2">
                      Payment & Refund Policy
                    </Title>
                    <Paragraph className="text-[#5a4239]/90">
                      - Full payment is required before taking the bike. <br />
                      <strong>Cancellation Policy:</strong> <br />
                      - <strong>No refund</strong> will be provided once the order is placed.
                    </Paragraph>
                  </div>
                </div>
              </Col>

              <Col span={24}>
                <div className="flex items-start gap-4">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    className="text-[#A15E48] text-xl mt-1"
                  />
                  <div>
                    <Title level={4} className="text-[#5a4239] mb-2">
                      Driving License Requirement
                    </Title>
                    <Paragraph className="text-[#5a4239]/90 mb-4">
                      - You must upload a valid government-issued <strong>driving license</strong> before proceeding.
                    </Paragraph>

                     <Upload beforeUpload={beforeUpload} listType="picture" maxCount={1}>
                      <Button
                        icon={<UploadOutlined />}
                        className="bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] text-white font-semibold hover:from-[#733F30] hover:to-[#8B4D3A]"
                        style={{ maxWidth: "300px" }}
                      >
                        Upload Driving License
                      </Button>
                    </Upload>
                    <div className="mt-4">
                      <Input
                        placeholder="Enter Driving License Number (e.g., GJ01 12345678901)"
                        value={licenseNumber}
                        onChange={(e) => {
                          const val = e.target.value;
                          setLicenseNumber(val);
                          setLicenseError(!validateLicense(val));
                        }}
                        status={licenseError && licenseNumber ? "error" : ""}
                        maxLength={20}
                        className="max-w-md"
                      />
                      {licenseError && licenseNumber && (
                        <p className="text-red-500 text-sm mt-1">
                          Invalid license number format.
                        </p>
                      )}
                    </div>

                  </div>
                </div>
              </Col>

              <Col span={24}>
                <Checkbox
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="text-[#5a4239] mt-6"
                >
                  I agree to the terms and conditions
                </Checkbox>
              </Col>

              <Col span={24}>
                <Button
                  type="primary"
                  block
                  icon={<FontAwesomeIcon icon={faCheckCircle} />}
                  size="large"
                  onClick={() => checkoutHandler(price)}
                  disabled={!agreed || !fileList || fileList.length === 0 || !licenseNumber || licenseError}
                  className={`mt-6 h-12 text-lg font-semibold ${agreed && fileList && fileList.length > 0 ?
                    'bg-gradient-to-r from-[#8B4D3A] to-[#A15E48] hover:from-[#733F30] hover:to-[#8B4D3A]' :
                    'bg-gray-300 cursor-not-allowed'}`}
                >
                  Proceed to Payment (₹{price})
                </Button>
              </Col>
            </Row>
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default Terms;