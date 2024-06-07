import Hero from './components/hero'
import Nav from './components/nav'
import geto from '/geto.png'
import './index.css'
import { vision } from './assets/content'
import Topic from './components/topic'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <img src={geto} className='geto' alt="" />
      <div className='content'>
        <Topic id='vision' title='Unsere Vision'>{vision}</Topic>
        <button>Test</button>
      </div>
    </>
  )
}