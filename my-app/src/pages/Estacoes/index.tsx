import React, { useState, useEffect } from 'react';
import './styles.css'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import gigante from '../../assets/Gigante.jpg'
import { getEstacoes } from '../../utils/axios.routes';
const Estacoes: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(true);
    const [estacoes, setEstacoes] = useState<any[]>([]);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    useEffect(() => {
        const fetchEstacoes = async () => {
            try {
                const response = await getEstacoes();
                setEstacoes(response);
            } catch (error) {
            }
        }
        fetchEstacoes();
    }, []);

    return (
        <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
            <Sidebar isOpen={showSidebar} />
            <div className='estacoes-container'>
                <div className="estacoes-title">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {showSidebar ? <ClearIcon /> : <DehazeIcon />}
                    </button>
                    <span>Estações em atividade</span>
                </div>
                <div className='estacoes-header'>
                { estacoes && estacoes.map((item) => {
              
                    return (
                        <div className='box-container' key={item.id}>
                            <div className='estacao' key={item.id}>
                                <div className='card'>
                                    <div className='card-content'>
                                        <h2 className='card-title'>{item.identificador}</h2>

                                        <p className='card-txt'>
                                            {item.status} MUITO TEX
                                        </p>
                                        <div className='card-btn-wraper'>
                                            <a href='#' className='card-btn'>Editar Estação</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
                </div>
                
            </div>
        </div>

    )

}

export default Estacoes;

