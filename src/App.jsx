import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Nosotros from './components/Nosotros'
import Separador from './components/Separador'
import Normas from './components/Normas'
import Clientes from './components/Clientes'
import Contacto from './components/Contacto'

function App() {
  return (
    <div className=''>
      <Navbar />
      <main className="scroll-smooth">
        <section id="home">
          <Hero />
        </section>
        <section id="nosotros" className='scroll-mt-20'>
          <Nosotros />
        </section>
        <Separador imagen={"/separador.png"} />
        <section id="normas" className='scroll-mt-20'>
          <Normas />
        </section>
        <Separador imagen={"/separador.png"} />
        <section id="clientes" className='scroll-mt-20'>
          <Clientes />
        </section>
        <section id="contacto" className='scroll-mt-20'>
          <Contacto />
        </section>
      </main>
    </div>
  )
}

export default App
