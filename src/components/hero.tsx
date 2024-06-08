import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hero from '/hero.png'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import {animateScroll as scroll} from 'react-scroll'

export default function Hero() {
  return (
    <div className="hero">
      <img className='hero-image' src={hero} alt="" />
      <div className='fade'></div>
      <div className='hero-text'>
        <h1>Vision & Realität</h1>
        <h2>Gender Equality Today and Onwards</h2>
        <a onClick={() => scroll.scrollTo(830)}><FontAwesomeIcon icon={faArrowDown} size='2x'/></a>
      </div>
    </div>
  )
}