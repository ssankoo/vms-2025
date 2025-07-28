import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

function Contacto() {
    return (
        <section id="contacto" className="bg-[#BA3A39] text-white py-12 px-6">
            <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Ponete en contacto para certificar
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12 text-lg">
                <a
                    href="https://wa.me/5491160436397"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 hover:scale-105 transition-transform"
                >
                    <FaWhatsapp className="text-2xl" />
                    <span>+54 9 11 6043-6397</span>
                </a>
                <a
                    href="mailto:vera@vms.com.ar"
                    className="flex items-center space-x-3 hover:scale-105 transition-transform"
                >
                    <FaEnvelope className="text-2xl" />
                    <span>vera@vms.com.ar</span>
                </a>
            </div>
        </section>
    )
}

export default Contacto
