import React, { useState } from 'react'
import Sidebar from '../../components/sidebar'
import DehazeIcon from '@mui/icons-material/Dehaze';
import ClearIcon from '@mui/icons-material/Clear';
import './style.css'

const Info: React.FC = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className={`flex ${showSidebar ? 'shifted' : ''}`}>
            <Sidebar isOpen={showSidebar} />

            <div className='info-container'>
                <div className="info-title">
                    <button className="toggle-button" onClick={toggleSidebar}>
                        {showSidebar ? <ClearIcon /> : <DehazeIcon />}
                    </button>
                    <span>Informações Didáticas</span>
                </div>
                <div className='box-container'>
                    <div className='box-item'>
                        <div className='image'>

                        </div>
                        <div className='box-info'>
                            <h2>O que é Termostato</h2>
                            <hr className='line'></hr>
                            <p>Termostato é</p>
                        </div>
                    </div>
                    <div className='box-item'>
                        <div className='image'>

                        </div>
                        <div className='box-info'>
                            <h2>O que é Termostato</h2>
                            <hr className='line'></hr>
                            <p>Termostato é</p>
                        </div>
                    </div>
                    <div className='box-item'>
                        <div className='image'>

                        </div>
                        <div className='box-info'>
                            <h2>O que é Termostato</h2>
                            <hr className='line'></hr>
                            <p>Termostato é</p>
                        </div>
                    </div>
                    <div className='box-item'>
                        <div className='image'>

                        </div>
                        <div className='box-info'>
                            <h2>O que é Termostato</h2>
                            <hr className='line'></hr>
                            <p>Termostato é</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Info