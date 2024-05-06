import style from './Text.module.scss';

const Text = ({ children, className, secondary, bold, upperCase, sm, lg }) => {
  return (
    <p
      className={`${style.text} 
         ${secondary && style.secondary}
         ${bold && style.bold}
         ${upperCase && style.upperCase}
         ${sm && style.sm}
         ${lg && style.lg}
         ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
