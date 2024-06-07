import Hero from './components/hero'
import Nav from './components/nav'
import geto from '/geto.png'
import './index.css'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <img src={geto} className='geto' alt="" />
      <div className='content'>
        <h3 id='vision'>Unsere Vision</h3>
        <p>Wir möchten die Anerkennung der Geschlechtergleichstellung auf lokaler und globaler Ebene fördern. Unsere Mission ist es, das Bewusstsein für die bestehenden Ungleichheiten zu schärfen und zur Lösung beizutragen. Mit dieser Webseite wollen wir einen zentralen Überblick und fundierte Informationen zum Thema Geschlechtergleichstellung bieten.</p>
        <button>press me</button>
      </div>
    </>
  )
}