import Text from '../Text';
import style from './PageInfo.module.scss';

const PageInfo = {
  Base: ({ children, className }) => {
    return (
      <section className={`${style.base} ${className}`}>{children}</section>
    );
  },
  Row: ({ children, className }) => {
    return <div className={`${style.row} ${className}`}>{children}</div>;
  },
  Col: ({ children, className, text }) => {
    return (
      <div className={`${style.col} ${className} ${text && style.text}`}>
        {children}
      </div>
    );
  },
  Text: ({ children, className }) => {
    return (
      <Text secondary className={`${style.text__col} ${className}`}>
        {children}
      </Text>
    );
  },
};

export default PageInfo;
