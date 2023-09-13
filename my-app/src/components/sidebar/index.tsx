import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className='logo'>
                    <span className="logoName">
                        Vitality
                    </span>
                </div>
                <div className="itens">
                    <Link to='/perfil'>
                        <span className="link">
                            Meu Perfil
                        </span>
                    </Link>
                    <Link to='/dashborads'>
                        <span className="link">
                            Dashboards
                        </span>
                    </Link>
                    <Link to='/estacoes'>
                        <span className="link">
                            Estações
                        </span>
                    </Link>
                    <Link to='/guiainfo'>
                        <span className="link">
                            Guia de Informações
                        </span>
                    </Link>
                    <Link to='/alerta'>
                        <span className="link">
                            Alertas
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Sidebar