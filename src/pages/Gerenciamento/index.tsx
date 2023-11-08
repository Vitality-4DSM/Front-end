import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import user from '../../assets/user.png';
import { GetUsers } from "../../utils/axios.routes"
import './styles.css';
import Modal from '../../components/modal';

const Gerenciamento: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const [ligado, setLigado] = useState(true); // Adicione o estado ligado
  const [modalOpen, setOpenModal] = useState(false);
  const [modalstyle, setModalStyle] = useState("");
  const [selectStationId, setSelectStationId] = useState("");

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

  return (<>

    {modalOpen ? (
      <Modal
        setOpenModal={setOpenModal}
        modalstyle={modalstyle}
        selectStationId={selectStationId}
      />
    ) : null}
    <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
      <Sidebar isOpen={showSidebar} />
      <div className='perfil-container-gerenciamento'>
        <div className="perfil-title">
          <button className="toggle-button" onClick={toggleSidebar}>
            {showSidebar ? <ClearIcon /> : <DehazeIcon />}
          </button>
          <span id='titulo-gerenciamento'>Gerenciamento de usuários</span>
          <div className="cadastro-botão-gerenciamento">
            <button
              type="submit"
              className="btn-cadastro-gerenciamento"
              onClick={() => {
                setOpenModal(true);
                setModalStyle("cadastrar-usuario");
              }}
            >
              Cadastrar
            </button>
          </div>
        </div>

        <div className='box-container-gerenciamento'>
          <div className="whiteline">
            {users && users.map((item) => (
              <div className='Perfil-gerenciamento'>
                <div className='perfil-left'>
                  <img src={user} alt="user-gerenciamento"
                    onClick={() => {
                      setOpenModal(true);
                      setModalStyle("editar-usuario");
                      setSelectStationId(item.id_usuario);
                    }} />
                  <div className='perfil-left-text'>
                    <span>{item.nome} </span>
                    <span>{item.email}</span>
                  </div>
                </div>
                <div className='perfil-right'>
                  {item.id_usuario != 1 && (<label className={`switch ${ligado ? 'ligado' : 'desligado'}`} onClick={toggleSwitch}>
                    <div className='slider'></div>
                  </label>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div >
  </>
  );

}

export default Gerenciamento;
