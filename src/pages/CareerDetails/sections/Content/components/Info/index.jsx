import Text from '../../../../../../components/Text';
import Title from '../../../../../../components/Title';
import style from './Info.module.scss';

const Info = ({ img, title, employment, place }) => {
  return (
    <div className={style.info}>
      <div className={style.info__img}>
        <img src={img} alt='' />
      </div>
      <div className={style.infoContent}>
        <div className={style.infoContent__row}>
          <Text secondary upperCase>
            {/* <Title.Row>Title</Title.Row> */}
            Title
          </Text>
          <Text lg>
            <Title.Row>{title}</Title.Row>
          </Text>
        </div>
        <div className={style.infoContent__employee}>
          <Text secondary upperCase>
            {/* <Title.Row>Employment</Title.Row> */}
            Employment
          </Text>
          <Text lg>
            <Title.Row>{employment}</Title.Row>
          </Text>
        </div>
        <div className={style.infoContent__place}>
          <Text secondary upperCase>
            {/* <Title.Row>Place of work</Title.Row> */}
            Place of work
          </Text>
          <Text lg>
            <Title.Row>{place}</Title.Row>
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Info;
