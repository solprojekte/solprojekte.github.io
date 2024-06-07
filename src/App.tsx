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
      <button>press me</button>
    </>
  )
}