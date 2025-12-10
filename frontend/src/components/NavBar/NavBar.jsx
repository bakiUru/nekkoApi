import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined, HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Flex } from 'antd';
import CartButton from '../Cart/CartButton';
import './navBar.css';




const navItems = [
    {
        label: 'Home',
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: 'Servicios',
        key: 'services',
        icon: <SettingOutlined />
    },
    {
        label: 'Tienda',
        key: 'store',
        icon: <AppstoreOutlined />
    },
    {
        label: 'Contacto',
        key: 'contact',
        icon: <MailOutlined />
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        icon: <SettingOutlined />,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    { label: 'Option 1', key: 'setting:1' },
                    { label: 'Option 2', key: 'setting:2' },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    { label: 'Option 3', key: 'setting:3' },
                    { label: 'Option 4', key: 'setting:4' },
                ],
            },
        ],
    },
    {
        key: 'alipay',
        label: (
            <a href="https://www.instagram.com/nekko.uy" target="_blank" rel="noopener noreferrer">
                ¡ Seguinos en Instagram !
            </a>
        ),
    },
];

const userItems = [
    {
        label: 'Login',
        key: 'login',
        icon: <LoginOutlined />,
    },
    {
        label: 'Register',
        key: 'register',
        icon: <UserOutlined />
    }
]


const NavBar = () => {
    const [current, setCurrent] = useState('home');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Flex className="containerNav">
                <Flex className="containerNavMenu" >
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={navItems} style={{ flex: 1, minWidth: 0 }} />
                </Flex>
                <CartButton />

                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={userItems} style={{ minWidth: '300px', justifyContent: 'flex-end' }} />

            </Flex>
        </>
    );
};
export default NavBar;