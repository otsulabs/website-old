import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import Button from '../../../../components/Button';
import Title from '../../../../components/Title';
import style from './Projects.module.scss';
// import video1 from '../../../projectList/TheWrathOfGods/sections/Content/assets/video/video.mp4';
// import video2 from '../../../projectList/Eris/sections/Content/assets/video/video.mp4';
// import video3 from '../../../projectList/TheBookOfNouns/sections/Content/assets/video/video.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { siteContent } from '../../../../content';

const ProjectsSection = () => {
  return (
    <section className={style.projects}>
      <div className='__container'>
        <div className={style.projectsTop}>
          <Title.H2>
            <Title.Row>Projects</Title.Row>
          </Title.H2>
          <Button
            className={style.projectsTop__btn}
            to={'projects'}
            light
            title={'View all'}
          />
        </div>
        <Swiper
          modules={[Scrollbar, Mousewheel]}
          spaceBetween={30}
          slidesPerView={'auto'}
          scrollbar={{ draggable: true, el: '#projects-slider-scrollbar' }}
          // mousewheel={true}
          className={style.projectsSlider}
          // slideActiveClass={style.active}
        >
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard
              video={siteContent.projectsVideo.theWrathOfGods}
              title={'The Wrath of Gods'}
            />
          </SwiperSlide>
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard video={siteContent.projectsVideo.eris} title={'Eris'} />
          </SwiperSlide>
          <SwiperSlide className={style.projectsSlider__slide}>
            <VideoCard
              video={siteContent.projectsVideo.theBookOfNouns}
              title={'The Book of nouns'}
            />
          </SwiperSlide>
        </Swiper>
        <div
          id='projects-slider-scrollbar'
          className={style.projectsScrollbar}
        ></div>
      </div>
    </section>
  );
};

const VideoCard = ({ video, title }) => {
  const videoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 1;
  };

  useEffect(() => {
    videoRef.current.currentTime = 1;
  }, []);

  return (
    <Link
      to={'projects/item'}
      className={style.slide}
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
    >
      <div className={style.projectsSlider__img}>
        {/* <img src={img} alt='' /> */}
        <video
          muted
          ref={videoRef}
          preload={'metadata'}
          playsinline
          src={`${video}#t=0.1`}
        ></video>
      </div>
      <div className={style.projectsSlider__title}>{title}</div>
    </Link>
  );
};

export default ProjectsSection;
