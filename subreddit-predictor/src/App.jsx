import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import Dashboard from "./Components/Dashboard";
import Landing from "./Components/Landing";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Signup from "./Components/Signup";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <main className="page">
        <Routes>
          <Route
            path="/dashboard"
            element={<PrivateRoute component={Dashboard} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© Post Match 2020</p>
      </footer>
    </div>
  );
}

export default App;
