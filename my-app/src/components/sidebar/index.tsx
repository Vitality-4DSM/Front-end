import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Person4Icon from '@mui/icons-material/Person4';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import FeedIcon from '@mui/icons-material/Feed';
import Stars from '../../assets/Stars.png'
import './style.css'

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={Stars} alt='Stars' className='logo-img' />
                <h1><span>Vi</span>tality</h1>
            </div>
            <div className="links">
                <nav>
                    <li>
                        <NavLink to='/perfil'>
                            <Person4Icon className='icon' />
                            <span>Meu Perfil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboards'>
                            <DashboardIcon className='icon' />
                            <span>Dashboards</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/estacoes'>
                            <SevereColdIcon className='icon' />
                            <span>Estações</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/informacoes'>
                            <FeedIcon className='icon' />
                            <span>Guia de Informações</span>
                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar