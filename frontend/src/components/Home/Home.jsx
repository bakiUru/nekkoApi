import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import './home.css'
const corruselStyle = {
    width: '80%',
    height: '400px',
    overflow: 'hidden',
    margin: 'auto',
    border: '2px solid #e5a0a0ff',
    borderRadius: '10px'
}
const contentStyle = {
    margin: 0,
    height: '400px',
    color: '#fff',
    lineHeight: '400px',
    textAlign: 'center',
    background: '#364d79',
};

const imageStyle = {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
};

const Home = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Use Vite's import.meta.glob to dynamically import all images from public/images
        const loadImages = async () => {
            try {
                // This will work with Vite - it imports all image files from the public directory
                const imageModules = import.meta.glob('/public/imagesHome/*.{jpg,jpeg,png,gif,webp,svg,bmp}', { eager: true });//{eager true}, carga todos los archivos junto con el componente, FALSE = lazy
                const imagePaths = Object.keys(imageModules).map(path => {
                    // Convert the path to be relative to public folder
                    console.log(path);
                    return path.replace('/public', '');
                });

                setImages(imagePaths);
            } catch (error) {
                console.error('Error al cargar las imágenes:', error);
            }
        };

        loadImages();
    }, []);

    return (
        <>
            <Carousel autoplay infinite={true} autoplaySpeed={2000} className='corrusel'>
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <div key={index}>
                            <img src={img} alt={`Image ${index + 1}`} style={imageStyle} />
                        </div>
                    ))
                ) : (
                    <div>
                        <h3 style={contentStyle}>Cargando imágenes...</h3>
                    </div>
                )}
            </Carousel>
            <br />
        </>
    );
};

export default Home;