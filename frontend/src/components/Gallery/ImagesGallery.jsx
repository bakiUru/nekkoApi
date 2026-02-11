import { Space, Image, Col } from 'antd';
import './galleryImages.css';

const ImagesGallery = ({ images, numImages }) => {
    return (
        <>
            {images.slice(0, numImages).map((image, index) => (

                <Col
                    className="gutter-row"
                    xs={12}  // Mobile: 2 columns
                    sm={12}  // Tablet: 2 columns
                    md={6}   // Desktop: 4 columns
                    key={index}
                >
                    <Space>
                        <Image
                            className='image_gallery'
                            style={{ maxWidth: '250px', height: '250px' }}
                            alt={image.title}
                            src={image.image}
                            preview={{
                                mask: { blur: true },
                                cover: (
                                    <Space vertical align="center">
                                        {image.title}
                                    </Space>
                                ),
                            }}
                        />

                    </Space>
                </Col>

            ))}
        </>

    )
}

export default ImagesGallery