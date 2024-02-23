import React from 'react';
import { useState } from 'react';
import Header from '../components/Header/header';
import Home from '../components/Home/home';
import Sidebar from '../components/Sidebar/sidebar';

const Dashboard = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar =() =>{
    setOpenSidebarToggle (!openSidebarToggle)
   }

  return (
    <div className="grid-container">
       <Header OpenSidebar={OpenSidebar}/>
       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       <Home/>
    </div>
  )
}

export default Dashboard;