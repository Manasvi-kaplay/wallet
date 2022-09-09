import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';
import CreateWallet from './components/dashboard/dashboardOperations/CreateWallet';

function App() {
  return (
    
      <Router>
         
       <Routes>
       <Route path="/" element={<Nav />} exact />
          <Route path="/" element={<Welcome />} exact />
         <Route path="/dashboard"  element={<dashboard />} exact />
         <Route path="/CreateWallet"  element={<CreateWallet />} exact /> 
       </Routes>
      
     </Router>
     
    
  );
}

export default App;
