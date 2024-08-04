import data from "../../constant/data";
import Subtitle from "../atoms/Subtitle";
import Title from "../atoms/Title";

const SectionHeader=() => {
    return (
        <div className="sm:flex sm:flex-col sm:justify-start  pt-8 sm:pt-0 bg-black sm:1/2 ">
            <Title title={data?.about?.title} className="font-semibold text-[1.6rem] sm:text-4xl text-primary " />
            <Subtitle subtitle={data?.about?.subtitle} />
        </div>);
}

export default SectionHeader;