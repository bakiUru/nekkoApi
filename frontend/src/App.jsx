import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout, Flex, Typography } from 'antd'
import './app.css'
import 'antd/dist/antd.css'

import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import About from './components/About/About'
import Store from './components/Store/Store'
import ContactForm from './components/ContactForm/ContactForm'
import LoginForm from './components/Login/LoginForm'

const { Header, Footer, Content } = Layout

const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh', background: '#fafafa' }}>

        {/* Header fijo (solo para home pública) */}
        <Header
          style={{
            background: 'white',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            padding: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <NavBar />
        </Header>

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                {/* Hero */}
                <Content style={{ padding: '60px 20px', background: 'white' }}>
                  <Flex
                    justify="center"
                    vertical
                    style={{ maxWidth: '1200px', margin: '0 auto' }}
                  >
                    <Typography.Title
                      level={1}
                      style={{ textAlign: 'center', fontSize: '3rem' }}
                    >
                      Nekko Ecommerce
                    </Typography.Title>

                    <Typography.Title
                      level={3}
                      style={{
                        color: '#666',
                        textAlign: 'center',
                        fontWeight: 400,
                        marginBottom: '40px',
                      }}
                    >
                      Animate a los resultados
                    </Typography.Title>

                    <Home />
                  </Flex>
                </Content>

                <Content style={{ background: '#f9f9f9' }}>
                  <About />
                </Content>

                <Content style={{ background: 'white' }}>
                  <Services />
                </Content>

                <Content style={{ background: '#f9f9f9' }}>
                  <Store />
                </Content>

                <Content style={{ background: 'white' }}>
                  <ContactForm />
                </Content>

                {/* Footer */}
                <Footer
                  style={{
                    background: '#1a1a1a',
                    color: 'white',
                    textAlign: 'center',
                    padding: '40px 20px',
                  }}
                >
                  <Typography.Title level={3} style={{ color: 'white' }}>
                    Nekko.uy
                  </Typography.Title>

                  <Typography.Text style={{ color: '#999' }}>
                    © 2025 Nekko Ecommerce. Todos los derechos reservados.
                  </Typography.Text>
                </Footer>
              </>
            }
          />

          {/* LOGIN */}
          <Route path="/login" element={<LoginForm />} />

        </Routes>
      </Layout>
    </Router>
  )
}

export default App
