import Hero from './components/hero'
import Nav from './components/nav'
import './index.css'
import { bildung, gender_pay_gap, gesetze_diskriminierung, gesundheit_rechte, initiativen, internationale_bemühungen, karrierechancen, politische_teilhabe, tradition_kultur, umfrage_überblick, vision, wirtschaft, zitat1, zitat2 } from './assets/content'
import Topic from './components/topic'
import { Charts } from './assets/charts'
import Footer from './components/footer'


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
              <li><strong>Erste Frage:</strong> Sind die zwei Geschlechter weltweit gleichgestellt?</li>
              <li><strong>Zweite Frage:</strong>Sind die zwei Geschlechter in der Schweiz gleichgestellt?</li>
              <li><strong>Dritte Frage:</strong>Welches Geschlecht ist in der Gesellschaft der Schweiz höher angesehen?</li>
            </ul>
            <h4>Antworten der Schülerinnen und Schüler:</h4>
            <Charts />
            <br />
            <em>Es wurden 12 Personen anonym befragt.</em>
            {zitat1}
            {zitat2}
          </Topic>
          <Topic id='weltweit' title='Geschlechterungleichheit Weltweit'>
            <h4>Bildung</h4>
            {bildung}
            <h4>Wirtschaft</h4>
            {wirtschaft}
            <h4>Gesundheit & Rechte</h4>
            {gesundheit_rechte}
            <h4>Traditionelle Rollen & Normen</h4>
            {tradition_kultur}
            <h4>Internationale Bemühungen</h4>
            {internationale_bemühungen}
          </Topic>
          <Topic id='politik-recht' title='Politik & Recht'>
            <h4>Politische Teilhabe</h4>
            {politische_teilhabe}
            <h4>Gesetze & Diskriminierung</h4>
            {gesetze_diskriminierung}
          </Topic>
          <Topic id='schweiz' title='Geschlechterungleichheit in der Schweiz'>
            <h4>Gender Pay Gap</h4>
            {gender_pay_gap}
            <h4>Karrierechancen</h4>
            {karrierechancen}
            <h4>Initiativen</h4>
            {initiativen}
          </Topic>
        </div>
      </div>
      <Footer />
    </>
  )
}