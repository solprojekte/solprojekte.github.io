import hero from '/hero.png'

export default function Hero() {
  return (
    <div className="hero">
      <img className='hero-image' src={hero} alt="" />
      <div className='fade'></div>
      <div className='hero-text'>
        <h1>Vision & Realität</h1>
        <h2>Gender Equality Today and Onwards</h2>
        <p>Wir möchten die Anerkennung der Geschlechtergleichstellung auf lokaler und globaler Ebene fördern. Unsere Mission ist es, das Bewusstsein für die bestehenden Ungleichheiten zu schärfen und zur Lösung beizutragen. Mit dieser Webseite wollen wir einen zentralen Überblick und fundierte Informationen zum Thema Geschlechtergleichstellung bieten.</p>
      </div>
    </div>
  )
}