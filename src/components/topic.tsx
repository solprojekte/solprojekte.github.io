import { ReactNode, Fragment } from "react";

interface TopicProps {
  id: string;
  title: string;
  children?: ReactNode | string | string[];
}

export default function Topic({ id, title, children }: TopicProps) {
  function convertToComponent(text: string) {
    return text.split("\n").map((line, index) =>
      line ? <p key={index}>{line}</p> : <br key={index} />
    );
  }

  const childArray = typeof children === "string" ? [children] : Array.isArray(children) ? children : [children];

  return (
    <section id={id}>
      <h3>{title}</h3>
      {childArray &&
        childArray.map((child, index) =>
          typeof child === "string" ? (
            <Fragment key={index}>{convertToComponent(child)}</Fragment>
          ) : (
            <Fragment key={index}>{child}</Fragment>
          )
        )}
    </section>
  );
}