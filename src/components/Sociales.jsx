import heroImg from '../assets/heroImg.jpg'
import styles from '../styles/Sociales.module.css'

export const Sociales = () => {
  return (
    <section className={styles.sociales} id="sociales">
      <img className={styles.image} src={heroImg} alt="" />
      <div className={styles.text_container}>
        <h3>Sociales</h3>
        <p>Punto Alem es el lugar para vivir tu evento soñado. Podrás disfrutar de las más variadas celebraciones: desde casamientos, fiestas de quince hasta Bar Mitzvah, aniversarios, cumpleaños. Cualquier evento se convierte en un momento lleno de magia.</p>
        <p>El jardín te ofrece un espacio al aire libre y natural, donde podrás respirar aire fresco y disfrutar del verde. Árboles, plantas y  luces crean un ambiente mágico, que hará que tu evento sea inolvidable y muy especial. Ademá contamos con un ambiente especial
ambientado para celebrar bodas.</p>
      </div>
    </section>
  )
}
