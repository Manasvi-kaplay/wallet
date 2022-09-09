import React from 'react';
import './App.css';
import Nav from './components/shared/Nav';
import Welcome from './components/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import dashboard from './components/dashboard/dashboard';
import CreateWallet from './components/dashboard/dashboardOperations/CreateWallet';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Route path="/" component={Nav} /> 
       <Routes>
          <Route path="/" exact component={Welcome} />
         <Route path="/dashboard" exact component={dashboard} />
         <Route path="/CreateWallet" exact component={CreateWallet} /> 
       </Routes>
      <h1>Hello</h1>
     </BrowserRouter>
    //<h1>Hello There</h1>
    </div>
  );
}

export default App;
