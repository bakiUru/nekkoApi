import { useState } from 'react'
import { Layout } from 'antd'
import './App.css'
import 'antd/dist/antd.css'
import { Flex } from 'antd'
import NavBar from './components/NavBar/NavBar'
import { theme } from 'antd'
import { Menu } from 'antd'
const { colorBgContainer, borderRadiusLG } = theme
const { Header, Footer, Sider, Content } = Layout


const App = () => {

  return (
    <>
      <Layout>
        <Header
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <NavBar />
        </Header>
        <Layout>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>

            <h1>Nekko Ecommerce</h1>

          </Content>
          <Footer>
            <h1>Footer</h1>
          </Footer>
        </Layout>
      </Layout>


    </>
  )
}

export default App
