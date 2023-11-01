import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import user from '../../assets/user.png';
import './styles.css';
import { GetUsers } from '../../utils/axios.routes';

const Gerenciamento: React.FC = () => {
  const [users, setUsers] =  useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [ligado, setLigado] = useState(true); // Adicione o estado ligado

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleSwitch = () => {
    setLigado(!ligado); // Função para alternar o estado ligado
  };

  useEffect(() => {
    const fetchEstacoes = async () => {
      try {
        const response = await GetUsers();
        setUsers(response);
      } catch (error) { }
    };
    fetchEstacoes();
  }, []);

  return (
    <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
      <Sidebar isOpen={showSidebar} />
      <div className='perfil-container-gerenciamento'>
        <div className="perfil-title">
          <button className="toggle-button" onClick={toggleSidebar}>
            {showSidebar ? <ClearIcon /> : <DehazeIcon />}
          </button>
          <span>Gerenciamento de usuários</span>
        </div>

        <div className='box-container-gerenciamento'>
          <div className="whiteline">
            {users && users.map((item) => (
              <div className='Perfil-gerenciamento'>
              <div className='perfil-left'>
                <img src={user} alt="user-gerenciamento" />
                <div className='perfil-left-text'>
                  <span>{item.nome} </span>
                  <span>{item.email}</span>
                </div>

              </div>
              <div className='perfil-right'>
                <label className={`switch ${ligado ? 'ligado' : 'desligado'}`} onClick={toggleSwitch}>
                  <div className='slider'></div>
                </label>
              </div>

            </div>
            ))}
      

          </div>
        </div>
      </div>

    </div >
  );
}

export default Gerenciamento;
