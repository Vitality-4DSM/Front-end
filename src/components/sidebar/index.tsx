import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Person4Icon from '@mui/icons-material/Person4';
import PollIcon from '@mui/icons-material/Poll';
import FeedIcon from '@mui/icons-material/Feed';
import MemoryIcon from '@mui/icons-material/Memory';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import Stars from '../../assets/Stars.png'
import './style.css'
import useLogin from '../../hooks';



// https://mui.com/material-ui/material-icons/


interface SidebarProps {
    isOpen: boolean;
}


const SidebarPublico: React.FC<SidebarProps> = ({ isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="logo">
                <img src={Stars} alt='Stars' className='logo-img' />
                <h1><span>Vi</span>tality</h1>
            </div>
            <div className="links">
                <nav>
                    <li>
                        <NavLink to='/'>
                            <LoginIcon className='icon' />
                            <span>Login</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/Dashboard'>
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

const SidebarLogado: React.FC<SidebarProps> = ({ isOpen }) => {
    const { logout } = useLogin();
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
                    <li>
                        <NavLink to='/estacoes' className="button-like-link" onClick={() => logout()}>
                            <LogoutIcon className='icon' />
                            <span>Logout</span>
                        </NavLink>

                    </li>

                </nav>
            </div>
        </div>
    )
}

const Sidebar: React.FC<SidebarProps> = (props: SidebarProps) => {
    const { token } = useLogin();
    return (
        token ? <SidebarLogado {...props} /> : <SidebarPublico {...props} />
    )
}

export default Sidebar;