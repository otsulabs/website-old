import Text from '../../../../../components/Text';
import Title from '../../../../../components/Title';
import style from './Credits.module.scss';

const Credits = ({ content, noBorder }) => {
  return (
    <section className={`${style.credits} ${noBorder && style.noBorder}`}>
      <div className={style.col}>
        <Title.H2>
          <Title.Row>credits</Title.Row>
        </Title.H2>
      </div>
      <div className={style.col}>
        <div className={style.creditsInfo}>
          {content.map((item, index) => (
            <div key={index} className={style.creditsInfo__col}>
              {item.map((item, index) => (
                <div key={index} className={style.creditsInfo__row}>
                  <Text secondary upperCase>
                    <Title.Row>{item.title}</Title.Row>
                  </Text>
                  <Text lg bold>
                    {/* <Title.Row>{item.value}</Title.Row> */}
                    {item.value}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credits;
