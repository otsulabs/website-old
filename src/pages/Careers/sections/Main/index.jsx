import { useMediaQuery } from 'usehooks-ts';
import PageInfo from '../../../../components/PageInfo';
import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Main.module.scss';

const MainSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

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
                {isTablet ? (
                  <>
                    <Title.Row>Step into a culture</Title.Row>
                    <Title.Row>where being weeby is</Title.Row>
                    <Title.Row>a way of life.</Title.Row>
                  </>
                ) : (
                  <>
                    <Title.Row>Step into a culture where being</Title.Row>
                    <Title.Row>weeby is a way of life.</Title.Row>
                  </>
                )}
              </Title.H2>
            </PageInfo.Col>
          </PageInfo.Row>
        </PageInfo.Base>
      </div>
    </section>
  );
};

export default MainSection;
