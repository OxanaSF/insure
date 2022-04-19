import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from '../../assets/images/logo.svg'


const Navbar = () => {
    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/work',
            name: 'Work'
        },
        {
            path: '/blog',
            name: 'Blog'
        },
        {
            path: '/account',
            name: 'Account'
        },
        {
            path: '/plans',
            name: 'Plans'
        },

    ]
  return (
    <div>
        <nav>
            <img  src={Logo} className={styles.logo} alt="insure"/>
            <div className="menu">
                {
                    routes.map((route) => (
                        <NavLink to={route.path} key={route.name}>
                            <div className="list-item">{route.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    </div>
  )
}

export default Navbar