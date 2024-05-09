import { useMediaQuery } from 'usehooks-ts';
import style from './Content.module.scss';

import Title from '../../../../../components/Title';
import PageHeader from '../../../ProjectDefault/modules/Header';
import Gallery from '../../../ProjectDefault/modules/Gallery';
import Description from '../../../ProjectDefault/modules/Description';
import Credits from '../../../ProjectDefault/modules/Credits';

import videoSrc from './assets/video/video.mp4';
import highlight_img1 from './assets/highlights/img1.jpg';
import highlight_img2 from './assets/highlights/img2.jpg';
import highlight_img3 from './assets/highlights/img3.jpg';
import highlight_img4 from './assets/highlights/img4.jpg';

import development_img1 from './assets/development/img1.jpg';
import development_img2 from './assets/development/img2.jpg';
import development_img3 from './assets/development/img3.jpg';
import development_video4 from './assets/development/video.mp4';

const Content = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.content}>
      <PageHeader
        title={
          <>
            <Title.Row>The dope sh*t-type</Title.Row>
            <Title.Row>slash</Title.Row>
          </>
        }
        client={'Alex Hugh'}
        brief={'“Just make some dope sh*t for my character.”'}
        scope={
          'Character Design, Background rendering, Storyboard, Color Script, Full Production, Sound Design, Visual Effects.'
        }
      />
      <Gallery.Base withSpace horizontal big video items={[videoSrc]} />
      <Description title={'highlights'} />
      <Gallery.Base
        horizontal
        withSpace
        items={[highlight_img1, highlight_img2, highlight_img3, highlight_img4]}
      />
      <Description title={'Development'} />
      <Gallery.Base
        horizontal
        withSpace
        items={[
          development_img1,
          development_img2,
          development_img3,
          development_video4,
        ]}
      />
      <Credits
        noBorder
        content={[
          [
            {
              title: 'Creative Director:',
              value: 'Katsumi',
            },
            {
              title: 'Producer:',
              value: 'Khoa Trinh',
            },
            {
              title: 'Soundfx:',
              value: 'Hoang Vy',
            },
          ],
          [
            {
              title: 'Animation Director:',
              value: 'Erene',
            },
            {
              title: 'Production Manager:',
              value: 'Khoa Trinh',
            },
          ],
        ]}
      />
    </section>
  );
};

export default Content;
