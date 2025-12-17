import { useState } from 'react'
import { Layout } from 'antd'
import './app.css'
import 'antd/dist/antd.css'
import { Flex, Typography } from 'antd'
import NavBar from './components/NavBar/NavBar'
import { theme } from 'antd'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Store from './components/Store/Store'
const { colorBgContainer, borderRadiusLG } = theme
const { Header, Footer, Sider, Content } = Layout


const App = () => {

  return (
    <>
      {/* Header fijo */}
      <Layout style={{ background: 'white', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <Header style={{ display: 'flex', alignItems: 'center', padding: 0 }}>
          <NavBar />
        </Header>
      </Layout>

      {/* Contenido principal */}
      <Layout style={{ background: '#fafafa' }}>
        {/* Hero Section */}
        <Content style={{ padding: '60px 20px', background: 'white' }}>
          <Flex justify="center" vertical style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Typography.Title level={1} style={{ textAlign: 'center', marginBottom: '16px', fontSize: '3rem' }}>
              Nekko Ecommerce
            </Typography.Title>
            <Typography.Title level={3} style={{ color: '#666', textAlign: 'center', fontWeight: 400, marginBottom: '40px' }}>
              Animate a los resultados
            </Typography.Title>
            <Home />
          </Flex>
        </Content>

        {/* About Section */}
        <Content style={{ padding: '0', background: '#f9f9f9' }}>
          <About />
        </Content>

        {/* Services Section */}
        <Content style={{ padding: '0', background: 'white' }}>
          <Services />
        </Content>

        {/* Store Section */}
        <Content style={{ padding: '0', background: '#f9f9f9' }}>
          <Store />
        </Content>

        {/* Footer */}
        <Footer style={{
          background: '#1a1a1a',
          color: 'white',
          textAlign: 'center',
          padding: '40px 20px',
          marginTop: '0'
        }}>
          <Typography.Title level={3} style={{ color: 'white', marginBottom: '16px' }}>
            Nekko.uy
          </Typography.Title>
          <Typography.Text style={{ color: '#999' }}>
            © 2024 Nekko Ecommerce. Todos los derechos reservados.
          </Typography.Text>
        </Footer>
      </Layout>
    </>
  )
}

export default App
