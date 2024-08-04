import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export interface Contact {
  id: number;
  name: string;
  url: string;
  icon: IconType;
  color: string;
}

export interface Aboutprops {
  title: string;
  subtitle: string;
  paragraph: string;
  contact: Contact[];
}
export interface ServiceProps {
  images: string[];
}

export interface DataProps {
  about: Aboutprops;
  service: ServiceProps;
}

export const data: DataProps = {
  about: {
    title: "OrderGO Service",
    subtitle:
      "Transforma la experiencia de tus clientes con menús digitales innovadores.",
    paragraph:
      "En OrderGO, ofrecemos un servicio completo de creación de menús digitales accesibles a través de códigos QR. Ideal para empresas emprendedoras que buscan mejorar la experiencia del cliente, nuestros menús permiten una visualización fácil y filtrada de productos, adición de artículos al carrito, comentarios, opciones de entrega y pagos integrados. Todo esto se complementa con el envío de detalles del pedido a través de WhatsApp, facilitando la gestión y el seguimiento de órdenes.",
    contact: [
      {
        id: 0,
        name: "WhatsApp",
        url: "https://wa.me/4124676968",
        icon: FaWhatsapp,
        color: "#25D366",
      },
      {
        id: 1,
        name: "Instagram",
        url: "https://www.instagram.com/order-go",
        icon: FaInstagram,
        color: "#E1306C",
      },
    ],
  },
  service: {
    images: [
      "/ordergo-app/digital-nike/digital-nike.jpg",
      "/ordergo-app/digital-nike/digital-nike-1.jpg",
      "/ordergo-app/digital-nike/digital-nike-2.jpg",
      "/ordergo-app/digital-nike/digital-nike-3.jpg",
      "/ordergo-app/digital-plus/digital-plus.jpg",
      "/ordergo-app/digital-plus/digital-plus-1.jpg",
      "/ordergo-app/digital-plus/digital-plus-2.jpg",
      "/ordergo-app/digital-plus/digital-plus-3.jpg",
      "/ordergo-app/digital-plus/digital-plus-4.jpg",
      "/ordergo-app/digital-plus/digital-plus-5.jpg",
      "/ordergo-app/digital-plus/digital-plus-6.jpg",
      "/ordergo-app/licovery/licovery.jpg",
      "/ordergo-app/licovery/licovery-1.jpg",
      "/ordergo-app/licovery/licovery-2.jpg",
      "/ordergo-app/mostaza/mostaza.jpg",
      "/ordergo-app/mostaza/mostaza-2.jpg",
      "/ordergo-app/mostaza/mostaza-3.jpg",
    ],
  },
};

export default data;
