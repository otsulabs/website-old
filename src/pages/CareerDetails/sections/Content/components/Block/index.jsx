import style from './Block.module.scss';

const Block = {
  Base: ({ children }) => {
    return <div className={style.block}>{children}</div>;
  },
  Col: ({ children }) => {
    return <div className={style.col}>{children}</div>;
  },
};

export default Block;
