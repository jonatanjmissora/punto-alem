import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Description } from './components/Description'
import { Nosotros } from './components/Nosotros'
import { Sociales } from './components/Sociales'
import { Corporativos } from './components/Corporativos'
import { Exclusivos } from './components/Exclusivos'
import { Catering } from './components/Catering'
import { Contacto } from './components/Contacto'
import { Footer } from './components/Footer'

function App () {
  return (
    <main className='App'>
      <Navbar/>
      <Hero />
      <Description />
      <Nosotros />
      <Sociales />
      <Corporativos />
      <Exclusivos />
      <Catering />
      <Contacto />
      <Footer />
    </main>
  )
}

export default App
