import React from 'react';
import {BrowserRouter, Routes, Route} 
from 'react-router-dom';

import {Home} from './componenets/Home';
import {AddUser} from './componenets/AddUser';
import {EditUser} from './componenets/EditUser';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth: "30rem", margin: "4rem auto"}}>
    <BrowserRouter>    
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/add" element={<AddUser/>}/>
         <Route path="/edit/:id" element={<EditUser/>}/>
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
