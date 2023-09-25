import React from 'react';
import logo from './logo.svg';
import Login from './pages/login';
import Estacoes from './pages/Estacoes';
import Info from './pages/informacoes';
import Perfil from './pages/Perfil';
import Alertas from './pages/Alertas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Provider } from './contexts/LoginContexts';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/estacoes" element={<Estacoes />} />
          <Route path="/informacoes" element={<Info />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/alertas" element={<Alertas />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}



export default App;
