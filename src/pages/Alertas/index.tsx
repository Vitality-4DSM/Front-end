import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './style.css'
import { getAlertas } from '../../utils/axios.routes';

const Alertas: React.FC = () => {
    const [alerta, setAlerta] = useState<any[]>([]);
    const [showSidebar, setShowSidebar] = useState(true); /* seta o estado da sidebar */

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar); /* logica do botão abrir e fechar a sidebar */
    };

    useEffect(() => {
        const fetchEstacoes = async () => {
            try {
                const response = await getAlertas();
                setAlerta(response);
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
                    <div className='cadastro-botão'>
                            <button type='submit'
                                className='btn-cadastro'
                                // onClick={() => { setOpenModal(true) }}
                            >Cadastrar</button>
                        </div>
                </div>
               
                {alerta.length === 0 ? (
                    <div className='Alertas-container'>
                        <details className='details'>
                                <summary className='summary'>
                                    Não tem alertas
                                </summary>
                            </details>
                    </div>
                ) : (
                    alerta.map((item) => (
                        <div className='Alertas-container' key={item.id_alerta}>
                            <details className='details'>
                                <summary className='summary'>
                                    {item.id_alerta}
                                </summary>
                                <p>{item.valor}, {item.sinal}</p>
                            </details>
                        </div>
                    ))
                )}
       



            </div>
        </div>

    )
}

export default Alertas