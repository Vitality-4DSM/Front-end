import React, { useState } from 'react';
import './styles.css'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import gigante from '../../assets/Gigante.jpg'

const Estacoes: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
            <Sidebar isOpen={showSidebar} />
            <div className='estacoes-container'>
                <div className="estacoes-title">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {showSidebar ? <ClearIcon /> : <DehazeIcon />}
                    </button>
                    <span>Estações em atividade</span>
                    <div className='box-container'>
                        <div className='estacao'>
                            {/* <div className='card'><img src={gigante} alt='card photos' /> <p>Descricao:</p></div>
                            <div className='card'><img src={gigante} alt='card photos' /><p>Descricao:</p></div>
                            <div className='card'><img src={gigante} alt='card photos' /><p>Descricao:</p></div>
                            <div className='card'><img src={gigante} alt='card photos' /><p>Descricao:</p></div>
                            <div className='card'><img src={gigante} alt='card photos' /><p>Descricao:</p></div>
                            <div className='card'><img src={gigante} alt='card photos' /><p>Descricao:</p></div> */}


                            <div className='card'>
                                <div className='card-content'>
                                    <h2 className='card-title'>Nome da Estação</h2>
                                    
                                    <p className='card-txt'>
                                        Todas as infos basicas serão exibidas através do hoverzinho ao
                                        passar o mouse acima do card.
                                    </p>
                                    <div className='card-btn-wraper'>
                                        <a href ='#' className='card-btn'>Editar Estação</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Estacoes;

