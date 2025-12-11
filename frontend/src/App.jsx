import { useState } from 'react'
import { Layout } from 'antd'
import './App.css'
import 'antd/dist/antd.css'
import { Flex, Typography } from 'antd'
import NavBar from './components/NavBar/NavBar'
import { theme } from 'antd'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
const { colorBgContainer, borderRadiusLG } = theme
const { Header, Footer, Sider, Content } = Layout


const App = () => {

  return (
    <>
      <Layout style={{ background: 'white' }}>
        <Header
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <NavBar />
        </Header>
      </Layout>
      <Layout style={{ background: 'white' }}>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            overflow: 'hidden',
            overflowX: 'hidden',
            overflowY: 'hidden',
            background: 'white',
            borderRadius: borderRadiusLG,
          }}>

          <Flex justify="space-between" vertical>
            <Typography.Title level={1} style={{ textAlign: 'center' }}>Nekko Ecommerce</Typography.Title>
            <Typography.Title level={3} style={{ color: 'black', textAlign: 'center' }}>Animate a los resultados</Typography.Title>

            <Home></Home>
          </Flex>


        </Content>

        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: 'RED',
            borderRadius: borderRadiusLG,
          }}>

          <Typography.Title level={2}>NOSOTROS</Typography.Title>
        </Content>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 500,
            background: 'white',
            borderRadius: borderRadiusLG,
          }}>

          <Services></Services>
        </Content>
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: 'RED',
            borderRadius: borderRadiusLG,
          }}>

          <Typography.Title level={2}>Store</Typography.Title>
        </Content>
        <Footer>
          <h1>Footer</h1>
        </Footer>
      </Layout>



    </>
  )
}

export default App
