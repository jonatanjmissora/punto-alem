import heroImg from '../assets/heroImg.jpg'
import PuntoAlemLogo from '../assets/Punto_Alem_Logo.png'
import styles from '../styles/Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero} id="inicio">
        <img className={styles.image} src={heroImg} alt="imagen del hero" />
      <div className={styles.text_container}>
        <img className={styles.logo} src={PuntoAlemLogo} alt="" />
        <h1 className={styles.title}>Punto Alem</h1>
        <h4 className={styles.sub_title}>EVENTOS & CATERING</h4>
        <div className={styles.footer}>
          <span>Salon</span>
          <span>-</span>
          <span>Livings</span>
          <span>-</span>
          <span>Jardin</span>
          <span>-</span>
          <span>Aire Libre</span>
        </div>
      </div>
    </section>
  )
}
