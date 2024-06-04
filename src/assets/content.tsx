import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCaretDown } from "@fortawesome/free-solid-svg-icons";


const ELOSTACK_INVITE = 'https://discord.gg/eyXZx6bbgj';

export const about = 
`I'm a full-stack developer with four years of coding experience,
currently studying at KUS Gymnasium in 🇨🇭 Switzerland.
My passion for technology drives me to constantly learn new technologies and refine my skills.
What started as a hobby has evolved into a potential career path that I am deeply enthusiastic about. 🚀

I go by the alias Heliacer,
a name I created purely for its uniqueness, randomness,
and the fact that it's easy to remember. 😊

In my free time, I enjoy building projects and experimenting with new ideas.
When I'm not coding, you'll likely find me studying, watching anime, or playing the piano. 🎹

I love to challenge myself with creative projects, often exploring the boundaries of what I can do with code.
Each project is an opportunity to learn and grow. 🌱
Looking ahead, I aim to leverage my skills and passion to contribute to innovative projects that can make a difference.
I'm excited about the future and the endless possibilities it holds in our tech world. 🌌
`;

export const frontend_expertise = 
`Frontend development is where I really shine, including HTML, CSS, and JavaScript.
React and Vite.js are my preferred tools for rapid development.
While still mastering TypeScript, I've already integrated it seamlessly into my React projects.`;

export const backend_expertise =
`On the backend, I specialize in Node.js with a focus on Nextjs.
Python is my go-to language, especially for projects involving API wrappers.

Familiar with database management using IndexedDB SQL and SQLite3,
with a fondness for client-side data storage solutions like IndexedDB.
Currently expanding my skill set with Rust and exploring Electron and Tauri for future projects. 🛸`;

export const history1 = 
`It all started when I was a young pupil, attending a Scratch workshop at school.
I was hooked, creating my account, fox_creations, and diving into the world of visual block programming.
Instead of gaming, Scratch became my fixation, leading me to gain over 400 followers and create loads of games.`;

export const history2 =
`A year later, I got into Python, and started dabbling in digital art for UI and logo designs.
I also started with Discord, creating my own server and apps, mainly for organizing in-game competitions,
as a self-taught coder, learning from online resources and experimenting with new ideas.
This period was crucial in shaping my coding style and problem-solving skills.
`;

export const history3 =
`I got curious once about web development and had this wild idea for a Discord app dashboard.
with no clue about hosting costs or GitHub, but I pushed through, learning frontend and backend development along the way.`;
export const history4 =
`It continued with frameworks like React and Next.js, and I even built a website for a school project.
Nowadays, I'm still on this journey, always looking to level up my skills and become a better developer than I was yesterday..`;

export const project1 =
`My first ever Projects weren't really that well documented, but I've come a long way since then.
It was a competition bot for Discord, and it was a mess of spaghetti code. So I'll keep this one brief. 😅`;
export const project2 =
`Later on, I created a Discord bot for my server, which was a huge success. It was a great learning experience,
and I'm proud of how it turned out. The main feature was a economy system, which was a hit among my friends.
I remember how I used to spend hours debugging and fixing bugs, while my friends exploited them. 😆`;

export const project3 =
`The first web project idea came to mind when I thought about how hard it was for me to code Discord apps back then. 
My goal was to create a platform where users could easily create and manage Discord apps without any coding knowledge.
I started with the frontend, and although it was a mess, I learned a lot from it.

To provide beautiful visual programming for users, I used Google Blockly,
which means they don't need to write a single line of code. For a multi-window layout, I used Golden Layout,
and it proved to be worth it despite the confusing documentation.

Most of the initial work was done in vanilla JS, but I'm planning to rewrite it in React soon.
The site is free to use, hosted on GitHub Pages in a static environment.
This choice eliminated the need for paid hosting, extra signups, or logins, which I found appealing.`;



export const project4 =
`Overall, I haven't had many projects yet, but I'm proud of the ones I've gotten pretty far with.
I'm currently exploring new technologies, including Rust & Electron while also improving my skills in React, Next.js, and Vite.js.
This about me website is my first React project, and I'm proud of how far I've come. 😊`;

export const project5 = <p>
  If you have any project ideas or want to collaborate, feel free to <Link offset={-80} smooth spy to="contact-me">reach me out <FontAwesomeIcon icon={faCaretDown} /></Link><br />
  I'm always open to new opportunities and challenges. 🚀
  <br /><br />
  I'm also a part of the <a onClick={() => window.open(ELOSTACK_INVITE)}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/> Elostack community</a>     ,
  which is a start up that aims to provide a platform to create projects and share them with others.
  We're the first ones to test the platform, and actively use it 🤗 
</p>