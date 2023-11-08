import heroImg from '../assets/heroImg.jpg'
import styles from '../styles/Sociales.module.css'

export const Sociales = () => {
  return (
    <article className={styles.sociales}>
      <img className={styles.image} src={heroImg} alt="" />
      <div className={styles.text_container}>
        <h3>Sociales</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
          labore vel. Velit ducimus repudiandae sit similique ut magni veritatis
          quasi nisi iure sequi expedita ipsa labore commodi id accusamus fuga
          neque omnis ipsam harum, nesciunt quis animi recusandae suscipit.
        </p>
      </div>
    </article>
  )
}
