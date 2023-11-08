import heroImg from '../assets/heroImg.jpg'
import styles from '../styles/Corporativos.module.css'

export const Corporativos = () => {
  return (
    <article className={styles.corporativos}>
      <div className={styles.wrapper}>
        <img className={styles.image} src={heroImg} alt="" />
        <div className={styles.text_container}>
          <h3>Corporativos</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id a
            nobis, velit provident quas saepe aspernatur pariatur possimus
            cupiditate? Error aliquam quo nobis repellendus fugiat laborum!
            Asperiores magnam ad maiores accusantium libero mollitia doloremque
            corporis! Temporibus sequi ea dolores optio vero, necessitatibus,
            nesciunt, eveniet maxime harum molestias eligendi fuga provident.
          </p>
        </div>
      </div>
    </article>
  )
}
