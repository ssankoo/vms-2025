function Clientes() {
    const clientes = [
        { nombre: "Assistance", url: "" },
        { nombre: "Back SA", url: "https://back.com.ar/" },
        { nombre: "Bombas Nir", url: "https://bombasnir.com.ar/" },
        { nombre: "Ciarec", url: "https://web.ciarec.com.ar/" },
        { nombre: "Fite", url: "https://www.fitetermometros.com.ar/" },
        { nombre: "Glan SRL", url: "https://glansrl.net/" },
        { nombre: "Industrias Tecnológicas", url: "https://www.deltagroup.com" },
        { nombre: "Lasarte Hermanos", url: "https://www.lasarte.com.ar/" },
        { nombre: "Microclar", url: "https://www.microclar.com/" },
        { nombre: "Nildatex", url: "https://www.nildatex.com.ar/" },
        { nombre: "Noetec", url: "https://noetec.com.ar/en/home/" },
        { nombre: "Optimaq", url: "https://www.optimaq.net/" },
        { nombre: "Textil Valerio", url: "https://textilvalerio.com.ar/" },


    ]

    return (
        <section id="clientes" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">Algunos de nuestros clientes</h1>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-lg text-gray-700 font-medium">
                    {clientes.map((cliente, index) => (
                        <li key={index}>
                            <a
                                href={cliente.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#ba3939] transition-colors underline underline-offset-4"
                            >
                                {cliente.nombre}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Clientes
