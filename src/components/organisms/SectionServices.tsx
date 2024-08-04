import Subtitle from "../atoms/Subtitle";
import Services from "../molecules/Services";

const SectionServices=() => {
    return (
        <>
            <div className="flex flex-col justify-center gap-4 sm:top-0">
                <Subtitle subtitle={"Servicios"} className="text-primary text-lg sm:text-2xl" />
                <Services />
            </div>
        </>
    );
}

export default SectionServices;