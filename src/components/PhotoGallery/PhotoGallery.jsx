import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        fetch('/image.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='container'
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
        >
            <h1 className='text-center my-5'>Photo Gallery</h1>
            <ImageGallery
            className="h-[50vh]"
                items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                autoPlay={true}
                showBullets={true}

            />
        </div>
    );
};

export default PhotoGallery;