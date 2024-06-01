import Navigation from './ui/navigation';
import { GlowBallRows } from './ui/globall';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import Topic from './ui/topic';
import { about, backend_expertise, frontend_expertise, history1,history2, projects } from './assets/text';
import Footer from './ui/footer';
import CustomCursor from './ui/cursor';
import { ScratchProjects } from './ui/projects';
import BarChart from './ui/chart';

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
      <GlowBallRows count={5} distance={1000} radius={100} />
      <div className='content'>
        <Hero />
        <Topic name='about'>
          {about}
        </Topic>
        <Topic name='expertise'>
          {frontend_expertise}
          <button>cool button</button>
          <BarChart />
          <input type="text" placeholder='dummy components' />
          {backend_expertise}
        </Topic>
        <Topic name='projects'>
          {projects}
        </Topic>
        <Topic name='history'>
          {history1}
          <ScratchProjects />
          {history2}
        </Topic>
      </div>
      <Footer />
    </>
  );
}
