const Subtitle=({subtitle,className}: {subtitle: string,className?: string}) => {
    return (
        <h3 className={`${className? className:'text-left text-neutral text-sm font-medium sm:text-base lg:text-2xl sm:mt-4'}`}>
            {subtitle}
        </h3>
    );
};

export default Subtitle;