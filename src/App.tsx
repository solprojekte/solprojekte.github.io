import Hero from './components/hero'
import Nav from './components/nav'
import './index.css'
import { bildung, gesundheit_rechte, umfrage_bevor, umfrage_überblick, vision, wirtschaft } from './assets/content'
import Topic from './components/topic'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className='wrapper'>
        <div className='content'>
          <Topic id='vision' title='Unsere Vision'>{vision}</Topic>
          <Topic id='umfrage' title='Die Umfrage'>
            <h4>Überblick:</h4>
            {umfrage_überblick}
            <ul>
              <li>Sind die zwei Geschlechter weltweit gleichgestellt?</li>
              <li>Sind die zwei Geschlechter in der Schweiz gleichgestellt?</li>
              <li>Welches Geschlecht ist in der Gesellschaft der Schweiz höher angesehen?</li>
            </ul>
            {umfrage_bevor}
          </Topic>
          <Topic id='weltweit' title='Geschlechterungleichheit Weltweit'>
            <h4>Bildung</h4>
            {bildung}
            <h4>Wirtschaft</h4>
            {wirtschaft}
            <h4>Gesundheit & Rechte</h4>
            {gesundheit_rechte}
          </Topic>
          <button>Test</button>
        </div>
      </div>
    </>
  )
}