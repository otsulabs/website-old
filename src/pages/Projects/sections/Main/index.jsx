import Button from '../../../../components/Button';
import Title from '../../../../components/Title';
import style from './Main.module.scss';

const MainSection = ({ isListType, handleListType }) => {
  return (
    <section className={style.main}>
      <div className='__container'>
        <div className={style.mainBody}>
          <Title.H2 className={style.mainBody__title}>
            <Title.Row>projects</Title.Row>
          </Title.H2>
          <div
            className={`${style.mainBody__type} ${isListType && style.list}`}
          >
            <Button
              className={style.mainBody__typeBtn}
              title={'Gallery'}
              onClick={() => handleListType(false)}
            />
            <Button
              className={style.mainBody__typeBtn}
              title={'List'}
              onClick={() => handleListType(true)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
