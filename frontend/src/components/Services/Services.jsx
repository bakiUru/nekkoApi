import { Flex } from 'antd';
import ServicesContent from './ServicesContent';
import './services.css';

function Services() {
    return (
        <div className="services-container">
            <Flex vertical>
                <h2>Servicios</h2>
                <ServicesContent />
            </Flex>
        </div>
    )
}

export default Services

