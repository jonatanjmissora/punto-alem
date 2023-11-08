import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Description } from './components/Description'
import { Nosotros } from './components/Nosotros'
import { Sociales } from './components/Sociales'
import { Corporativos } from './components/Corporativos'
import { Exclusivos } from './components/Exclusivos'
import { Catering } from './components/Catering'
import { Contacto } from './components/Contacto'

function App () {
  return (
    <div className='App'>
      <Navbar/>
      <Hero />
      <Description />
      <Nosotros />
      <Sociales />
      <Corporativos />
      <Exclusivos />
      <Catering />
      <Contacto />
    </div>
  )
}

const Space = () => {
  return (
    <div className="space"></div>
  )
}

export default App
