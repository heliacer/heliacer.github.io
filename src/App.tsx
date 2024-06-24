import Navigation from './ui/navigation';
import { GlowBallRows } from './utils/globall';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import Footer from './ui/footer';
import CustomCursor from './utils/cursor';
import Paragraph from './utils/paragraph';
import { aboutMe } from './content';

import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


export default function App() {
  const [onTop, setOnTop] = useState(true);
    useEffect(() => {
    const onTopHandler = () =>{
      if (window.scrollY > 0) {
        setOnTop(false);
      } else {
        setOnTop(true);
      }
    }
    window.addEventListener('scroll', onTopHandler);
    return () => window.removeEventListener('scroll',onTopHandler);
  });
  return (
    <>
      <CustomCursor />
      <Navigation className={onTop ? '' : 'scrolled'}/>
      <GlowBallRows count={7} distance={1000} radius={100} />
      <Hero />
      <a onClick={() => scroll.scrollTo(800)} className='chevron'>
        <FontAwesomeIcon icon={faChevronDown}/>
      </a>
      <main>
        <Paragraph id='about' text={aboutMe}/>
      </main>
      <Footer />
    </>
  );
}
