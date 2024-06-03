import Navigation from './ui/navigation';
import { GlowBallRows } from './ui/globall';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import {about, backend_expertise, frontend_expertise, history1,history2, history3, history4, project1, project2, project3, } from './assets/text'
import { DISCORD_INVITE } from './ui/footer';
import Footer from './ui/footer';
import CustomCursor from './ui/cursor';
import { ScratchProjects, Project, ProjectImages, LogoCard} from './ui/projects';
import BarChart from './ui/chart';
import RepelButton from './ui/repelbutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Topic from './ui/topic';

const SOL_LINK = 'https://solprojekte.github.io/versicherungen'
const VIXIFY_REPO_URL = 'https://github.com/heliacer/Vixify'

export default function App() {
  const [onTop, setOnTop] = useState(true);
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const DiscordImages = prefersDarkScheme ? ['coins-dark.png','steal-dark.png'] : ['coins-light.png','steal-light.png'];
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
          {project1}
          <hr />
          <LogoCard name='vixify'/>
          {project2}
          <ProjectImages images={DiscordImages}>
            <em>A little glimpse of the Vixify economy Bot.</em>
          </ProjectImages>
          <p>The bot is still running today, and constantly updated. Try it out on my <a onClick={() => window.open(DISCORD_INVITE)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> community</a> or view its <a onClick={() => window.open(VIXIFY_REPO_URL)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> source code.</a></p>
          <hr />
          <LogoCard name='graplet'/>
          {project3}
          <RepelButton />
        </Topic>
        <Topic name='history'>
          {history1}
          <ScratchProjects />
          {history2}
          <>
            <img className='image' src="/images/timelapse.png" alt="" />
            <em>Timelapse of Heliacer's logos.</em>
          </>
          <>
            <img className='image' src="/images/graplet_lab.png" alt="" />
            <em>First attempt on designing a interactive web app.</em>
          </>
          {history3}
          <Project name='Solprojekte' description='Simple webpage of a school economy project' link={SOL_LINK} image='/images/solsnippet.png' />
          {history4}
        </Topic>
        </div>
      </div>
      <Footer />
    </>
  );
}
