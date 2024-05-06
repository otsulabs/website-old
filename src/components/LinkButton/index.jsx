import { Link } from 'react-router-dom';
import style from './LinkButton.module.scss';

const LinkButton = ({
  href,
  to,
  title,
  className,
  pulse,
  white,
  sm,
  onClick,
  lowerCase,
  lg,
  xl,
}) => {
  const cls = `${style.link} 
  ${white && style.white} 
  ${lowerCase && style.lowerCase} 
  ${sm && style.sm} 
  ${lg && style.lg} 
  ${xl && style.xl} 
  ${className}`;

  const compiledTitle = title.split('');

  return (
    <>
      {href ? (
        <a
          href={href}
          target='_blank'
          rel='noreferrer'
          className={cls}
          onClick={onClick}
        >
          {/* {title} */}
          <div className={style.title}>
            {compiledTitle.map((item, index) => (
              <span key={index} className={style.letter}>
                <span
                  className={style.letter__up}
                  dangerouslySetInnerHTML={{
                    __html: item === ' ' ? '&nbsp;' : item,
                  }}
                ></span>
                <span
                  className={style.letter__down}
                  dangerouslySetInnerHTML={{
                    __html: item === ' ' ? '&nbsp;' : item,
                  }}
                ></span>
              </span>
            ))}
          </div>
          {pulse && <span className={style.pulse}></span>}
        </a>
      ) : (
        <Link to={to} className={cls} onClick={onClick}>
          {/* {title} */}
          <div className={style.title}>
            {compiledTitle.map((item, index) => (
              <span key={index} className={style.letter}>
                <span
                  className={style.letter__up}
                  dangerouslySetInnerHTML={{
                    __html: item === ' ' ? '&nbsp;' : item,
                  }}
                ></span>
                <span
                  className={style.letter__down}
                  dangerouslySetInnerHTML={{
                    __html: item === ' ' ? '&nbsp;' : item,
                  }}
                ></span>
              </span>
            ))}
          </div>
          {pulse && <span className={style.pulse}></span>}
        </Link>
      )}
    </>
  );
};

export default LinkButton;
