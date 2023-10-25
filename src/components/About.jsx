import "../styles/About.css"

export const About = () => {
  return (
    <div className="about">
      <LeftPhotos />
      <Content />
      <RightPhotos />
      </div>
  )
}

const LeftPhotos = () => {
  return (
    <div className="about-photos">
      <div className="about-photo left1">1</div>
      <div className="about-photo left2">2</div>
      <div className="about-photo left3">3</div>
    </div>
  )
}

const Content = () => {
  return (
    <div className="about-content">
      <h2 className="about-title">Punto Alem</h2>
      <p className="about-text">Nos dedicamos a la organización de eventos sociales y corporativos, con una trayectoria de más de 20 años de experiencia.
        Ofrecemos un servicio integral, de calidad y personalizado, respaldado por una organización sólida y comprometida que garantiza seguridad y tranquilidad para que nuestros clientes puedan disfrutar de su evento sin preocuparse por nada.
        Nos caracterizamos por la búsqueda constante de propuestas innovadoras, poniendo a disposición nuestra creatividad, responsabilidad y experiencia.</p>
    </div>
  )
}

const RightPhotos = () => {
  return (
    <div className="about-photos">
    <div className="about-photo right1">1</div>
    <div className="about-photo right2">2</div>
    <div className="about-photo right3">3</div>
  </div>
  )
}
