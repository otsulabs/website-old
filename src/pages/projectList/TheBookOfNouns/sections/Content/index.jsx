import { useMediaQuery } from 'usehooks-ts';
import style from './Content.module.scss';

import Title from '../../../../../components/Title';
import PageHeader from '../../../ProjectDefault/modules/Header';
import Gallery from '../../../ProjectDefault/modules/Gallery';
import Description from '../../../ProjectDefault/modules/Description';
import Credits from '../../../ProjectDefault/modules/Credits';

// import videoSrc from './assets/video/video.mp4';

import development_img1 from './assets/development/img1.jpg';
import development_img2 from './assets/development/img2.jpg';
import development_img3 from './assets/development/img3.jpg';
import development_img4 from './assets/development/img4.jpg';
import development_img5 from './assets/development/img5.jpg';
import development_img6 from './assets/development/img6.jpg';
import development_img7 from './assets/development/img7.jpg';
import development_img8 from './assets/development/img8.jpg';
import development_img9 from './assets/development/img9.jpg';
import development_img10 from './assets/development/img10.jpg';
import development_img11 from './assets/development/img11.jpg';
import development_img12 from './assets/development/img12.jpg';
import development_img13 from './assets/development/img13.jpg';
import development_img14 from './assets/development/img14.jpg';
import development_img15 from './assets/development/img15.jpg';
import development_img16 from './assets/development/img16.jpg';
import { siteContent } from '../../../../../content';

const Content = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.content}>
      <PageHeader
        title={
          isTablet ? (
            <>
              <Title.Row>The Book of Nouns</Title.Row>
            </>
          ) : (
            <>
              <Title.Row>The Book of </Title.Row>
              <Title.Row>Nouns</Title.Row>
            </>
          )
        }
        client={'In-house project'}
        brief={
          'An internet-first anime series produced specifically for the modern-day audience with an attention span of 10 seconds or less. Backed by NounsDAO. '
        }
        scope={
          'Character Design, Storyboard, Color Script, Full Production, Sound Design, Visual Effects.'
        }
      />
      <Gallery.Base
        withSpace
        horizontal
        big
        video
        items={[siteContent.projectsVideo.theBookOfNouns]}
      />
      <Description title={'Development'} />
      <Gallery.Base
        horizontal
        withSpace
        items={[
          development_img1,
          development_img2,
          development_img3,
          development_img4,
          development_img5,
          development_img6,
          development_img7,
          development_img8,
          development_img9,
          development_img10,
        ]}
      />
      <Gallery.Base
        withSpace
        items={[
          development_img11,
          development_img12,
          development_img13,
          development_img14,
        ]}
      />
      <Credits
        noBorder
        content={[
          [
            {
              title: 'Producer:',
              value: 'Otsu Labs',
            },
            {
              title: 'Art Director:',
              value: 'Longan',
            },
            {
              title: 'Generalist Manager:',
              value: 'Khoa Trinh',
            },
            {
              title: 'Compositing Lead:',
              value: 'Phuc Huynh',
            },
          ],
          [
            {
              title: 'Creative Director:',
              value: 'Erene',
            },
            {
              title: 'Animation Director:',
              value: 'AJ',
            },
            {
              title: 'Production Manager:',
              value: 'Julius de Belen, Khoa, Erene',
            },
          ],
        ]}
      />
    </section>
  );
};

export default Content;
