import React from 'react'
import { Card, Form, Input, Button, Typography, Flex, Divider } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './register_form.css'

const { Title, Text } = Typography

const RegisterForm = () => {
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
        <Flex className="register-wrapper" align="center" justify="center">

            <Card className="register-card" >
                <Typography.Title
                    level={3}
                    style={{
                        color: '#666',
                        textAlign: 'center',
                        fontWeight: 400,
                        marginBottom: '40px',
                    }}
                >
                    Sumate a Nekko.uy 🐱
                </Typography.Title>
                <Title level={3} className="register-title">
                    Registrarse
                </Title>

                <Text className="register-subtitle">
                    Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </Text>

                <Form
                    layout="vertical"
                    onFinish={onFinish}
                    className="register-form"
                >
                    <Form.Item
                        label=" Email o usuario"
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

                    <Form.Item
                        label="Confirmar contraseña"
                        name="password2"
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
                        className="register-button"
                    >
                        Registrarse
                    </Button>
                </Form>

                <Divider />

                <Text className="register-footer">
                    💛 NEKKO.UY · Acceso seguro
                </Text>
            </Card>
        </Flex>
    )
}

export default RegisterForm
