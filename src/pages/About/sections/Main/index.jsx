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
                <Title.Row>Who we are</Title.Row>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col>
              <Title.H2>
                {isTablet ? (
                  <>
                    <Title.Row>Animators, Artists,</Title.Row>
                    <Title.Row>Storytellers, and</Title.Row>
                    <Title.Row>Just Weebs.</Title.Row>
                  </>
                ) : (
                  <>
                    <Title.Row>Animators, Artists,</Title.Row>
                    <Title.Row>Storytellers, and Just Weebs.</Title.Row>
                  </>
                )}
              </Title.H2>
            </PageInfo.Col>
          </PageInfo.Row>
          <PageInfo.Row>
            <PageInfo.Col></PageInfo.Col>
            <PageInfo.Col text>
              <Text secondary className={style.mainBody__text}>
                <p>
                  Otsu Labs was formed by creators who decided to take an
                  unconventional path and form a collective with a goal to help
                  brands tell their stories through the lens of anime.
                </p>
              </Text>
              <Text secondary className={style.mainBody__text}>
                <p>
                  We are headquartered in Vietnam, but with roots spread across
                  borders and team members from different countries, including
                  South Korea, Japan, Philippines, and more.
                </p>
              </Text>
            </PageInfo.Col>
          </PageInfo.Row>
        </PageInfo.Base>
      </div>
    </section>
  );
};

export default MainSection;
