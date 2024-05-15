import { useMediaQuery } from 'usehooks-ts';
import style from './Content.module.scss';

import Title from '../../../../../components/Title';
import PageHeader from '../../../ProjectDefault/modules/Header';
import Gallery from '../../../ProjectDefault/modules/Gallery';
import Description from '../../../ProjectDefault/modules/Description';
import Credits from '../../../ProjectDefault/modules/Credits';

// import videoSrc from './assets/video/video.mp4';
import highlight_img1 from './assets/highlights/img1.jpg';
import highlight_img2 from './assets/highlights/img2.jpg';
import highlight_img3 from './assets/highlights/img3.jpg';
import highlight_img4 from './assets/highlights/img4.jpg';
import highlight_img5 from './assets/highlights/img5.jpg';
import highlight_img6 from './assets/highlights/img6.jpg';
import highlight_img7 from './assets/highlights/img7.jpg';
import highlight_img8 from './assets/highlights/img8.jpg';
import highlight_img9 from './assets/highlights/img9.jpg';
import highlight_img10 from './assets/highlights/img10.jpg';
import highlight_img11 from './assets/highlights/img11.jpg';
import highlight_img12 from './assets/highlights/img12.jpg';
import highlight_img13 from './assets/highlights/img13.jpg';
import highlight_img14 from './assets/highlights/img14.jpg';
import highlight_img15 from './assets/highlights/img15.jpg';
import highlight_img16 from './assets/highlights/img16.jpg';

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
import { siteContent } from '../../../../../content';

const Content = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');

  return (
    <section className={style.content}>
      <PageHeader
        title={
          isTablet ? (
            <>
              <Title.Row>The Wrath of Gods</Title.Row>
            </>
          ) : (
            <>
              <Title.Row>The Wrath of</Title.Row>
              <Title.Row>Gods</Title.Row>
            </>
          )
        }
        client={'Roolz'}
        brief={
          'A short trailer introducing different factions and giving a sneak peek into the world of Roolz.'
        }
        scope={
          'Character Development and Design, Lore and World-building, Concept art, Background art, Script, Storyboard, Color Script, Full Production, Sound Design, Visual Effects.'
        }
      />
      <Gallery.Base
        withSpace
        horizontal
        big
        video
        items={[siteContent.projectsVideo.theWrathOfGods]}
      />
      <Description title={'highlights'} />
      <Gallery.Base
        horizontal
        withSpace
        items={[
          highlight_img1,
          highlight_img2,
          highlight_img3,
          highlight_img4,
          highlight_img5,
          highlight_img6,
          highlight_img7,
          highlight_img8,
          highlight_img9,
          highlight_img10,
          highlight_img11,
          highlight_img12,
          highlight_img13,
          highlight_img14,
          highlight_img15,
          highlight_img16,
        ]}
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
          development_img11,
          development_img12,
        ]}
      />
      <Credits
        noBorder
        content={[
          [
            {
              title: 'Creative Director:',
              value: 'Erene',
            },
            {
              title: 'Storyboard:',
              value: 'Huu Tu, Ngoc Huynh',
            },
            {
              title: 'Original drawings Supervisor:',
              value: 'Lucas',
            },
            {
              title: 'Production Manager:',
              value: 'Julius de Belen',
            },
            {
              title: '3D & Compositing Lead:',
              value: 'Phuc Huynh',
            },
            {
              title: 'Music:',
              value: 'Jakub Pietras',
            },
          ],
          [
            {
              title: 'Art Director:',
              value: 'Longan',
            },
            {
              title: 'Colorscript:',
              value: 'Ngoc Huynh, Longan',
            },
            {
              title: 'Producer:',
              value: 'Khoa',
            },
            {
              title: 'Layout Background:',
              value: 'Vy Do',
            },
            {
              title: 'Soundfx and Master:',
              value:
                'Jordan Wiberg (Emmy Award-winning Supervising Sound Editor',
            },
          ],
        ]}
      />
    </section>
  );
};

export default Content;
