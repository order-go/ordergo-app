import data from "../../constant/data";
import Gallery from "../atoms/Gallery";

const Services=() => {
    const {images}=data.service
    return (
        <>
            <Gallery images={images} />
        </>
    );
}

export default Services;