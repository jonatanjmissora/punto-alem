import styles from '../styles/Navbar.module.css'
import NavLogo from '../assets/NavLogo.svg'
import { CloseSvg, MenuSvg } from '../assets/icons/Svg'

export const Navbar = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}><img src={NavLogo} alt="" /></span>
      <input type="checkbox" id="hamb" className={styles.hamb}/>
       <label htmlFor="hamb" className={styles.icons}>
        <i className={styles.menu}><MenuSvg /></i>
        <i className={styles.close}><CloseSvg /></i>
      </label>
      <nav >
      <ul className={styles.navList}>
        <li style={{ '--i': '0' }}><a href="#inicio">INICIO</a></li>
        <li style={{ '--i': '1' }}><a href="#nosotros">NOSOTROS</a></li>
        <li style={{ '--i': '2' }}><a href="#sociales">SOCIALES</a></li>
        <li style={{ '--i': '3' }}><a href="#corporativos">CORPORATIVOS</a></li>
        <li style={{ '--i': '4' }}><a href="#catering">CATERING</a></li>
        <li style={{ '--i': '5' }}><a href="#contacto">CONTACTO</a></li>
      </ul>
      </nav>
      {/*  */}
    </header>
  )
}
