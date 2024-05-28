import Navigation from './ui/navigation';
import 'aos/dist/aos.css';
import { GlowBallRows } from './ui/misc';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import Topic from './ui/topic';

export default function App() {
  const [onTop, setOnTop] = useState(false);
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
      <Navigation className={onTop ? '' : 'scrolled'}/>
      <GlowBallRows count={6} distance={1000} radius={100} />
      <Hero />
      <Topic name='about' />
      <Topic name='expertise' />
      <Topic name='projects' />
      <Topic name='history'/>
    </>
  );
}
