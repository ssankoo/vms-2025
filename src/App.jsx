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
        <section id="nosotros">
          <Nosotros />
        </section>
        <Separador imagen={"/separador.png"} />
        <section id="normas">
          <Normas />
        </section>
        <Separador imagen={"/separador.png"} />
        <section id="clientes">
          <Clientes />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </main>
    </div>
  )
}

export default App
