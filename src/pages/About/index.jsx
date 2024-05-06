import CraftSection from './sections/Craft';
import MainSection from './sections/Main';
import PictureSection from './sections/Picture';
import img from './assets/img/img.jpg';

const AboutPage = () => {
  return (
    <>
      <MainSection />
      <PictureSection img={img} />
      <CraftSection />
    </>
  );
};

export default AboutPage;
