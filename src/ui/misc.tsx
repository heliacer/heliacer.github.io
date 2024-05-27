interface GlowBallProps {
  right?: number;
  bottom?: number;
  top?: number;
  left?: number;
  radius: number;
}

function GlowBall({right, bottom, top, left, radius} : GlowBallProps) {
  return (
    <div className="glowball" style={{right: right,bottom: bottom,top: top, left: left,width: radius*2,height: radius*2}}></div>
  );
}

export function GlowBallRows({count, distance, radius} : {count: number, distance: number, radius: number}) {
  return (
    <>
      {Array(count).fill(0).map((_, i) => {
        const positionProps = i % 2 === 0 ? { right: 0 } : { left: 0 };
        return <GlowBall key={i} top={i * distance} radius={radius} {...positionProps} />;
      })}
    </>
  );
}