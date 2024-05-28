import Navigation from './ui/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GlowBallRows } from './ui/misc';
import { useEffect, useState } from 'react';
import { capitalize } from '@mui/material';

function Topic({name} : {name: string}) {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div id={name} className="topic" data-aos="fade-up">
      <h1>{capitalize(name)}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam illum exercitationem ullam, similique, eos quis repudiandae harum nesciunt quibusdam maiores impedit? Repudiandae ipsum esse, eligendi dolores nisi est officiis.</p>
    </div>
  );
}

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
      <Topic name='about' />
      <Topic name='expertise' />
      <Topic name='projects' />
      <Topic name='history'/>
      </div>
    </>
  );
}
