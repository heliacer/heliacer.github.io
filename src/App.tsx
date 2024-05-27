import './styles/App.css';
import Navigation from './ui/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
      <Navigation />
      <p>Work in Progress</p>
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
      <Topic />
    </>
  );
}
