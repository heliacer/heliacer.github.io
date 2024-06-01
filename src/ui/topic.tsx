import { ReactNode } from "react";
import { capitalize } from "@mui/material";

interface TopicProps {
  name: string;
  children?: ReactNode | string | string[];
}

export default function Topic({ name, children }: TopicProps) {
  
  function convertToComponent(text: string) {
    return text.split('\n').map((line, index) => 
      line ? <p key={index}>{line}</p> : <br key={index} />
    );
  }

  const childArray = typeof children === 'string' ? [children] : (Array.isArray(children) ? children : [children]);

  return (
    <div id={name} className="topic">
      <h1>{capitalize(name)}</h1>
      {childArray && childArray.map((child, index) => (
        typeof child === 'string' ? (
          <div key={`child-${index}`}>{convertToComponent(child)}</div>
        ) : (
          <section key={`child-${index}`}>{child}</section>
        )
      ))}
    </div>
  );
}
