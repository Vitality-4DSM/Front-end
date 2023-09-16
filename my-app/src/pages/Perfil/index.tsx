import React, { useState } from 'react'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import user from '../../assets/user.png'
import './styles.css'


const Perfil: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(true); /* seta o estado da sidebar */
    const [disableFalse, setDisableFalse] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
    };
    const setDisab = () => {
        setDisableFalse(!disableFalse);
    }


    return (
        <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
            <Sidebar isOpen={showSidebar} />
            <div className='info-container'>
                <div className="info-title">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {showSidebar ? <ClearIcon /> : <DehazeIcon />}
                    </button>
                    <span>Meu Perfil</span>
                </div>
                <div className='box-container'>
                    <div className='Perfil'>
                        <img src={user} alt="user" />
                        <input placeholder='nome ' disabled={disableFalse} />
                        <input placeholder='email' disabled={disableFalse} />

                        <button className='btn-edit' onClick={setDisab}>Editar</button>

                        {/* <span>Ryan Alves  </span>
                        <span>RyanzinhaTipsterPro@gmail.com </span> */}
                    </div>
                </div>
            </div>
        </div >
    )

}
export default Perfil