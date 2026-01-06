import React from 'react'
import { Card, Form, Input, Button, Typography, Flex, Divider } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './login_form.css'

const { Title, Text } = Typography

const LoginForm = () => {
    const onFinish = (values) => {
        // Acá normalmente llamás a tu API
        // La respuesta debería indicar el rol: "admin" | "user"
        console.log('Login:', values)

        /*
          Ejemplo respuesta backend:
          {
            token: 'jwt',
            role: 'admin'
          }
        */
    }

    return (
        <Flex className="login-wrapper" align="center" justify="center">
            <Card className="login-card" bordered={false}>
                <Title level={3} className="login-title">
                    Ingresar
                </Title>

                <Text className="login-subtitle">
                    Clientes y administradores
                </Text>

                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    className="login-form"
                >
                    <Form.Item
                        label="Email o usuario"
                        name="email"
                        rules={[{ required: true, message: 'Campo obligatorio' }]}
                    >
                        <Input
                            size="large"
                            prefix={<UserOutlined />}
                            placeholder="usuario@nekko.uy"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'Campo obligatorio' }]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            placeholder="••••••••"
                        />
                    </Form.Item>

                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        block
                        className="login-button"
                    >
                        Acceder
                    </Button>
                </Form>

                <Divider />

                <Text className="login-footer">
                    💛 NEKKO.UY · Acceso seguro
                </Text>
            </Card>
        </Flex>
    )
}

export default LoginForm
