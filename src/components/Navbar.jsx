import styles from '../styles/Navbar.module.css'
import Logo from '../assets/Logo.png'

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}><img src={Logo} alt="" /></span>
      <nav >
      <ul className={styles.navList}>
        <li><a href="#inicio">INICIO</a></li>
        <li><a href="#nosotros">NOSOTROS</a></li>
        <li><a href="#sociales">SOCIALES</a></li>
        <li><a href="#corporativos">CORPORATIVOS</a></li>
        <li><a href="#catering">CATERING</a></li>
        <li><a href="#contacto">CONTACTO</a></li>
      </ul>
      </nav>
    </header>
  )
}
