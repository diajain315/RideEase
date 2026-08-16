// import React from 'react';
// import { Dropdown, Menu, Avatar } from 'antd';
// import { UserOutlined, LogoutOutlined, DownOutlined } from '@ant-design/icons';
// import { useNavigate } from 'react-router-dom';

// const Dashboardnavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
    
//     localStorage.clear();
//     window.location.href = '/login';
//   };
  

//   const menu = (
//     <Menu className="min-w-[120px] rounded-md shadow-lg border border-amber-100">
//       <Menu.Item 
//         key="logout" 
//         icon={<LogoutOutlined className="text-amber-700" />} 
//         onClick={handleLogout}
//         className="hover:!bg-amber-50"
//       >
//         <span className="text-amber-700">Logout</span>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div className="flex justify-end items-center p-3 sm:p-4 bg-amber-800 shadow-sm">
//       <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
//         <div className="flex items-center cursor-pointer hover:bg-amber-700 px-2 sm:px-3 py-1 rounded-lg transition-colors">
//           <Avatar
//             size="default"
//             icon={<UserOutlined />}
//             className="bg-amber-600 mr-2"
//           />
//           <span className="text-white font-medium mr-1 hidden sm:inline">Admin</span>
//           <DownOutlined className="text-amber-200 text-xs" />
//         </div>
//       </Dropdown>
//     </div>
//   );
// };

// export default Dashboardnavbar;
import React from 'react';
import { Dropdown, Menu, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined, DownOutlined, HomeOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Dashboardnavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  const handleHome = () => {
    navigate('/');
  };

  const menu = (
    <Menu className="min-w-[120px] rounded-md shadow-lg border border-amber-100">
      <Menu.Item 
        key="home" 
        icon={<HomeOutlined className="text-amber-700" />} 
        onClick={handleHome}
        className="hover:!bg-amber-50"
      >
        <span className="text-amber-700">Home</span>
      </Menu.Item>
      <Menu.Item 
        key="logout" 
        icon={<LogoutOutlined className="text-amber-700" />} 
        onClick={handleLogout}
        className="hover:!bg-amber-50"
      >
        <span className="text-amber-700">Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="flex justify-end items-center p-3 sm:p-4 bg-amber-800 shadow-sm">
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <div className="flex items-center cursor-pointer hover:bg-amber-700 px-2 sm:px-3 py-1 rounded-lg transition-colors">
          <Avatar
            size="default"
            icon={<UserOutlined />}
            className="bg-amber-600 mr-2"
          />
          <span className="text-white font-medium mr-1 hidden sm:inline">Admin</span>
          <DownOutlined className="text-amber-200 text-xs" />
        </div>
      </Dropdown>
    </div>
  );
};

export default Dashboardnavbar;