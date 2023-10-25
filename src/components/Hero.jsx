import heroImg from '../assets/heroImg.jpg'
import '../styles/Hero.css'

export const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-text'>
      <h1 className='hero-title'>Punto Alem</h1>
      <h4 className='hero-subtitle'>EVENTOS & CATERING</h4>
      </div>
      <div className="hero-img-container">
        <img className="hero-img" src={heroImg} alt="imagen del hero" />
      </div>
    </section>
  )
}
