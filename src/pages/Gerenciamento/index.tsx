import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import user from '../../assets/user.png';
import './styles.css';

const Gerenciamento: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [ligado, setLigado] = useState(true); // Adicione o estado ligado

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleSwitch = () => {
    setLigado(!ligado); // Função para alternar o estado ligado
  };

  return (
    <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
      <Sidebar isOpen={showSidebar} />
      <div className='perfil-container'>
        <div className="perfil-title">
          <button className="toggle-button" onClick={toggleSidebar}>
            {showSidebar ? <ClearIcon /> : <DehazeIcon />}
          </button>
          <span>Gerenciamento de usuários</span>
        </div>
        <div className="whiteline">
            <div className='box-container'>
            <div className='Perfil'>
                <img src={user} alt="user" />
                <span>Ryan Alves  </span>
                <span>RyanzinhaTipsterPro@gmail.com </span>
                <label className={`switch ${ligado ? 'ligado' : 'desligado'}`} onClick={toggleSwitch}>
                <div className='slider'></div>
            </label>
                </div>

            

            </div>
        </div>
      </div>
    </div >
  );
}

export default Gerenciamento;
