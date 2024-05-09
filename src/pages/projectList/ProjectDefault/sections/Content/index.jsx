import { useMediaQuery } from 'usehooks-ts';

import PageHeader from '../../modules/Header';
import style from './Content.module.scss';
import Gallery from '../../modules/Gallery';
import img1 from './assets/gallery/img1.jpg';
import Description from '../../modules/Description';
import Credits from '../../modules/Credits';
import Title from '../../../../../components/Title';

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
        client={'Zokio by VoyceMe'}
        brief={
          'A short trailer introducing different factions and giving a sneak peek into the world of Roolz.'
        }
        scope={
          'Character Development and Design, Lore and World-building, Concept art, Background art, Script, Storyboard, Color Script, Full Production, Sound Design, Visual Effects.'
        }
      />
      <Gallery.Base horizontal items={[img1, img1]} />
      <Gallery.Base withSpace items={[img1, img1, img1, img1]} />
      <Gallery.Base withSpace items={[img1, img1, img1, img1]} />
      <Gallery.Base withSpace horizontal items={[img1, img1]} />
      <Description
        text={
          'Teamfight Tactics is coming to Vegas and we’re here to kick off the show. That’s right, it’s the TFT Vegas Open: the first-of-its-kind, esports spectacular where anyone can win. Bringing together unique characters and a whole host of TFT IP, we ask competitors: who will be bold enough to step into the light?'
        }
      />
      <Description
        title={'Character'}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type"
        }
      />
      <Gallery.Base withSpace horizontal items={[img1, img1, img1, img1]} />
      <Gallery.Base withSpace horizontal big items={[img1, img1, img1, img1]} />
      <Credits
        noBorder
        content={[
          [
            {
              title: 'Creative Director:',
              value: 'Erene',
            },
            {
              title: 'Animation Director:',
              value: 'Huu Tu',
            },
            {
              title: 'Animation Director Assistant:',
              value: 'Phantom D, AJ',
            },
            {
              title: 'Art Director:',
              value: 'Long An',
            },
            {
              title: 'Storyboard:',
              value: 'Huu Tu, Ngoc Huynh',
            },
          ],
          [
            {
              title: 'Producer:',
              value: 'Khoa Trinh',
            },
            {
              title: 'Production Manager:',
              value: 'Julius De Belen',
            },
            {
              title: 'Music:',
              value: 'Jakub Pietras',
            },
            {
              title: 'Soundfx and mastering:',
              value: 'Jordan Wiberg',
            },
            {
              title: '3D & Compositing Lead:',
              value: 'Phuc Huynh',
            },
          ],
        ]}
      />
    </section>
  );
};

export default Content;
