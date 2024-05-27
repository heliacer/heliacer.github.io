import Navigation from './ui/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { GlowBallRows } from './ui/misc';
import { useEffect } from 'react';
import GradientDiv from './ui/gradient';

function Topic() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="topic" data-aos="fade-up">
      <h1>Topic</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima laboriosam illum exercitationem ullam, similique, eos quis repudiandae harum nesciunt quibusdam maiores impedit? Repudiandae ipsum esse, eligendi dolores nisi est officiis.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nihil quidem praesentium consectetur amet dolor tempora nostrum rerum ipsa sed voluptate officia, obcaecati ducimus laboriosam vero iste officiis magni itaque!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora molestias suscipit quo mollitia fuga cupiditate eligendi ab architecto magni accusamus sequi minus ipsa deleniti nisi illum reiciendis, repellendus obcaecati.</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <GradientDiv className = {'pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'}>
        <Navigation />
        <GlowBallRows count={6} distance={1000} radius={100} />
        <p>Work in Progress</p>
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </GradientDiv>
    </>
  );
}
