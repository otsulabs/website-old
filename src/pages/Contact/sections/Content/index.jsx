import { Link } from 'react-router-dom';
import Title from '../../../../components/Title';
import Form from '../../../../modules/Form';
import style from './Contact.module.scss';
import Faq from './modules/Faq';
import { useMediaQuery } from 'usehooks-ts';
import LinkButton from '../../../../components/LinkButton';

const Content = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.content}>
      <div className={style.contentTop}>
        <div className={style.col}>
          <Title.H3>
            <Title.Row>Contact Form</Title.Row>
          </Title.H3>
        </div>
        {!isTablet && (
          <div className={style.col}>
            <Title.H3>
              <Title.Row>FAQ</Title.Row>
            </Title.H3>
          </div>
        )}
      </div>
      <div className={style.contentBody}>
        <div className={style.col}>
          <Form />
        </div>
        {isTablet && (
          <div className={style.title}>
            <Title.H3>
              <Title.Row>FAQ</Title.Row>
            </Title.H3>
          </div>
        )}
        <div className={`${style.col} ${style.nospace}`}>
          <Faq
            content={[
              {
                title: 'How long does it take to complete a project?',
                text: 'The timeline for a project can vary depending on factors like animation complexity, duration of a video, character count, etc. We work closely with our clients to figure out a schedule that works for everyone, and we keep them informed about how the project is coming along.',
              },
              {
                title: 'Are we the right fit? ',
                text: (
                  <>
                    To find our more about our projects, visit{' '}
                    <LinkButton
                      to={'/projects'}
                      title={'Projects page.'}
                      lowerCase
                    />
                  </>
                ),
              },
              {
                title: 'How do you ensure confidentiality?',
                text: "We have strict data protection protocols in place, including non-disclosure agreements (NDAs) if required. We understand that collaborations often involve sharing of sensitive information, such as intellectual property, upcoming releases, marketing plans, etc. Therefore, we take great care in safeguarding sensitive information to prevent any unauthorized disclosure. Upon the completion of our collaboration, we kindly request our clients' consent to include the work in our portfolio.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Content;
