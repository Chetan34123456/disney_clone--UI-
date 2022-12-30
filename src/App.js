import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Route,Routes} from 'react-router';
import './App.css';
import React from 'react';
import { Login, Header, Home, Detail } from './components/index';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='login' element={<Login />}></Route>
          <Route path='/Detail' element={<Detail />}></Route>
          <Route path='/Home' element={ <Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
