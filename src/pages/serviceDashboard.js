import React from 'react'
import Form  from '../components/Form/form';
import Header  from '../components/Header/header';
import Sidebar  from '../components/Sidebar/sidebar';

const ServiceDashboard = () => {
  return (
    <div className='grid-container'>
      <Header/>
      <Sidebar/>
      <Form/>
    </div>
  )
}

export default ServiceDashboard;