import React from 'react'
import { Typography, Form, Input, Button, Flex, Card } from 'antd'
import { MailOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons'
import './contact_form.css'

const { Title, Text } = Typography

const ContactForm = () => {
    const onFinish = (values) => {
        console.log('Mensaje enviado:', values)
    }

    return (
        <section id="contact" className="contact-section">
            <Flex vertical align="center">
                <Title level={2} className="contact-title">
                    Contacto
                </Title>

                <Text className="contact-subtitle">
                    ¿Tenés una idea en mente o querés personalizar algo?
                    <br />
                    Escribinos y te respondemos a la brevedad 💛
                </Text>

                <Card className="contact-card">
                    <Form
                        layout="vertical"
                        onFinish={onFinish}
                        className="contact-form"
                    >
                        <Form.Item
                            label="Nombre"
                            name="name"
                            rules={[{ required: true, message: 'Ingresá tu nombre' }]}
                        >
                            <Input
                                size="large"
                                prefix={<UserOutlined />}
                                placeholder="Tu nombre"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Ingresá tu email' },
                                { type: 'email', message: 'Email inválido' },
                            ]}
                        >
                            <Input
                                size="large"
                                prefix={<MailOutlined />}
                                placeholder="email@ejemplo.com"
                            />
                        </Form.Item>

                        <Form.Item
                            label="Mensaje"
                            name="message"
                            rules={[{ required: true, message: 'Escribí tu mensaje' }]}
                        >
                            <Input.TextArea
                                rows={4}
                                placeholder="Contanos qué querés personalizar..."
                                prefix={<MessageOutlined />}
                            />
                        </Form.Item>

                        <Button
                            type="primary"
                            size="large"
                            htmlType="submit"
                            block
                            className="contact-button"
                        >
                            Enviar mensaje
                        </Button>
                    </Form>
                </Card>
            </Flex>
        </section>
    )
}

export default ContactForm
