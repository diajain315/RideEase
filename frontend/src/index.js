// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
// import { store } from "../src/redux/store";
// import { Provider } from "react-redux";
// import { ConfigProvider } from "antd";
// import en_US from "antd/locale/en_US"; // ✅ correct one!

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <ConfigProvider locale={en_US}>
//       <BrowserRouter>
//         <App />
//         <Toaster
//           position="top-right"
//           toastOptions={{
//             duration: 4000,
//             style: {
//               borderRadius: "8px",
//             },
//           }}
//         />
//       </BrowserRouter>
//     </ConfigProvider>
//   </Provider>
// );

// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import en_US from "antd/locale/en_US";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider locale={en_US}>
      <BrowserRouter>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "8px",
            },
          }}
        />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);

reportWebVitals();