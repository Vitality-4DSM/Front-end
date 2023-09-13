import React, { useState } from 'react';
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../../components/sidebar';
import gigante from '../../img/gigante.jpg'

const Estacoes = () => {
    return (
        <>
            <div className='estacao-main'>
                {/* <Sidebar /> */}
                <div className='right-side'> 
                    <div className='cadastro-estacao'>
                    <h2>Estações em atividades</h2>
                    <button className='cadastrar'> Cadastrar Estação</button>
                </div>
                    <div className='estacao'>
                        <div className='card'><img src={gigante} alt='card photos' /></div>
                        <div className='card'><img src={gigante} alt='card photos' /></div>
                        <div className='card'><img src={gigante} alt='card photos' /></div>
                        <div className='card'><img src={gigante} alt='card photos' /></div>
                        <div className='card'><img src={gigante} alt='card photos' /></div>
                        <div className='card'><img src={gigante} alt='card photos' /></div>
                    </div>
                </div>

            </div>
        </>
    )

}
export default Estacoes;