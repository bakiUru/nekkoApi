import React from 'react'
import { Typography, Flex } from 'antd'
import './about.css'

function About() {
    return (
        <div className="about-container" id="about">
            <Flex vertical>
                <h2>¿Quienes Somos?</h2>
                <div className="about-text">
                    <p>En <strong>NEKKO.UY</strong> somos amantes de la personalización y el diseño. Nos dedicamos a crear producitos únicos, llenos de estilo y pensados para quienes buscan algo diferente.</p>

                    <p>Cada artículo que realizamos desde stickers, vinilos, carteleria y accesorios personalizados está hecho con dedicación, materiales de calidad y un toque creativo que nos caracteriza.</p>

                    <p>Nacimos con la idea de transformar lo cotidiano en algo especial. Creemos que cada persona, emprendimiento o regalo tiene una historia, y nuestro objetivo es ayudarte a contarla con diseños originales, modernos y llenos de color.</p>

                    <p>Trabajamos de forma artesanal, cuidando cada detalle y ofreciendo una experiencia cercana, rápida y confiable. Si buscás personalizar tus objetos, tu espacio o tus productos.</p>

                    <div className="about-highlight">
                        <p><strong>NEKKO.UY</strong> es el lugar donde tus ideas toman forma.</p>
                        <span>💛 Diseños que te acompañan. Personalización que te representa. 💛</span>
                    </div>
                </div>
            </Flex>
        </div>
    )
}

export default About