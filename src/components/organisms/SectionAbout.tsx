import data from "../../constant/data";
import Paragraph from "../atoms/Paragraph";
import Subtitle from "../atoms/Subtitle";
import Contact from "../molecules/Contact";

const SectionAbout=() => {
    return (
        <>
            <div className="flex flex-col gap-4   ">
                <Contact />
                <Subtitle subtitle="¿Qué ofrecemos?" className="text-primary text-lg sm:text-2xl lg:text-2xl" />
                <Paragraph paragraph={data?.about?.paragraph} />
            </div>
        </>
    );
};

export default SectionAbout;
