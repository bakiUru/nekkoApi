import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    AppstoreOutlined,
    MailOutlined,
    ShoppingOutlined,
    SettingOutlined,
    HomeOutlined,
    LoginOutlined,
    UserOutlined,
    MenuOutlined,
    CloseOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
import CartButton from '../Cart/CartButton'
import './navBar.css'

const navItems = [
    { label: 'Home', key: 'home', icon: <HomeOutlined /> },
    { label: 'Nosotros', key: 'about', icon: <HomeOutlined /> },
    { label: 'Servicios', key: 'services', icon: <SettingOutlined /> },
    { label: 'Galeria', key: 'gallery', icon: <AppstoreOutlined /> },
    { label: 'Tienda', key: 'store', icon: <ShoppingOutlined /> },
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])



    // Scroll suave a secciones del home
    const scrollToSection = (id) => {
        const section = document.getElementById(id)
        section?.scrollIntoView({ behavior: 'smooth' })
    }

    // Menú principal
    const handleNavClick = (e) => {
        setCurrent(e.key)
        setMobileMenuOpen(false) // Cerrar menú móvil al seleccionar

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
        setMobileMenuOpen(false) // Cerrar menú móvil al seleccionar

        if (e.key === 'login') navigate('/login')
        if (e.key === 'register') navigate('/register')
    }


    return (
        <div className="containerNav">
            {/* Botón hamburguesa - solo visible en móvil */}
            <button
                className="hamburger-button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>

            {/* Menú de navegación - desktop */}
            <div className={`containerNavMenu ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <Menu
                    onClick={handleNavClick}
                    selectedKeys={[current]}
                    mode={isMobile ? "inline" : "horizontal"}
                    items={navItems}
                />
            </div>

            {/* Carrito */}
            <div className="nav-cart">
                <CartButton />
            </div>

            {/* Menú de usuario - desktop */}
            <div className={`nav-user-container ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                <Menu
                    onClick={handleUserClick}
                    selectedKeys={[current]}
                    mode={isMobile ? "inline" : "horizontal"}
                    items={userItems}
                    className="nav-user"
                />
            </div>

            {/* Overlay para cerrar el menú móvil */}
            {mobileMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}
        </div>
    )
}

export default NavBar
