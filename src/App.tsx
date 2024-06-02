import Navigation from './ui/navigation';
import { GlowBallRows } from './ui/globall';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import Topic from './ui/topic';
import { about, backend_expertise, frontend_expertise, history1,history2, history3, history4, projects1, projects2 } from './assets/text';
import { DISCORD_INVITE } from './ui/footer';
import Footer from './ui/footer';
import CustomCursor from './ui/cursor';
import { ScratchProjects, Project} from './ui/projects';
import BarChart from './ui/chart';
import RepelButton from './ui/repelbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const SOL_LINK = 'https://solprojekte.github.io/versicherungen'

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
      <div className='main'>
        <Hero />
        <div className='content'>
        <Topic name='about'>
          {about}
        </Topic>
        <Topic name='expertise'>
          {frontend_expertise}
          <BarChart />
          {backend_expertise}
          <input type="text" placeholder='Guess the number..' />
        </Topic>
        <Topic name='projects'>
          {projects1}
          <hr />
          {projects2}
          <p>The bot is still running today, and constantly updated. Try it out on my <a onClick={() => window.open(DISCORD_INVITE)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> community</a> or view its <a onClick={() => window.open(DISCORD_INVITE)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> source code.</a></p>
          <RepelButton />
        </Topic>
        <Topic name='history'>
          {history1}
          <ScratchProjects />
          {history2}
          <>
            <img className='image' src="/timelapse.png" alt="" />
            <em>Timelapse of Heliacer's logos.</em>
          </>
          <>
            <img className='image' src="/graplet_lab.png" alt="" />
            <em>First attempt on designing a interactive web app.</em>
          </>
          {history3}
          <Project name='Solprojekte' description='Simple webpage of a school economy project' link={SOL_LINK} image='/solsnippet.png' />
          {history4}
        </Topic>
        </div>
      </div>
      <Footer />
    </>
  );
}
