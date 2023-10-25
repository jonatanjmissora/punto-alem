import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <header className='header'>
      <span>Punto Alem</span>
      <nav >
      <ul className='navList'>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Servicios</li>
        <li>Galeria</li>
        <li>Contacto</li>
      </ul>
      </nav>
    </header>
  )
}
