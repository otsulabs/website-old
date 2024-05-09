import Text from '../../../../components/Text';
import Title from '../../../../components/Title';
import style from './Freelance.module.scss';
import img from './assets/img/img.png';
// import imgMin from './assets/img/min.jpg';
// import imgBig from './assets/img/big.jpg';
import { useMediaQuery } from 'usehooks-ts';
import LinkButton from '../../../../components/LinkButton';

const FreelanceSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.freelance}>
      <div className='__container'>
        <div className={style.freelanceBody}>
          <div className={style.freelanceContent}>
            <Text secondary upperCase className={style.freelanceContent__label}>
              <Title.Row>freelance</Title.Row>
            </Text>
            <Title.H3 className={style.freelanceContent__title}>
              {isTablet ? (
                <>
                  <Title.Row>Join our freelancer</Title.Row>
                  <Title.Row>network.</Title.Row>
                </>
              ) : (
                <>
                  <Title.Row>Join our </Title.Row>
                  <Title.Row>freelancer</Title.Row>
                  <Title.Row>network.</Title.Row>
                </>
              )}
            </Title.H3>

            {/* {isTablet && (
              <div className={style.freelanceImages}>
                <div className={`${style.freelanceImages__img} ${style.big}`}>
                  <img src={imgBig} alt='' />
                </div>
              </div>
            )} */}

            <div className={style.freelanceContent__bottom}>
              <Text
                secondary
                lg={!isTablet}
                className={style.freelanceContent__bottomTitle}
              >
                <Title.Row>Email us your resume and portfolio: </Title.Row>
              </Text>
              {/* <a
                className={style.freelanceContent__bottomMail}
                href='mailto:contact@otsulabs.com'
              > */}
              {/* <Title.H3 lowerCase> */}
              {/* <Title.Row> */}
              <LinkButton
                title={'contact@otsulabs.com'}
                href={`mailto:contact@otsulabs.com`}
                lowerCase
                xl
                className={style.freelanceContent__bottomMail}
              />
              {/* </Title.Row> */}
              {/* </Title.H3> */}
              {/* </a> */}
            </div>
          </div>
          {/* <div className={style.freelanceImages}>
              <div className={`${style.freelanceImages__img} ${style.min}`}>
                <img src={imgMin} alt='' />
              </div>
              <div className={`${style.freelanceImages__img} ${style.big}`}>
                <img src={imgBig} alt='' />
              </div>
            </div> */}
          {/* {!isTablet && ( */}
          <div className={style.freelanceImage}>
            <img src={img} alt='' />
          </div>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
