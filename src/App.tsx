import Navigation from './ui/navigation';
import { GlowBallRows } from './ui/misc';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import Topic from './ui/topic';
import { about, backend_expertise, frontend_expertise } from './assets/text';

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
      <div className='content'>
        <Hero />
        <Topic name='about'>
          {about}
          {frontend_expertise}
          {backend_expertise}
        </Topic>
        <Topic name='expertise'>
          {about}
        </Topic>
        <Topic name='projects'>
          {about}
        </Topic>
        <Topic name='history'>
          {about}
        </Topic>
      </div>
    </>
  );
}
