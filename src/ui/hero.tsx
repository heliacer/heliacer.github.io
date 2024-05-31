interface AnimateIconProps {
  dx: number;
  dy: number;
  rx1: number;
  ry1: number;
  rx2: number;
  ry2: number;
  name: string;
  size: number;
}


function AnimateIcon({ dx, dy,rx1,ry1,rx2,ry2, name, size} : AnimateIconProps){
  const style = {
    '--dx': `${dx}px`,
    '--dy': `${dy}px`,
    '--rx1': `${rx1}deg`,
    '--ry1': `${ry1}deg`,
    '--rx2': `${rx2}deg`,
    '--ry2': `${ry2}deg`,
    '--size': `${size}px`,
    backgroundImage: `url('/${name}.svg')`,
  };

  return <div className={`icon-animate`} style={style}></div>;
};


const icons = [
  { name: 'js',size: 50, dx: 180, dy: -120, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'html',size: 70, dx: -220, dy: -120, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'css',size: 60, dx: 220, dy: 140, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'react',size: 50, dx: -140, dy: 170, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'python',size: 70, dx: 270, dy: 20, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'rust',size: 50, dx: -270, dy: 70, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'design',size: 60, dx: 70, dy: 170, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
  { name: 'vite',size: 50, dx: -40, dy: -170, rx1: 0, ry1: 0, rx2: 0, ry2: 0},
];


export default function Hero() {  
  return(
    <div className="hero">
      <div className="logo-animate"></div>
      {icons.map(icon => (
        <AnimateIcon
          key={icon.name}
          dx={icon.dx}
          dy={icon.dy}
          rx1={icon.rx1}
          ry1={icon.ry1}
          rx2={icon.rx2}
          ry2={icon.ry2}
          size={icon.size}
          name={icon.name}
        />
      ))}
    </div>
  );
}