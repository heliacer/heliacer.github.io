import React from "react";

const Paragraph = ({ text, id } : { text: string, id: string }) => {
  const paragraphs = text.split('\n\n').map((para, index) => (
    <p key={index}>
      {para.split('\n').map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < para.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </p>
  ));

  return <section id={id}>{paragraphs}</section>;
};

export default Paragraph;