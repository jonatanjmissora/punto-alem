import heroImg from '../assets/heroImg.jpg'
import styles from '../styles/Contacto.module.css'

export const Contacto = () => {
  return (
    <section className={styles.contact}>
      <img className={styles.image} src={heroImg} alt="" />
      <form className={styles.form}>
        <h2>Contacto</h2>
        <div className={styles.row}>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.row}>
          <label htmlFor="">Nombre</label>
          <input type="text" />
        </div>
        <div className={styles.row_last}>
          <label htmlFor="">Nombre</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className={styles.button_container}>
          <button>Enviar</button>
        </div>
      </form>
    </section>
  )
}
