import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Gallery=({images}: {images: string[]}) => {
    return (
        <div className="w-full sm:max-w-[280px]">
            <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                {images.map((image: string,index: number) => (
                    <div key={index}>
                        <img src={image} alt={`Gallery Image ${index+1}`} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Gallery;
