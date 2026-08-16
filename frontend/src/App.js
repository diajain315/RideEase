// import React, { useEffect, useState, lazy, Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import { FloatButton } from "antd";
// import Loading from "./components/Loading";
// import "./App.css";
// import AllReviews from "./components/Allreviews.js";


// // Lazy Load Major Components
// const App1 = lazy(() => import("./components/App1"));
// const Dashboard = lazy(() => import("./dashboard/Dashboard"));

// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading ? (
//         <Loading />
//       ) : (
//         <div className="bg-slate-50 min-h-screen">
//           <Suspense fallback={<Loading />}>
//             <Routes>
//               <Route path="/*" element={<App1 />} />
//               <Route path="/admin/*" element={<Dashboard />} />
            

//             </Routes>
//           </Suspense>
//           <FloatButton.BackTop type="primary" visibilityHeight={50} />
//         </div>
//       )}
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { FloatButton } from "antd";
import Loading from "./components/Loading";
import "./App.css";

// Lazy Load Major Components
const App1 = lazy(() => import("./components/App1"));
const Dashboard = lazy(() => import("./dashboard/Dashboard"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-slate-50 min-h-screen">
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/*" element={<App1 />} />
              <Route path="/admin/*" element={<Dashboard />} />
            </Routes>
          </Suspense>
          <FloatButton.BackTop type="primary" visibilityHeight={50} />
        </div>
      )}
    </>
  );
}

export default App;  // ← MAKE SURE THIS LINE EXISTS!