import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { GetOrder } from "../redux/features/Order/orderAction";

// Function to format date to dd/mm/yyyy
const formatDate = (date) => {
  const d = new Date(date);
  const day = ("0" + d.getDate()).slice(-2); // Adds leading zero if day is a single digit
  const month = ("0" + (d.getMonth() + 1)).slice(-2); // Adds leading zero if month is a single digit
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

const OrderDropdown = ({ color }) => {
  const dispatch = useDispatch();
  const { userOrders } = useSelector((state) => state.order);
  console.log('18:',userOrders)
  useEffect(() => {
    dispatch(GetOrder());
  }, [dispatch]);
  
  return (
    <Layout title={"RideEase: Your Orders"}>
      <div className="flex items-center justify-center">
        <h1 className="font-serif text-2xl font-bold">Your Orders</h1>
      </div>
      <div className="flex items-center justify-center w-full mt-3">
        <div style={{ maxHeight: "300px", overflowY: "auto" }}>
          <table className="items-center w-full bg-white border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 border flex items-center justify-center border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
      
                >
                  SN
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  Bikename
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  Bike_number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  Renter name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  Total Amount
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  Start Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  End Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                  
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {userOrders && userOrders.length !== 0 ? (
                userOrders.map((order, i) => {
                  return (
                    <tr key={order._id}>
                      <td className="items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {order.bikes.name ? order.bikes.name : "N/A"}
                        </div>
                      </td>
                      <td className="items-center p-4 px-6 text-left align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          {order.bikes.number ? order.bikes.number : "N/A"}
                        </div>
                      </td>
                      <td className="items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        {order.renter.name}
                      </td>
                      <td className="items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        {order.totalAmt}
                      </td>
                      <td className="items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        {order.startDate ? formatDate(order.startDate) : "N/A"}
                      </td>
                      <td className="items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        {order.endDate ? formatDate(order.endDate) : "N/A"}
                      </td>
                      <td className="items-center p-4 px-6 text-center align-middle border-t-0 border-l-0 border-r-0 text-md whitespace-nowrap">
                        {order.status}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="text-center border">
                  <td colSpan={5} className="p-3 font-bold text-red-500">
                    No Data Found!!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
    
  );
};
export default OrderDropdown;



// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { GetOrder } from "../redux/features/Order/orderAction";
// import { Table, Card, Typography, Tag, Empty } from "antd";
// import Layout from "./Layout";

// const { Title } = Typography;

// // Format date to dd/mm/yyyy
// const formatDate = (date) => {
//   const d = new Date(date);
//   const day = ("0" + d.getDate()).slice(-2);
//   const month = ("0" + (d.getMonth() + 1)).slice(-2);
//   const year = d.getFullYear();
//   return `${day}/${month}/${year}`;
// };

// const OrderDropdown = () => {
//   const dispatch = useDispatch();
//   const { userOrders } = useSelector((state) => state.order);

//   useEffect(() => {
//     dispatch(GetOrder());
//   }, [dispatch]);

//   const columns = [
//     {
//       title: "SN",
//       dataIndex: "sn",
//       key: "sn",
//       render: (text, record, index) => index + 1,
//       fixed: "left",
//       width: 60,
//     },
//     {
//       title: "Bike Name",
//       dataIndex: ["bikes", "name"],
//       key: "bikeName",
//       render: (name) => name || "N/A",
//     },
//     {
//       title: "Bike Number",
//       dataIndex: ["bikes", "number"],
//       key: "bikeNumber",
//       render: (num) => num || "N/A",
//     },
//     {
//       title: "Renter Name",
//       dataIndex: ["renter", "name"],
//       key: "renterName",
//     },
//     {
//       title: "Total Amount",
//       dataIndex: "totalAmt",
//       key: "totalAmt",
//       render: (amt) => `₹${amt}`,
//     },
//     {
//       title: "Start Date",
//       dataIndex: "startDate",
//       key: "startDate",
//       render: (date) => (date ? formatDate(date) : "N/A"),
//     },
//     {
//       title: "End Date",
//       dataIndex: "endDate",
//       key: "endDate",
//       render: (date) => (date ? formatDate(date) : "N/A"),
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (
//         <Tag color={status === "completed" ? "green" : status === "pending" ? "orange" : "blue"}>
//           {status?.toUpperCase()}
//         </Tag>
//       ),
//     },
//   ];

//   return (
//     <Layout title="Bike-4-Rent : Your Orders">
//       <div className="flex justify-center mt-6 px-4">
//         <Card style={{ width: "100%", maxWidth: "1200px" }}>
//           <Title level={3} style={{ textAlign: "center", fontFamily: "serif" }}>
//             Your Orders
//           </Title>

//           {userOrders && userOrders.length > 0 ? (
//             <Table
//               dataSource={userOrders}
//               columns={columns}
//               rowKey="_id"
//               pagination={false}
//               scroll={{ y: 400, x: "max-content" }} // Enables vertical + horizontal scroll
//               bordered
//               sticky
//             />
//           ) : (
//             <Empty
//               description={<span className="text-red-500 font-semibold">No Orders Found</span>}
//               style={{ marginTop: 50 }}
//             />
//           )}
//         </Card>
//       </div>
//     </Layout>
//   );
// };

// export default OrderDropdown;
