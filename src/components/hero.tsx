import hero from '/hero.png'

export default function Hero() {
  return (
    <div className="hero">
      <img className='hero-image' src={hero} alt="" />
      <div className='fade'></div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, obcaecati ipsam reprehenderit aut similique soluta, libero quo sit rem, vitae sint totam deserunt dolores doloribus sunt illum suscipit numquam itaque.</p>
    </div>
  )
}