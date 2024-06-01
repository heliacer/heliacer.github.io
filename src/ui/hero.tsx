interface AnimateIconProps {
  dx: number;
  dy: number;
  rx1: number;
  ry1: number;
  rz1: number;
  rx2: number;
  ry2: number;
  rz2: number;
  name: string;
  size: number;
}


function AnimateIcon({ dx, dy, rx1, ry1, rz1, rx2, ry2, rz2, name, size }: AnimateIconProps) {
  let limit: number = Infinity;
  if (window.innerWidth < 1000) {
    limit = 140;
    size = size * 0.7;
  }

  const applyLimit = (value: number, limit: number) => {
    return Math.max(Math.min(value, limit), -limit);
  };

  const limitedDx = applyLimit(dx, limit);

  const style = {
    '--dx': `${limitedDx}px`,
    '--dy': `${dy}px`,
    '--rx1': `${rx1}deg`,
    '--ry1': `${ry1}deg`,
    '--rz1': `${rz1}deg`,
    '--rx2': `${rx2}deg`,
    '--ry2': `${ry2}deg`,
    '--rz2': `${rz2}deg`,
    '--size': `${size}px`,
    backgroundImage: `url('/${name}.svg')`,
  };

  return <div className="icon-animate" style={style}></div>;
}

const icons = [
  { name: 'js', size: 70, dx: 300, dy: -180, rx1: 300, ry1: 100, rz1: 0, rx2: -20, ry2: -40, rz2: -20 },
  { name: 'html', size: 90, dx: -340, dy: -160, rx1: -100, ry1: 300, rz1: 0, rx2: -40, ry2: 20, rz2: 20 },
  { name: 'css', size: 80, dx: 340, dy: 200, rx1: 120, ry1: 200, rz1: -340, rx2: -20, ry2: -40, rz2: 20 },
  { name: 'react', size: 70, dx: -260, dy: 200, rx1: 300, ry1: -10, rz1: 260, rx2: -20, ry2: -20, rz2: 20 },
  { name: 'python', size: 80, dx: 360, dy: 30, rx1: 0, ry1: -220, rz1: 0, rx2: 20, ry2: -40, rz2: 0 },
  { name: 'rust', size: 70, dx: -360, dy: 50, rx1: 120, ry1: 320, rz1: -10, rx2: 40, ry2: 30, rz2: -30 },
  { name: 'design', size: 80, dx: 60, dy: 220, rx1: 70, ry1: 280, rz1: 0, rx2: 20, ry2: -20, rz2: -5 },
  { name: 'vite', size: 60, dx: -50, dy: -250, rx1: 0, ry1: 360, rz1: 0, rx2: 0, ry2: 20, rz2: 0 }
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
          rz1={icon.rz1}
          rx2={icon.rx2}
          ry2={icon.ry2}
          rz2={icon.rz2}
          size={icon.size}
          name={icon.name}
        />
      ))}
    </div>
  );
}