function Hero() {
    return (
        <section
            id="home"
            className="w-full h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
            style={{ backgroundImage: "url('/hero-vms.png')" }}
        >
            <div className="absolute inset-0 " />

            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-5xl font-bold text-white mb-6">
                    Soluciónes en certificación de normas
                </h1>
                <a
                    href="#nosotros"
                    className="inline-block bg-[#ba3939] hover:bg-red-700 text-white font-semibold py-2 px-5 rounded-lg transition"
                >
                    Conocenos
                </a>
            </div>
        </section>
    )
}

export default Hero
