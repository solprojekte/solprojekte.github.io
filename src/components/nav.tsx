import Logo from '/logo.svg';


export default function Nav() {
  return (
    <nav>
      <img className='logo-image' src={Logo} alt="" />
    </nav>
  )
}