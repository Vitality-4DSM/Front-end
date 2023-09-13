import React from 'react';
import logo from './logo.svg';
import Login from './pages/login';
import Estacoes from './pages/Estacoes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/estacoes" element={<Estacoes/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
