import React from 'react';
import Header  from '../components/Header/header';
import Sidebar  from '../components/Sidebar/sidebar';

const BookingDashboard = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
    </div>
  )
}

export default BookingDashboard;