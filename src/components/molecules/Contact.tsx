import data,{type Contact} from "../../constant/data";

const Contact=() => {
    return (
        <ul className=" flex flex-row justify-center items-center gap-4 border-2 border-primary rounded-lg p-2 ">
            {data.about.contact.map((contact: Contact) => (
                <li key={contact.id}>
                    <a href={contact.url} target="_blank" rel="noopener noreferrer">
                        <contact.icon className="w-7 h-7" style={{color: contact.color}} />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Contact;
