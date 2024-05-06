import PageInfo from '../../../../components/PageInfo';
import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Main.module.scss';

const MainSection = () => {
  return (
    <section className={style.main}>
      <div className='__container'>
        <PageInfo.Base className={style.mainBody}>
          <PageInfo.Row>
            <PageInfo.Col>
              <Text bold upperCase secondary>
                <Title.Row>Careers</Title.Row>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col>
              <Title.H2>
                <Title.Row>2D Animation Director</Title.Row>
              </Title.H2>
            </PageInfo.Col>
          </PageInfo.Row>
        </PageInfo.Base>
      </div>
    </section>
  );
};

export default MainSection;
