import { useState } from 'react';
import { Button, Card, Flex } from 'antd';
import { useViewport } from '../../contexts/ViewportContext';
import BudgetModal from '../Modal Budget/BudgetModal';

//utilizar la misma 
const services = [{
    title: "Personalizacion de Prendas",
    subtitle: "👕✨ Personalización de Prendas a Tu Medida ✨👚",
    description: " Convertí cualquier prenda en algo único con estampados de alta calidad, resistentes y llenos de estilo. Ideal para remeras, buzos, uniformes, ropa deportiva y más 🔥🎽🧥 ¡Diseñá, creá y destacá con indumentaria verdaderamente personalizada! 🎨💫",
    image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},
{
    title: "Impresiones de Stickers",
    subtitle: "🟣✨ Stickers Personalizados que Hablan por Vos ✨🟢",
    description: "Diseños únicos, resistentes al agua y súper duraderos, ideales para botellas, cuadernos, laptops, autos y más 💧💻🚗📘 ¡Pegá tu estilo en todas partes con stickers creativos y de alta calidad! 🎨🔥",
    image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},
{
    title: "Vinilos Personalizados",
    subtitle: "✨ Vinilos Personalizados de Alta Calidad ✨",
    description: "Transformá cualquier superficie con nuestros diseños exclusivos.Ideal para paredes, autos, vidrieras, tazas, termos y mucho más 🚗🏠☕✨¡Dale vida a tus ideas con vinilos duraderos, vibrantes y 100% a tu gusto! 🎨💥",
    image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},
{
    title: "Carteleria",
    subtitle: "🏪✨ Cartelería en Vinilo para Impulsar tu Negocio ✨📣",
    description: "Diseños profesionales, resistentes y de alta visibilidad para vidrieras, carteles promocionales, señalética y branding comercial 💼🔎✨¡Atraé más clientes con vinilos impactantes que transforman tu local! 🚀🟡",
    image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},
{
    title: "Impresión de Fotografías",
    subtitle: "📸✨ Imprimí tus Momentos Más Especiales ✨🖼️",
    description: "Dale vida a tus recuerdos con impresiones fotográficas de alta calidad, colores vibrantes y excelente definición. Ideales para cuadros, regalos, álbumes o decoración del hogar 🏡🎁💖 Convertí tus fotos favoritas en recuerdos que duran para siempre ✨📷",
    image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
},
{
    title: "Tarjetas Personalizadas",
    subtitle: "💌✨ Tarjetas Personalizadas para Cada Ocasión ✨🎉",
    description: "Creá tarjetas únicas para cumpleaños, eventos, invitaciones, agradecimientos o marcas personales. Diseños a medida, impresiones de calidad y detalles que marcan la diferencia 🎨💖📄 ¡Transmití emociones con tarjetas hechas especialmente para vos! ✨✍️",
    image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
}


]

console.log(services.length)

function ServicesContent() {
    const [selectedService, setSelectedService] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const { isMobile } = useViewport();

    const handleOpenModal = (serviceTitle) => {
        setSelectedService(serviceTitle);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedService(null);
    };

    return (
        <div className="services-content">
            {services.map((service, id) => (
                <Card key={service.title} className="service-card" styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                    <Flex justify="space-between">

                        {isMobile || (id % 2 === 0) ? (
                            <img
                                draggable={false}
                                alt={service.title}
                                src={service.image}
                                className="service-image" />
                        ) : (
                            <br></br>
                        )}

                        <Flex vertical align="flex-start" justify="space-between" className="service-content">
                            <h3 className="service-title">
                                {service.title}
                            </h3>
                            <h4 className="service-subtitle">
                                {service.subtitle}
                            </h4>
                            <p className="service-description">
                                {service.description}
                            </p>

                            <Button
                                type="primary"
                                className="service-button"
                                style={{ marginTop: 16, width: '50%', alignSelf: 'center' }}
                                onClick={() => handleOpenModal(service.title)}
                            >
                                Cotización
                            </Button>
                        </Flex>
                        {id % 2 !== 0 && !isMobile ? (
                            <img
                                draggable={false}
                                alt={service.title}
                                src={service.image}
                                className="service-image" />
                        ) : (
                            <br></br>
                        )}

                    </Flex>
                </Card >
            ))}

            {modalOpen && selectedService && (
                <BudgetModal
                    service={selectedService}
                    open={modalOpen}
                    onOk={handleCloseModal}
                    onCancel={handleCloseModal}
                />
            )}
        </div>
    )
}


export default ServicesContent