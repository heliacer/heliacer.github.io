import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <a onClick={() => window.open('https://github.com/heliacer')}>
          <FontAwesomeIcon icon={faGithub}/>
          <p className="pc">Github</p>
        </a>
        <a onClick={() => window.open('https://discord.gg/DA4mBJX8nb')}>
          <FontAwesomeIcon icon={faDiscord}/>
          <p className="pc">My Community</p>
        </a>
        <a onClick={() => window.open('mailto:heliacer35@gmail.com')}>
          <FontAwesomeIcon icon={faEnvelope}/>
          <p className="pc">Email Me</p>
        </a>
      </div>
      <p>© 2024 Heliacer</p>
      <p>Made with ❤️ using React & Vite</p>
    </footer>
  );
}