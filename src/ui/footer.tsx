import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const DISCORD_INVITE = 'https://discord.gg/DA4mBJX8nb';

export default function Footer() {
  return (
    <footer id="contact-me">
      <p>© 2024 Heliacer</p>
      <em>Made with ❤️ using React & Vite</em>
      <a onClick={() => window.open('https://github.com/heliacer')}>
        <FontAwesomeIcon icon={faGithub}/>
        <p className="pc">Github</p>
      </a>
      <a onClick={() => window.open(DISCORD_INVITE)}>
        <FontAwesomeIcon icon={faDiscord}/>
        <p className="pc">My Community</p>
      </a>
      <a onClick={() => window.open('mailto:heliacer35@gmail.com')}>
        <FontAwesomeIcon icon={faEnvelope}/>
        <p className="pc">Email Me</p>
      </a>
    </footer>
  );
}
