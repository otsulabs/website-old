import Text from '../../../../../components/Text';
import Title from '../../../../../components/Title';
import style from './Description.module.scss';

const Description = ({ title, text }) => {
  return (
    <section className={`${style.description} ${title && style.withTitle}`}>
      {title && <Title.H2>{title}</Title.H2>}
      <Text className={style.description__text} secondary>
        {text}
      </Text>
    </section>
  );
};

export default Description;
