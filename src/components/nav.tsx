import { useState, useEffect, useRef } from 'react';
import Logo from '/logo.svg';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Nav() {
  const [isOnTop, setIsOnTop] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [mouseDownTimeout, setMouseDownTimeout] = useState<number | null>(null);
  const navContents = useRef<HTMLDivElement>(null);
  const burger = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY <= 450);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHeaderClick = () => {
    scroll.scrollToTop();
  };

  const handleMouseDown = () => {
    setIsActive(true);

    const timeout = setTimeout(() => {
      const audio = new Audio('/monkey.mp3');
      audio.play();
    }, 3000);

    setMouseDownTimeout(timeout);
  };

  const handleMouseUp = () => {
    setIsActive(false);

    if (mouseDownTimeout !== null) {
      clearTimeout(mouseDownTimeout);
      setMouseDownTimeout(null);
    }
  };

  const handleBurgerClick = () => {
    if (navContents) {
      navContents.current?.classList.toggle('active');
      burger.current?.classList.toggle('active');
    }
  }

  return (
    <nav className={isOnTop ? '' : 'scrolled'}>
      <div className='burger' onClick={handleBurgerClick} ref={burger}>
        <div className='line1'/>
        <div className='line2'/>
        <div className='line3'/>
      </div>
      <div
        className='site-header'
        onClick={handleHeaderClick}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img className={`logo-image ${isActive ? 'active' : ''}`} src={Logo} alt="Logo" />
        <h2>GETO</h2>
      </div>
      <div className='vr'></div>
      <div className='nav-contents' ref={navContents}>
        <Link to='vision' smooth spy offset={-60}><h3>Vision</h3></Link>
        <div className='sep'/>
        <Link to='umfrage' smooth spy offset={-60}><h3>Umfrage</h3></Link>
        <div className='sep'/>
        <Link to='weltweit' smooth spy offset={-60}><h3>Weltweit</h3></Link>
        <div className='sep'/>
        <Link to='politik-recht' smooth spy offset={-60}><h3>Politik & Recht</h3></Link>
        <div className='sep'/>
        <Link to='schweiz' smooth spy offset={-60}><h3>Schweiz</h3></Link>
      </div>
    </nav>
  );
}
