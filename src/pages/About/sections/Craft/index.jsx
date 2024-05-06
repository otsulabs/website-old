import { useMediaQuery } from 'usehooks-ts';
import PageInfo from '../../../../components/PageInfo';
import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Craft.module.scss';

const CraftSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.craft}>
      <div className='__container'>
        <PageInfo.Base className={style.craftBody}>
          <PageInfo.Row>
            <PageInfo.Col>
              <Text bold upperCase secondary>
                <Title.Row>Our craft</Title.Row>
              </Text>
            </PageInfo.Col>
            <PageInfo.Col>
              <Title.H2>
                {isTablet ? (
                  <>
                    <Title.Row>Traditional 2D cel-</Title.Row>
                    <Title.Row>shade animation</Title.Row>
                  </>
                ) : (
                  <>
                    <Title.Row>Traditional 2D cel-shade</Title.Row>
                    <Title.Row>animation</Title.Row>
                  </>
                )}
              </Title.H2>
            </PageInfo.Col>
          </PageInfo.Row>
          <PageInfo.Row>
            <PageInfo.Col></PageInfo.Col>
            <PageInfo.Col text>
              <PageInfo.Text>
                <p>
                  We specialize in traditional 2D cel-shade animation, where
                  every second of animation is crafted frame by frame. While
                  this is our primary focus, we also have expertise 3D
                  animations. So whether you prefer the timeless and nostalgic
                  appeal of traditional hand-drawn techniques or a modern twist
                  on animation, we are here to deliver.
                </p>
              </PageInfo.Text>
              <PageInfo.Text>
                <p>
                  Our approach is clear-cut: We start with your story and take
                  it from there, bringing our creativity to the table.
                </p>
                <p>
                  From crafting character designs to post-production, we'll work
                  together to create something we will all be proud of.
                </p>
              </PageInfo.Text>
            </PageInfo.Col>
          </PageInfo.Row>
        </PageInfo.Base>
      </div>
    </section>
  );
};

export default CraftSection;
