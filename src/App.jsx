import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Constact } from './components/Constact'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Services } from './components/Services'

function App () {
  return (
    <div className='App'>
      <Navbar/>
      <Hero />
      <About />
      {/*
      <Services />
      <Gallery />
      <Constact />
      <Footer/>
       */}
    </div>
  )
}

const Space = () => {
  return (
    <div className="space"></div>
  )
}

export default App
