// import React, { useState, useEffect, useMemo } from "react";
// import { Select } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { AllOrder, updateStatus } from "../../../redux/features/Order/orderAction";
// import Spinner from "../../../Helper/Spinner";
// import toast from "react-hot-toast";
// import moment from "moment"; // Import moment.js for date formatting

// const { Option } = Select;

// const Ordertable = ({ color }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(AllOrder());
//   }, [dispatch]);

//   const { loading, error, orders } = useSelector((state) => state.order);

//   const statusOptions = useMemo(() => ["Not Processed", "Processing", "Shipped", "Delivered", "Cancelled"], []);

//   // Local state to track status changes immediately
//   const [localOrders, setLocalOrders] = useState([]);

//   useEffect(() => {
//     if (orders?.length) {
//       setLocalOrders(orders);
//     }
//   }, [orders]);

//   const handleChange = (orderId, value) => {
//     setLocalOrders((prev) =>
//       prev.map((order) => (order._id === orderId ? { ...order, status: value } : order))
//     );
//     dispatch(updateStatus({ orderId, status: value }));
//   };

//   if (loading) return <Spinner />;
//   if (error) {
//     toast.error(error);
//     return null;
//   }

//   return (
//     <div style={{ maxHeight: "300px", overflowY: "auto" }}>
//       <table className="items-center w-full bg-white border-collapse">
//         <thead>
//           <tr>
//             {["SN", "Bike Name", "Bike Number", "Rented User", "Total Amount", "Start Date", "End Date", "Status"].map(
//               (header, index) => (
//                 <th
//                   key={index}
//                   className={`px-5 py-3 border text-xs uppercase font-semibold text-center ${
//                     color === "light"
//                       ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
//                       : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700"
//                   }`}
//                 >
//                   {header}
//                 </th>
//               )
//             )}
//           </tr>
//         </thead>
//         <tbody>
//           {localOrders?.length ? (
//             localOrders.map((order, i) => (
//               <tr key={order._id}>
//                 <td className="px-2 text-center border">{i + 1}</td>
//                 <td className="px-5 py-3 border">{order?.bikes?.name || "N/A"}</td>
//                 <td className="px-5 py-3 border">{order?.bikes?.number || "N/A"}</td>
//                 <td className="px-5 py-3 border">{order?.renter?.name || "N/A"}</td>
//                 <td className="p-2 border">{order?.totalAmt || "N/A"}</td>
//                 <td className="p-3 border">
//                   {order?.startDate ? moment(order.startDate).format("DD/MM/YYYY") : "N/A"}
//                 </td>
//                 <td className="p-3 border">
//                   {order?.endDate ? moment(order.endDate).format("DD/MM/YYYY") : "N/A"}
//                 </td>
//                 <td className="p-4 text-center border">
//                   <Select
//                     bordered={false}
//                     value={order.status} // Use local state value
//                     onChange={(value) => handleChange(order._id, value)}
//                   >
//                     {statusOptions.map((s, index) => (
//                       <Option key={index} value={s}>
//                         {s}
//                       </Option>
//                     ))}
//                   </Select>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr className="text-center border">
//               <td colSpan={8} className="p-3 font-bold text-red-500">
//                 No Data Found!!
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Ordertable;
import React, { useState, useEffect, useMemo } from "react";
import { Table, Select, Card, Tag, Spin, Empty } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AllOrder, updateStatus } from "../../../redux/features/Order/orderAction";
import toast from "react-hot-toast";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

const { Option } = Select;

const statusColors = {
  "Not Processed": "default",
  Processing: "blue",
  //Shipped: "orange",
  //Delivered: "green",
  Cancelled: "red",
};

const Ordertable = () => {
  const dispatch = useDispatch();
  const { loading, error, orders } = useSelector((state) => state.order);
  const navigate = useNavigate();

  const [localOrders, setLocalOrders] = useState([]);

  useEffect(() => {
    dispatch(AllOrder());
  }, [dispatch]);


  

  // Local state to track status changes immediately
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwR8HIuUE1VOgPSCLyPsUG6Xvvqt1naNQCgmRlO127cl9QYNWJvN1Spn9qN7XFAmKdQ/exec';

   const sendOrdersToGoogleSheet = async (orders) => {
   for (let i = 0; i < orders.length; i++) {
    const order = orders[i];

    const formData = new FormData();
    formData.append("SN", i + 1);
    formData.append("Bikename", order.bikes?.name || "N/A");
    formData.append("Bike_number", order.bikes?.number || "N/A");
    formData.append("Renter_name", order.renter?.name || "N/A");
    formData.append("Total_Amount", order.totalAmt);
    formData.append("Start_Date", order.startDate);
    formData.append("End_Date", order.endDate);
    formData.append("Status", order.status);
    formData.append("object_id",order.orderId);

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error sending order to Google Sheet:", error);
    }
  }

  console.log("All orders sent to Google Sheet");
};

  useEffect(() => {
    dispatch(AllOrder()).then((res) => {
      console.log('172:',res);
      // const allOrders = res.payload || [];
      const allOrders = Array.isArray(res?.payload)
  ? res.payload
  : Array.isArray(res?.payload?.orders)
  ? res.payload.orders
  : [];
      const sentOrderIds = JSON.parse(localStorage.getItem("sent_order_ids")) || [];
  
      // Filter orders that haven't been sent yet
      const newOrders = allOrders.filter((order) => !sentOrderIds.includes(order._id));
  
      if (newOrders.length > 0) {
        sendOrdersToGoogleSheet(newOrders);
  
        // Update the localStorage with new sent IDs
        const updatedSentIds = [...sentOrderIds, ...newOrders.map((order) => order._id)];
        localStorage.setItem("sent_order_ids", JSON.stringify(updatedSentIds));
      }
  
      // Update local state regardless
      // setLocalOrders(allOrders);
      setLocalOrders(Array.isArray(allOrders) ? allOrders : []);
    });
  }, [dispatch]);

  const statusOptions = useMemo(
    () => ["Not Processed", "Processing", "Cancelled"],
    []
  );

  const handleChange = (orderId, value) => {
    setLocalOrders((prev) =>
      prev.map((order) =>
        order._id === orderId ? { ...order, status: value } : order
      )
    );
    dispatch(updateStatus({ orderId, status: value }));
  };

  const columns = [
    {
      title: "SN",
      dataIndex: "sn",
      render: (_, __, index) => index + 1,
      align: "center",
    },
    {
      title: "Bike Name",
      dataIndex: ["bikes", "name"],
      render: (name) => name || "N/A",
    },
    {
      title: "Bike Number",
      dataIndex: ["bikes", "number"],
      render: (number) => number || "N/A",
    },
    {
      title: "Rented User",
      dataIndex: ["renter", "name"],
      render: (name) => name || "N/A",
    },
    {
      title: "Total Amount",
      dataIndex: "totalAmt",
      render: (amt) => (amt ? `₹${amt}` : "N/A"),
      align: "center",
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      render: (date) => (date ? moment(date).format("DD/MM/YYYY") : "N/A"),
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      render: (date) => (date ? moment(date).format("DD/MM/YYYY") : "N/A"),
    },
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      render: (status, record) => (
        <Select
          value={status}
          style={{ width: 150 }}
          onChange={(value) => handleChange(record._id, value)}
        >
          {statusOptions.map((option) => (
            <Option key={option} value={option}>
              <Tag color={statusColors[option]}>{option}</Tag>
            </Option>
          ))}
        </Select>
      ),
    },
  ];

  if (error) {
    toast.error(error);
    return <Empty description="Failed to load data" />;
  }

  // const downloadCSV = () => {
  //   if (!localOrders?.length) return;
  
  //   const headers = [
  //     "SN",
  //     "Bike Name",
  //     "Bike Number",
  //     "Rented User",
  //     "Total Amount",
  //     "Start Date",
  //     "End Date",
  //     "Status"
  //   ];
  
  //   const rows = localOrders.map((order, index) => {
  //     const startDate = order?.startDate ? moment(order.startDate).format("DD-MM-YYYY") : "";
  //     const endDate = order?.endDate ? moment(order.endDate).format("DD-MM-YYYY") : "";
  
  //     return [
  //       index + 1,
  //       order?.bikes?.name || "",
  //       order?.bikes?.number || "",
  //       order?.renter?.name || "",
  //       order?.totalAmt || "",
  //       startDate,
  //       endDate,
  //       order?.status || ""
  //     ];
  //   });
  
  //   const csvContent =
  //     "data:text/csv;charset=utf-8," +
  //     [headers, ...rows]
  //       .map((row) =>
  //         row
  //           .map((cell) => {
  //             let text = String(cell).replace(/"/g, '""');
  //             if (text.includes(",") || text.includes('"')) {
  //               text = `"${text}"`;
  //             }
  //             return text;
  //           })
  //           .join(",")
  //       )
  //       .join("\n");
  
  //   const encodedUri = encodeURI(csvContent);
  //   const link = document.createElement("a");
  //   link.setAttribute("href", encodedUri);
  //   link.setAttribute("download", "orders.csv");
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

//   const downloadCSV = () => {
//   if (!localOrders?.length) return;

//   const headers = [
//     "SN",
//     "Bike Name",
//     "Bike Number",
//     "Rented User",
//     "Total Amount",
//     "Start Date",
//     "End Date",
//     "Status"
//   ];

//   const rows = localOrders.map((order, index) => {
//     // Get date parts
//     const start = moment(order?.startDate);
//     const end = moment(order?.endDate);

//     // Format using =DATE() so Excel reads it as date
//     const startDate = start.isValid()
//       ? `=DATE(${start.format("YYYY")},${start.format("MM")},${start.format("DD")})`
//       : "";
//     const endDate = end.isValid()
//       ? `=DATE(${end.format("YYYY")},${end.format("MM")},${end.format("DD")})`
//       : "";

//     return [
//       index + 1,
//       order?.bikes?.name || "",
//       order?.bikes?.number || "",
//       order?.renter?.name || "",
//       order?.totalAmt || "",
//       startDate,
//       endDate,
//       order?.status || ""
//     ];
//   });

//   const csvContent =
//     "data:text/csv;charset=utf-8," +
//     [headers, ...rows]
//       .map((row) =>
//         row
//           .map((cell) => {
//             let text = String(cell).replace(/"/g, '""');
//             if (text.includes(",") || text.includes('"') || text.startsWith("=")) {
//               text = `"${text}"`;
//             }
//             return text;
//           })
//           .join(",")
//       )
//       .join("\n");

//   const encodedUri = encodeURI(csvContent);
//   const link = document.createElement("a");
//   link.setAttribute("href", encodedUri);
//   link.setAttribute("download", "orders.csv");
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };
const downloadCSV = () => {
  if (!localOrders?.length) return;

  const headers = [
    "SN",
    "Bike Name",
    "Bike Number",
    "Rented User",
    "Total Amount",
    "Start Date",
    "End Date",
    "Status"
  ];

  const rows = localOrders.map((order, index) => {
    const startDate = order?.startDate ? moment(order.startDate).format("YYYY-MM-DD") : "";
    const endDate = order?.endDate ? moment(order.endDate).format("YYYY-MM-DD") : "";

    return [
      index + 1,
      order?.bikes?.name || "",
      order?.bikes?.number || "",
      order?.renter?.name || "",
      order?.totalAmt || "",
      startDate,
      endDate,
      order?.status || ""
    ];
  });

  const csvContent =
    "data:text/csv;charset=utf-8," +
    [headers, ...rows]
      .map((row) =>
        row
          .map((cell) => {
            let text = String(cell).replace(/"/g, '""');
            if (text.includes(",") || text.includes('"')) {
              text = `"${text}"`;
            }
            return text;
          })
          .join(",")
      )
      .join("\n");

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "orders.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Card
        title="Order Management"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
        bodyStyle={{ flex: 1, display: "flex", flexDirection: "column", padding: 0 }}
      >
        <button
        onClick={() => navigate('/admin')}
        style={{
          position: 'absolute',
          top: '10px',
          left: '1200px',
          backgroundColor: '#A15E48',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '4px',
          border: '1px solid #A15E48',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          zIndex: 10,
          marginBottom: '20px'
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        Back To Dashboard
      </button>
        {loading ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <Spin size="large" />
          </div>
        ) : (
          <Table
            //dataSource={localOrders}
            dataSource={Array.isArray(localOrders) ? localOrders : []}rs
            columns={columns}
            rowKey="_id"
            pagination={false}
            style={{ flex: 1 }}
            scroll={{ y: "calc(100vh - 240px)", x: "max-content" }}
            locale={{
              emptyText: <Empty description="No Orders Found" />,
            }}
          />
        )}
      </Card>
    </div>
  );
};

export default Ordertable;
