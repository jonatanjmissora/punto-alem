import heroImg from '../assets/heroImg.jpg'
import styles from '../styles/Catering.module.css'

export const Catering = () => {
  return (
    <>
      <article className={styles.catering}>
        <div className={styles.wrapper}>
          <div className={styles.text_container}>
            <h3>Catering único y especial</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id a
              nobis, velit provident quas saepe aspernatur pariatur possimus
              cupiditate? Error aliquam quo nobis repellendus fugiat laborum!
              Asperiores magnam ad maiores accusantium libero mollitia
              doloremque corporis! Temporibus sequi ea dolores optio vero,
              necessitatibus, nesciunt, eveniet maxime harum molestias eligendi
              fuga provident.
            </p>
          </div>
        </div>
        <img className={styles.image} src={heroImg} alt="" />
      </article>
      <article>
        <div className={styles.row}>
          <img className={styles.image_row} src={heroImg} alt="" />
          <h2>Lorem</h2>
        </div>

        <div className={styles.row}>
          <h2>Lorem</h2>
          <img className={styles.image_row} src={heroImg} alt="" />
        </div>

        <div className={styles.row}>
          <img className={styles.image_row} src={heroImg} alt="" />
          <h2>Lorem</h2>
        </div>
      </article>
    </>
  )
}
