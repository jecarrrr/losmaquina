import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Servicios from '@/components/Servicios'
import Ofertas from '@/components/Ofertas'
import Nosotros from '@/components/Nosotros'
import Galeria from '@/components/Galeria'
import Contacto from '@/components/Contacto'
import Footer from '@/components/Footer'
import WhatsappButton from '@/components/WhatsappButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ofertas />
      <Servicios />
      <Nosotros />
      <Galeria />
      <Contacto />
      <Footer />
      <WhatsappButton />
    </main>
  )
}