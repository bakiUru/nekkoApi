import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
    HomeOutlined,
    LoginOutlined,
    UserOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import CartButton from '../Cart/CartButton'
import './navBar.css'

const navItems = [
    { label: 'Home', key: 'home', icon: <HomeOutlined /> },
    { label: 'Servicios', key: 'services', icon: <SettingOutlined /> },
    { label: 'Tienda', key: 'store', icon: <AppstoreOutlined /> },
    { label: 'Contacto', key: 'contact', icon: <MailOutlined /> },
    {
        key: 'instagram',
        label: (
            <a
                href="https://www.instagram.com/nekko.uy"
                target="_blank"
                rel="noopener noreferrer"
            >
                ¡Seguinos en Instagram!
            </a>
        ),
    },
]

const userItems = [
    { label: 'Login', key: 'login', icon: <LoginOutlined /> },
    { label: 'Register', key: 'register', icon: <UserOutlined /> },
]

const NavBar = () => {
    const navigate = useNavigate()
    const [current, setCurrent] = useState('home')

    // Scroll suave a secciones del home
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        section?.scrollIntoView({ behavior: 'smooth' })
    }

    // Menú principal
    const handleNavClick = (e) => {
        setCurrent(e.key)

        // Siempre volvemos al home
        navigate('/')

        setTimeout(() => {
            switch (e.key) {
                case 'home':
                    scrollToSection('home')
                    break
                case 'services':
                    scrollToSection('services')
                    break
                case 'store':
                    scrollToSection('store')
                    break
                case 'contact':
                    scrollToSection('contact')
                    break
                default:
                    break
            }
        }, 100)
    }

    // Menú usuario
    const handleUserClick = (e) => {
        setCurrent(e.key)

        if (e.key === 'login') navigate('/login')
        if (e.key === 'register') navigate('/register')
    }

    return (
        <div className="containerNav">
            <div className="containerNavMenu">
                <Menu
                    onClick={handleNavClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={navItems}
                />
            </div>

            <div className="nav-cart">
                <CartButton />
            </div>

            <Menu
                onClick={handleUserClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={userItems}
                className="nav-user"
            />
        </div>
    )
}

export default NavBar
