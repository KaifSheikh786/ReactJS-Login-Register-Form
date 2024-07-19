import Homepage from './components/homepage/homepage.js';
import Login from './components/login/login.js'
import Register from './components/register/register.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
// import './App.css';

function App() {
  return (<>
    <Login/>
    {/* <Register/> */}
    {/* <Homepage/> */}
    </>
  );
}

export default App;
