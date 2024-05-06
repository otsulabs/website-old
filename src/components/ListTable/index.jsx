import { Link } from 'react-router-dom';
import Text from '../Text';
import style from './ListTable.module.scss';

const ListTable = {
  Base: ({ children, className }) => {
    return <div className={`${style.list} ${className}`}>{children}</div>;
  },
  Head: ({ customColWidth, headings }) => {
    return (
      <div className={`${style.row} ${style.head}`}>
        {headings.map((item, index) => (
          <ListTable.Col
            customStyle={{ flex: `0 0 ${customColWidth[index] / 16}rem` }}
            key={index}
          >
            <ListTable.Heading>{item}</ListTable.Heading>
          </ListTable.Col>
        ))}
      </div>
    );
  },
  Row: ({ children, customColWidth, to }) => {
    return (
      <Link to={to} className={style.row}>
        {children.map((item, index) => (
          <ListTable.Col
            customStyle={{ flex: `0 0 ${customColWidth[index] / 16}rem` }}
            key={index}
          >
            {item}
          </ListTable.Col>
        ))}
        <div className={style.row__arrow}>
          <svg
            width='26'
            height='26'
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.9645 3.25174L13.9852 4.39315L22.5991 12.2383H0V13.7617H22.5991L13.9852 21.6069L14.9645 22.7483L26 13L14.9645 3.25174Z'
              fill='white'
            />
          </svg>
        </div>
      </Link>
    );
  },
  Mobile: ({ title, text, to }) => {
    return (
      <Link to={to} className={style.row}>
        <Text lg>{title}</Text>
        <Text bold secondary>
          {text}
        </Text>
      </Link>
    );
  },
  Col: ({ children, customStyle }) => {
    return (
      <div style={customStyle} className={style.col}>
        {children}
      </div>
    );
  },
  Heading: ({ children }) => {
    return (
      <Text secondary upperCase sm className={style.heading}>
        {children}
      </Text>
    );
  },
  Item: ({ children }) => {
    return (
      <Text lg className={style.item}>
        {children}
      </Text>
    );
  },
};

export default ListTable;
