import {Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';
import BookingDashboard from './pages/bookingDashboard';
import Customer from './pages/customer';
import ServiceDashboard from './pages/serviceDashboard';
import Setting from './pages/setting';
import './App.css';

function App() {
  
  
  return (
    <div>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/bookingDashboard' element={<BookingDashboard/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/serviceDashboard' element={<ServiceDashboard/>}/>
          <Route path='/setting' element={<Setting/>}/>
        </Routes>
    </div>
  );
}

export default App;
