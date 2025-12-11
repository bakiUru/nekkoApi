import { Button, Card, Carousel, Flex, Typography } from 'antd';
const cardStyle = {
    width: '90%',

};
const imgStyle = {
    display: 'block',
    width: 400,
    margin: '10px'
};
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
}]
console.log(services.length)
function ServicesContent() {
    return (

        services.map((service, id) => (
            <Card key={service.title} style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
                <Flex justify="space-between">

                    {id % 2 === 0 ? (
                        <img
                            draggable={false}
                            alt="avatar"
                            src={service.image}
                            style={imgStyle} />
                    ) : (
                        <br></br>
                    )}

                    <Flex vertical align="flex-start" justify="space-between" style={{ padding: 32 }}>
                        <Typography.Title level={2}>
                            {service.title}
                        </Typography.Title>
                        <Typography.Title level={4}>
                            {service.subtitle}
                        </Typography.Title>
                        <Typography.Title level={5}>
                            {service.description}
                        </Typography.Title>

                        <Button type="primary" href="https://ant.design" target="_blank" style={{ marginTop: 16, width: '50%', alignSelf: 'center' }}>
                            Cotizacion
                        </Button>
                    </Flex>
                    {id % 2 !== 0 ? (
                        <img
                            draggable={false}
                            alt="avatar"
                            src={service.image}
                            style={imgStyle} />
                    ) : (
                        <br></br>
                    )}

                </Flex>
            </Card >
        ))
    )
}


export default ServicesContent