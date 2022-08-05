import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Home } from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
