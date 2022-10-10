import React from 'react';
import { Outlet } from "react-router-dom";
import Banner from '../../components/topBanner/Banner.js';
import BottomNavBar from '../../components/bottomNav/BottomNavBar.js';

const LayoutMiddle = () => {
  return (
    <div>
        <Banner/>
        <Outlet/>
        <BottomNavBar/>
    </div>
  )
}

export default LayoutMiddle
