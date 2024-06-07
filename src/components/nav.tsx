import { useState, useEffect } from 'react';
import Logo from '/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Nav() {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY <= 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isActive, setIsActive] = useState(false);

  const handleHeaderClick = () => {
    scroll.scrollToTop();
  };

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <nav className={isOnTop ? '' : 'scrolled'}>
      <div className='site-header' onClick={handleHeaderClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <img className={`logo-image ${isActive ? 'active' : ''}`} src={Logo} alt="Logo" />
        <h2>GETO</h2>
      </div>
      <div className='vr'></div>
      <Link to='vision' smooth spy offset={-100}><h3>Vision</h3></Link>
      <div className='sep'/>
      <Link to='' smooth spy offset={-100}><h3>Umfrage</h3></Link>
      <div className='sep'/>
      <Link to='' smooth spy offset={-100}><h3>Weltweit</h3></Link>
      <div className='sep'/>
      <Link to='' smooth spy offset={-100}><h3>Politik & Recht</h3></Link>
      <div className='sep'/>
      <Link to='' smooth spy offset={-100}><h3>Schweiz</h3></Link>
    </nav>
  );
}
