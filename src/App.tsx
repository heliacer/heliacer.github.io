import Navigation from './ui/navigation';
import { GlowBallRows } from './ui/globall';
import { useEffect, useState } from 'react';
import Hero from './ui/hero';
import * as content from './assets/content'
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
          {content.about}
        </Topic>
        <Topic name='expertise'>
          {content.frontend_expertise}
          <BarChart />
          {content.backend_expertise}
          <input type="text" placeholder='Guess the number..' />
        </Topic>
        <Topic name='projects'>
          {content.project1}
          <hr />
          <LogoCard name='vixify'/>
          {content.project2}
          <ProjectImages images={DiscordImages}>
            <em>A little glimpse of the Vixify economy Bot.</em>
          </ProjectImages>
          <p>The bot is still running today, and constantly updated. Try it out on my <a onClick={() => window.open(DISCORD_INVITE)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> community</a> or view its <a onClick={() => window.open(VIXIFY_REPO_URL)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> source code.</a></p>
          <hr />
          <LogoCard name='graplet'/>
          {content.project3}
          <hr />
          {content.project4}
          {content.project5}
          <RepelButton />
        </Topic>
        <Topic name='history'>
          {content.history1}
          <ScratchProjects />
          {content.history2}
          <>
            <img className='image' src="/images/timelapse.png" alt="" />
            <em>Timelapse of Heliacer's logos.</em>
          </>
          <>
            <img className='image' src="/images/graplet_lab.png" alt="" />
            <em>First attempt on designing a interactive web app.</em>
          </>
          {content.history3}
          <Project name='Solprojekte' description='Simple webpage of a school economy project' link={SOL_LINK} image='/images/solsnippet.png' />
          {content.history4}
        </Topic>
        </div>
      </div>
      <Footer />
    </>
  );
}
