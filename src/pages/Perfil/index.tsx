import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import user from '../../assets/user.png'
import './styles.css'
import { getUser } from '../../utils/axios.routes'
import { teste } from '../../utils/axios.routes'

const Perfil: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(true); /* seta o estado da sidebar */
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
    };

    useEffect(() => {
        const FUNBAIA = async () => {
            try {
                const response = await getUser();
                console.log(response);
            } catch (error) {
            }
        }
        FUNBAIA();
    }, []);
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
                        <span>Ryan Alves  </span>
                        <span>RyanzinhaTipsterPro@gmail.com </span>
                    </div>
                </div>
            </div>
        </div >
    )

}
export default Perfil