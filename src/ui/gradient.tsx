import { useEffect, useState } from "react";

const GradientPosition = () => {

    const [ mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (ev:MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        // Add Scroll Event
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (mousePosition)
};


interface GradientProps {
    className:string
    children:React.ReactNode
}
const GradientDiv:React.FC<GradientProps> = ({className,children}) =>{
    return(
        <div

            style={{
                background: `radial-gradient(200px at ${GradientPosition().x}px ${GradientPosition().y}px, rgba(29, 78, 216, 0.15)  , transparent 80% )`
            }}

            className={className}>
            {children}
        </div>
    )
}

export default GradientDiv