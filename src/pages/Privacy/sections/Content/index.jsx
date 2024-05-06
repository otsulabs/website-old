import style from './Content.module.scss';
import PageInfo from '../../../../components/PageInfo/';
import Title from '../../../../components/Title/';
import Text from '../../../../components/Text';

const Content = () => {
  return (
    <section className={style.content}>
      <PageInfo.Base className={style.contentTop}>
        <PageInfo.Row>
          <PageInfo.Col></PageInfo.Col>
          <PageInfo.Col>
            <Title.H3>
              <Title.Row>Privacy Policy</Title.Row>
            </Title.H3>
          </PageInfo.Col>
        </PageInfo.Row>
      </PageInfo.Base>
      <div className={style.contentBody}>
        <Text>
          <p>
            We respect your privacy and will not collect personal information on
            this website without your permission. Any information you provide
            will be confidential, following data protection laws. We will not
            sell or disclose your information to others.
          </p>
          <p>
            This site uses cookies to give you the best possible user
            experience. Cookies are stored in your browser and help us recognize
            you when you come back. They also assist our team in understanding
            which parts of the site you find most helpful.
          </p>
          <p>
            This Privacy Policy statement applies to our website
            (www.otsulabs.com) only, and we are not responsible for other
            websites' content or privacy practices.
          </p>
          <p>
            We may update this Privacy Policy from time to time to notify about
            changes in our practices or for other operational, legal, or
            regulatory reasons. All the changes will be reflected on this page.{' '}
          </p>
          <p>
            Thank you for visiting our website! If you have any questions, feel
            free to reach out: contact@otsulabs.com.
          </p>
        </Text>
      </div>
    </section>
  );
};

export default Content;
