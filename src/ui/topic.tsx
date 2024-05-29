import { capitalize } from "@mui/material";

export default function Topic({ name, children}: { name: string,children: React.ReactNode}) {

  return (
    <div id={name} className="topic">
      <h1>{capitalize(name)}</h1>
      {children}
    </div>
  );
}



function convertTextToParagraphs(text: string) {
  return text.split('\n').map((line, index) => <p key={index}>{line}</p>);
}