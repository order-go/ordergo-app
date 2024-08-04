import data from "../../constant/data";

const Footer=() => {
    const {about}=data;

    return (
        <footer className=" sm:mt-[1rem] sm:w-[100%] text-white py-8 sm:py-0 sm:flex sm:flex-col  sm:justify-center">
            <div className="container mx-auto flex flex-wrap justify-around">
                <div className="w-full sm:container mb-4 sm:mb-0 text-center">
                    <h3 className="sm:hidden text-xl font-semibold mb-2 text-primary">{about.title}</h3>
                    <h4 className="text-sm mb-2">{about.subtitle}</h4>
                    <p className="text-sm">Servicio y Calidad al alcance.</p>
                </div>
                <div className="sm:hidden w-full sm:w-1/3 mb-4 sm:mb-0 text-center">
                    <h3 className="text-xl font-semibold mb-2">Contacto</h3>
                    {about.contact.map(contact => (
                        <a
                            key={contact.id}
                            href={contact.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center mb-2"
                            style={{color: contact.color}}
                        >
                            <contact.icon className="mr-2" /> {contact.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 sm:pt-0 text-center">
                <p className="mt-2">&copy; 2024 Order-Go APP. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
