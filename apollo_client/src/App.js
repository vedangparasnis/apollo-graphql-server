import React, { useState, useContext, useEffect } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

import { AuthProvider } from "./Components/Context/context";
// components
import Login from "./Components/Page Routes/Login";
import Register from "./Components/Page Routes/Register";
import Home from "./Components/Page Routes/Home";
import Navbar from "./Components/Page Routes/Statics/Navbar";
import Auth from "./Components/Page Routes/Auth/Auth";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar fields={window.location.href} />
        <div>
          <Route exact path="/" component={Home} />
          <Auth exact path="/Login" component={Login} />
          <Auth exact path="/Register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
