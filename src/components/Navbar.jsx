import styles from '../styles/Navbar.module.css'

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <span>Punto Alem</span>
      <nav >
      <ul className={styles.navList}>
        <li>INICIO</li>
        <li>NOSOTROS</li>
        <li>SERVICIOS</li>
        <li>GALERIA</li>
        <li>CONTACTO</li>
      </ul>
      </nav>
    </header>
  )
}
