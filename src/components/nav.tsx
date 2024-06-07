import { useState, useEffect } from 'react';
import Logo from '/logo.svg';
import { animateScroll as scroll } from 'react-scroll';

export default function Nav() {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsOnTop(window.scrollY <= 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={isOnTop ? '' : 'scrolled'}>
      <div className='site-header' onClick={() => scroll.scrollToTop()}>
        <img className='logo-image' src={Logo} alt="Logo" />
        <h2>GETO</h2>
      </div>
    </nav>
  );
}
