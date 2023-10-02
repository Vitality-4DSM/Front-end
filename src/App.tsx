import Login from './pages/login';
import Estacoes from './pages/Estacoes';
import Info from './pages/informacoes';
import Perfil from './pages/Perfil';
import Alertas from './pages/Alertas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Provider } from './contexts/LoginContexts';
import useLogin from './hooks';

function App() {
  return (
    <Provider>
      <Rotas />
    </Provider>
  );
}
function Rotas() {
  const { token } = useLogin();
  return (
    <BrowserRouter>
      {token ? <RotaLogado /> : <RotaPublico />}
    </BrowserRouter>
  )
}

function RotaLogado() {
  return (
    <Routes>
      <Route path='*'element={<Estacoes />} />
      <Route path="/estacoes" element={<Estacoes />} />
      <Route path="/informacoes" element={<Info />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/alertas" element={<Alertas />} />
    </Routes>
  )
}

function RotaPublico() {
  return (
    <Routes>
      <Route path='*'element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="/estacoes" element={<Estacoes />} />
      <Route path="/informacoes" element={<Info />} />
      <Route path="/alertas" element={<Alertas />} />
    </Routes>
  )
}


export default App;