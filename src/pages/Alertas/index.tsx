import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './style.css'
import { getAlertas } from '../../utils/axios.routes';

const Alertas: React.FC = () => {
    const [alertas, setAlertas] = useState<any[]>([]);
    const [showSidebar, setShowSidebar] = useState(true); /* seta o estado da sidebar */

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
    };

    useEffect(() => {
        const fetchEstacoes = async () => {
            try {
                const response = await getAlertas();
                setAlertas(response);
            } catch (error) {
            }
        }
        fetchEstacoes();
    }, []);
    return (
        <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
            <Sidebar isOpen={showSidebar} />
            <div className='info-container'>
                <div className="info-title">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {showSidebar ? <ClearIcon /> : <DehazeIcon />}
                    </button>
                    <span>Alertas</span>
                </div>
               
                {alertas.length === 0 ? (
                    <div className='Alertas-container'>
                        <details className='details'>
                                <summary className='summary'>
                                    Nao tem alertas
                                </summary>
                            </details>
                    </div>
                ) : (
                    alertas.map((alerta) => (
                        <div className='Alertas-container' key={alerta.id_alerta}>
                            <details className='details'>
                                <summary className='summary'>
                                    {alerta.id_alerta}
                                </summary>
                                <p>{alerta.valor}, {alerta.sinal}</p>
                            </details>
                        </div>
                    ))
                )}
       



            </div>
        </div>

    )
}

export default Alertas