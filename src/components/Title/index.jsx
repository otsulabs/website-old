import { Fade } from 'react-reveal';
import style from './Title.module.scss';

const Title = {
  H1: ({ children, className }) => {
    return (
      <h1 className={`${style.title} ${style.h1} ${className}`}>{children}</h1>
    );
  },
  H2: ({ children, className }) => {
    return (
      <h2 className={`${style.title} ${style.h2} ${className}`}>{children}</h2>
    );
  },
  H3: ({ children, className, lowerCase }) => {
    return (
      <h2
        className={`${style.title} ${style.h3} 
        ${lowerCase && style.lowerCase}
         ${className}`}
      >
        {children}
      </h2>
    );
  },
  H4: ({ children, className, lowerCase }) => {
    return (
      <h2
        className={`${style.title} ${style.h4} 
        ${lowerCase && style.lowerCase}
         ${className}`}
      >
        {children}
      </h2>
    );
  },
  Value: ({ children, className }) => {
    return (
      <h3 className={`${style.title} ${style.value}  ${className}`}>
        {children}
      </h3>
    );
  },
  Row: ({ children }) => {
    return (
      <div className={style.row}>
        <Fade up cascade duration={1000}>
          {children}
        </Fade>
      </div>
    );
  },
};

export default Title;
