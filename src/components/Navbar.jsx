import logo from '../assets/vms-logo.png'

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
                <a href="#home">
                    <img src={logo} alt="Logo VMS" className="h-15" />
                </a>
                <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
                    <a href="#nosotros" className="hover:text-[#ba3939] transition-colors">NOSOTROS</a>
                    <a href="#servicios" className="hover:text-[#ba3939] transition-colors">SERVICIOS</a>
                    <a href="#clientes" className="hover:text-[#ba3939] transition-colors">CLIENTES</a>
                    <a href="#contacto" className="hover:text-[#ba3939] transition-colors">CONTACTO</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
