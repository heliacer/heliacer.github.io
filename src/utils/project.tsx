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
        <FontAwesomeIcon icon={faArrowUpRightFromSquare}/> {name}
      </div>
      <em>{description}</em>
    </a>
  );
}