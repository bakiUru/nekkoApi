import React, { useState, useEffect } from 'react';
import { Button, Flex, Modal, message, Typography } from 'antd';
import { Form, Input, Upload } from 'antd';
import { PhoneOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import './budgetModal.css';

const { Text } = Typography
const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'subiendo') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'listo') {
            message.success(`${info.file.name} archivo subido exitosamente`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} archivo subido fallido.`);
        }
    },
    progress: {
        strokeColor: {
            '0%': '#0e0d0dff',
            '100%': '#f5c400',
        },
        strokeWidth: 3,
        format: percent => percent && `${Number.parseFloat(percent.toFixed(2))}%`,
    },
};

const lineStyle = {
    lineHeight: '28px',
};
const sharedContent = (
    <>
        <Flex gap="middle">
            <div className='contact-title'>
                Hola Nekko!, necesito Un presupuesto 📋 Gracias
            </div>

        </Flex>
        <Flex gap="middle">
            <Form
                name="budget-form"
                layout="vertical"
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
                    label="Telefono"
                    name="phone"
                    rules={[
                        { required: true, message: 'Ingresá tu telefono' },
                    ]}
                >
                    <Input
                        size="large"
                        prefix={<PhoneOutlined />}
                        placeholder="Tu telefono 099-999-111"
                    />
                </Form.Item>
                <Form.Item
                    label="Detalles "
                    name="message"
                    rules={[{ required: true, message: 'Escribí tu mensaje' }]}
                >
                    <Input.TextArea
                        rows={4}
                        placeholder="Contanos qué querés personalizar..."
                    />
                </Form.Item>

                <Text className="contact-subtitle">
                    ¿Tenes tu Logo o Imagen?
                    <br />
                </Text>
                <Text className="contact-subtitle">
                    Subilo para que podamos darte un presupuesto
                </Text>

                <Form.Item
                    label="Logo o Imagen"
                    name="logo"
                    rules={[{ required: false, message: 'Subi tu logo o imagen' }]}>
                    <Upload {...props}>
                        <Button icon={<UploadOutlined />}>Subir Logo o Imagen</Button>
                    </Upload>
                </Form.Item>
            </Form>
        </Flex>
    </>
);


const stylesFn = info => {
    if (info.props.footer) {
        return {
            container: {
                borderRadius: 14,
                border: '1px solid #ccc',
                padding: 0,
                overflow: 'hidden',
            },
            header: {
                padding: 16,
            },
            body: {
                padding: 16,
            },
            footer: {
                padding: '16px 10px',
                backgroundColor: '#fafafa',
            },
        };
    }
    return {};
};
const BudgetModal = ({ service, open, onOk, onCancel }) => {
    const [modalFnOpen, setFnOpen] = useState(open);
    const [form] = Form.useForm();

    useEffect(() => {
        setFnOpen(open);
        console.log(service)
    }, [open]);

    const footer = (
        <>
            <Button
                onClick={onCancel}
                className="cancel-button"
            >
                Cancelar
            </Button>
            <Button
                type="primary"
                className="budget-button"
                onClick={onOk}
            >
                Enviar
            </Button>
        </>
    );
    return (
        <Flex gap="middle">
            <Modal
                className="modal-content"
                footer={footer}
                title={`Presupuesto ${service}`}
                styles={stylesFn}
                mask={{ enabled: true, blur: true }}
                open={modalFnOpen}
                onOk={onOk}
                onCancel={onCancel}
            >
                {sharedContent}
            </Modal>
        </Flex>
    );
};
export default BudgetModal;