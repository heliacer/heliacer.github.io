interface ProjectProps {
  name: string;
  description: string;
  link: string;
  image: string;

}



function Project({ name, description, link, image}: ProjectProps) {
  return (
    <a onClick={() => window.open(link)} className="project">
      <img draggable="false" src={image} alt={name} className="project-background-image"/>
      <p>{name}</p>
      <em>{description}</em>
    </a>
  );
}


export function ScratchProjects() {
  return (
    <div className='scratch-projects'>
      <Project
        name='- Adventure -'
        description='A tile scrolling platformer.'
        link='https://scratch.mit.edu/projects/562780246/'
        image='https://uploads.scratch.mit.edu/get_image/project/562780246_800x360.png'
      />
      <Project
        name='- Space -'
        description='A shooter game, with a chat system.'
        link='https://scratch.mit.edu/projects/691658884/'
        image='https://uploads.scratch.mit.edu/get_image/project/691658884_800x360.png'
      />
      <Project
        name='Cloud Multiplayer'
        description='A game using cloud variables'
        link='https://scratch.mit.edu/projects/578469753/'
        image='https://uploads.scratch.mit.edu/get_image/project/578469753_800x360.png'
      />
      <Project
        name='Te-0'
        description='Programming inside a game.'
        link='https://scratch.mit.edu/projects/621682415/'
        image='https://uploads.scratch.mit.edu/get_image/project/621682415_800x360.png'
      />
    </div>
  );
}