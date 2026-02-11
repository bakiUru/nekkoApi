import { useEffect, useRef, useState } from "react";
import { Content } from "antd/es/layout/layout";
import { Flex, Row, Typography } from "antd/es";
import ImagesGallery from "./ImagesGallery";
import './galleryImages.css';
import { useNavigate, useLocation } from "react-router-dom";

const { Title } = Typography

const Gallery = () => {
    const numImages = 4;
    const [isVisible, setIsVisible] = useState(false);
    const [fullGallery, setFullGallery] = useState(false);
    const location = useLocation();
    const sectionRef = useRef(null);
    const navigate = useNavigate();
    const images = [
        {
            title: "Image 1",
            description: "Description 1",
            image: "/imagesHome/1.jpeg",
        },
        {
            title: "Image 2",
            description: "Description 2",
            image: "/imagesHome/2.jpeg",
        },
        {
            title: "Image 3",
            description: "Description 3",
            image: "/imagesHome/3.jpeg",
        },
        {
            title: "Image 4",
            description: "Description 4",
            image: "/imagesHome/4.jpeg",
        },

    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1, // Se activa cuando el 10% del elemento es visible
            }
        );

        if (location.pathname === "/gallery") {
            setFullGallery(true);
        }
        else {
            setFullGallery(false);
        }

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };

    }, [location]);

    return (
        <Content
            ref={sectionRef}
            className={`gallery_section ${isVisible ? 'gallery_section_visible' : ''}`}
        >
            <Flex
                justify="center"
                style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}
            >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    {fullGallery ?
                        <ImagesGallery images={images} />
                        :
                        <ImagesGallery images={images.slice(0, numImages)} numImages={numImages} />
                    }
                </Row>
            </Flex>
            <Title level={3} className="gallery_title" onClick={() => navigate('/gallery')}>
                Ver más
            </Title>
        </Content>
    );
};

export default Gallery;