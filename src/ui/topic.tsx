import { ReactNode } from "react";
import { capitalize } from "@mui/material";

interface TopicProps {
  name: string;
  children?: ReactNode | string | string[];
}

export default function Topic({ name, children }: TopicProps) {

  function convertToComponent(text: string) {
    return text.split('\n').map((line, index) => <p key={index}>{line}</p>);
  }

  const childArray = typeof children === 'string' ? [children] : (Array.isArray(children) ? children : [children]);

  return (
    <div id={name} className="topic">
      <h1>{capitalize(name)}</h1>
      {childArray && childArray.map((child) => (
        typeof child === 'string' ? (
          convertToComponent(child)
        ) : (
          <>{child}</>
        )
      ))}
    </div>
  );
}
