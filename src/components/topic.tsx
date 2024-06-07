import { ReactNode } from "react";

interface TopicProps {
  id: string;
  title: string;
  children?: ReactNode | string | string[];
}

export default function Topic({ id,title, children }: TopicProps) {
  
  function convertToComponent(text: string) {
    return text.split('\n').map((line) => 
      line ? <p>{line}</p> : <br/>
    );
  }

  const childArray = typeof children === 'string' ? [children] : (Array.isArray(children) ? children : [children]);

  return (
    <div id={id}>
      <h3>{title}</h3>
      {childArray && childArray.map((child) => (
        typeof child === 'string' ? (
          <>{convertToComponent(child)}</>
        ) : (
          <>{child}</>
        )
      ))}
    </div>
  );
}