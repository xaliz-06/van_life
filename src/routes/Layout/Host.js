import React from 'react';
import { Outlet } from 'react-router-dom';
import HostHeader from '../../components/Host_Header/HostHeader';

const Host = () => {
  return (
    <div className="host_layout_container">
      <HostHeader />
      <div className="host_content">
        <Outlet />
      </div>
    </div>
  );
};

export default Host;
