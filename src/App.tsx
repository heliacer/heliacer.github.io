import Navigation from './ui/navigation';
import { GlowBallRows } from './ui/globall';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import Topic from './ui/topic';
import { about, backend_expertise, frontend_expertise, history_journey, history_present, history_start } from './assets/text';
import Footer from './ui/footer';
import CustomCursor from './ui/cursor';
import { ScratchProjects } from './ui/projects';

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
      <GlowBallRows count={4} distance={1000} radius={100} />
      <div className='content'>
        <Hero />
        <Topic name='about'>
          {about}
        </Topic>
        <Topic name='expertise'>
          {frontend_expertise}
          <button>cool button</button>
          <input type="text" placeholder='dummy components' />
          {backend_expertise}
        </Topic>
        <Topic name='projects'>
          {about}
        </Topic>
        <Topic name='history'>
          {history_start}
          <ScratchProjects />
          {history_journey}
          {history_present}
        </Topic>
      </div>
      <Footer />
    </>
  );
}
