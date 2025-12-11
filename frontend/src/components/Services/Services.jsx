import React from 'react';
import { Button, Card, Carousel, Flex, Typography } from 'antd';
import ServicesContent from './ServicesContent';

function Services() {
    return (
        <Flex vertical>
            <Typography.Title level={2} style={{ textAlign: 'center' }}>Servicios</Typography.Title>
            <ServicesContent />
        </Flex>
    )
}

export default Services

