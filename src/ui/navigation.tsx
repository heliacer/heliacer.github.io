import React, { useEffect } from 'react';
import Logo from '/vectors/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, faCube, faFlask, faMeteor, faMugSaucer } from '@fortawesome/free-solid-svg-icons';
import { capitalize } from '@mui/material';
import { Link } from 'react-scroll';

interface NavLinkProps {
  name: string;
  icon: IconDefinition;
}

const NavLink: React.FC<NavLinkProps> = ({ name, icon}) => {
  function hashUpdate() {
    let links = document.querySelectorAll('nav a');
    links.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === window.location.hash) {
        link.classList.add('active');
      }
    });
  }

  useEffect( ()=> {
    window.addEventListener('hashchange',hashUpdate)}
  )
  return (
    window.removeEventListener('hashchange',hashUpdate),
    <Link offset={-100} activeClass="active" smooth spy to={name}>
      <FontAwesomeIcon icon={icon} />
      <p className="pc">{capitalize(name)}</p>
    </Link>
  );
}
export default function Navbar({className} : {className: string}) {
    return (
    <nav className={className}>
        <Link to='hero' smooth spy>
          <img src={Logo} className="logo" alt="Heliacer logo" />
        </Link>
        <NavLink name='about' icon={faMugSaucer}/>
        <NavLink name='expertise' icon={faFlask}/>
        <NavLink name='projects' icon={faCube}/>
        <NavLink name='history' icon={faMeteor}/>
      </nav>
    );     
}