import Text from '../../../../../../components/Text';
import Title from '../../../../../../components/Title';
import style from './Faq.module.scss';

const Faq = ({ content }) => {
  return (
    <div className={style.faq}>
      {content.map((item, index) => (
        <div key={index} className={style.faqItem}>
          <Title.H4 lowerCase className={style.faqItem__title}>
            <Title.Row>{item.title}</Title.Row>
          </Title.H4>
          <Text secondary className={style.faqItem__text}>
            {item.text}
          </Text>
        </div>
      ))}
    </div>
  );
};

export default Faq;
