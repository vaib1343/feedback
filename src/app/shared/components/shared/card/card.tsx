import React from 'react';
import styles from 'app/shared/components/shared/card/card.module.scss';

interface CardProps extends React.ComponentPropsWithoutRef<'section'> {
  children?: React.ReactNode;
}
function Card(props: CardProps) {
  const { children, className, ...rest } = props;
  return (
    <section className={`${styles.card} ${className}`} {...rest}>
      {children}
    </section>
  )
}
interface ChildProps extends React.ComponentPropsWithoutRef<'div'> {
  children?: React.ReactNode,
}

function Header(props: ChildProps) {
  const { children, ...rest } = props
  return <header className={`${styles.heading}`} {...rest}>
    {children}
  </header>
}
Header.displayName = 'Header';
Card.Header = Header;

function Body(props: ChildProps) {
  const { children, ...rest } = props;
  return <section {...rest}>
    {children}
  </section>
}
Body.displayName = 'Body';
Card.Body = Body;

function Footer(props: ChildProps) {
  const { children, ...rest } = props;
  return <footer {...rest}>
    {children}
  </footer>
}
Footer.displayName = 'Footer';
Card.Footer = Footer;

export default Card;