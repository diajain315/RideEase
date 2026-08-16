// // src/pages/PaymentSuccess.js
// import React from "react";
// import { Result } from "antd";
// import AddReviewForm from "../components/ReviewForm.js";

// const PaymentSuccess = () => {
//   return (
//     <div style={{ padding: "40px", textAlign: "center" }}>
//       <Result
//         status="success"
//         title="Payment Successful!"
//         subTitle="Thank you for renting with Bike4Rent Udaipur."
//       />
//       <div style={{ marginTop: "30px" }}>
//         <AddReviewForm />
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;
// src/pages/PaymentSuccess.js
import React from "react";
import { Result } from "antd";
import AddReviewForm from "../components/ReviewForm.js";

const PaymentSuccess = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <Result
        status="success"
        title="Payment Successful!"
        subTitle="Thank you for renting with RideEase Udaipur."
      />
      <div style={{ marginTop: "30px" }}>
        <AddReviewForm />
      </div>
    </div>
  );
};

export default PaymentSuccess;
