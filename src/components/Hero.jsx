import heroImg from '../assets/heroImg.jpg'
import styles from '../styles/Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero}>
        <img className={styles.image} src={heroImg} alt="imagen del hero" />
      <div className={styles.text_container}>
      <h1 className={styles.title}>Punto Alem</h1>
      <h4 className={styles.sub_title}>EVENTOS & CATERING</h4>
      <h3>Salon - Livings - Jardin - Aire Libre</h3>
      </div>
    </section>
  )
}
