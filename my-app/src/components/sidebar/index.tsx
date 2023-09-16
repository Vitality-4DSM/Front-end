import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Person4Icon from '@mui/icons-material/Person4';
import PollIcon from '@mui/icons-material/Poll';
import FeedIcon from '@mui/icons-material/Feed';
import MemoryIcon from '@mui/icons-material/Memory';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Stars from '../../assets/Stars.png'
import './style.css'

// https://mui.com/material-ui/material-icons/


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
                            <PollIcon className='icon' />
                            <span>Dashboards</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/estacoes'>
                            <MemoryIcon className='icon' />
                            <span>Estações</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/informacoes'>
                            <FeedIcon className='icon' />
                            <span>Guia de Informações</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/alertas'>
                            <AnnouncementIcon className='icon' />
                            <span>Alertas</span>
                        </NavLink>
                    </li>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar