import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectProps {
  name: string;
  description: string;
  link: string;
  image: string;

}

export function Project({ name, description, link, image}: ProjectProps) {
  return (
    <a className="project" onClick={() => window.open(link)}>
      <img draggable="false" src={image} alt={name} className="project-bg" />
      <div>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
        <p className="icon-text">{name}</p>
      </div>
      <em>{description}</em>
    </a>
  );
}


export function ScratchProjects() {
  return (
    <div className='scratch-projects'>
      <Project
        name='Adventure'
        description='A tile scrolling platformer'
        link='https://scratch.mit.edu/projects/562780246/'
        image='https://uploads.scratch.mit.edu/get_image/project/562780246_800x360.png'
      />
      <Project
        name='Space'
        description='A shooter game'
        link='https://scratch.mit.edu/projects/691658884/'
        image='https://uploads.scratch.mit.edu/get_image/project/691658884_800x360.png'
      />
      <Project
        name='Cloud Multiplayer'
        description='A Cloud Variable Game'
        link='https://scratch.mit.edu/projects/578469753/'
        image='https://uploads.scratch.mit.edu/get_image/project/578469753_800x360.png'
      />
      <Project
        name='Te-0'
        description='Programs inside a game'
        link='https://scratch.mit.edu/projects/621682415/'
        image='https://uploads.scratch.mit.edu/get_image/project/621682415_800x360.png'
      />
    </div>
  );
}