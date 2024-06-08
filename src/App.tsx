import Hero from './components/hero'
import Nav from './components/nav'
import geto from '/geto.png'
import './index.css'
import { umfrage_bevor, umfrage_überblick, vision } from './assets/content'
import Topic from './components/topic'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <img src={geto} className='geto' alt="" />
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
        <button>Test</button>
      </div>
    </>
  )
}