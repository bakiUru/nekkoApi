import React from 'react'
import { Typography, Flex } from 'antd'

function About() {
    return (
        <>
            <Flex vertical>
                <Typography.Title level={2} style={{ textAlign: 'center' }}>¿Quienes Somos?</Typography.Title>
                <p style={{ fontSize: '20px', margin: '5%' }}>En <strong>NEKKO.UY</strong> somos amantes de la personalización y el diseño. Nos dedicamos a crear producitos únicos, llenos de estilo y pensados para quienes buscan algo diferente<br></br>
                    Cada artículo que realizamos desde stickers, vinilos, carteleria y accesorios personalizados está hecho con dedicación, materiales de calidad y un toque creativo que nos caracteriza.<br></br>

                    Nacimos con la idea de transformar lo cotidiano en algo especial. Creemos que cada persona, emprendimiento o regalo tiene una historia, y nuestro objetivo es ayudarte a contarla con diseños originales, modernos y llenos de color.
                    <br></br>
                    <br></br>
                    Trabajamos de forma artesanal, cuidando cada detalle y ofreciendo una experiencia cercana, rápida y confiable. Si buscás personalizar tus objetos, tu espacio o tus productos.
                    <div style={{ fontSize: '24px', margin: '5%', textAlign: 'center' }}>
                        <p><strong>NEKKO.UY</strong> es el lugar donde tus ideas toman forma.
                            <br />
                            💛 Diseños que te acompañan. Personalización que te representa. 💛</p>
                    </div>
                </p>
            </Flex>
        </>

    )
}

export default About