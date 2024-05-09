import { useMediaQuery } from 'usehooks-ts';
import style from './Gallery.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { useEffect, useRef, useState } from 'react';

const Gallery = {
  Base: ({ withSpace, horizontal, items, big, video }) => {
    const isTablet = useMediaQuery('(max-width:991.98px)');
    const containerRef = useRef(null);
    const sliderScrollbarRef = useRef(null);

    return (
      <section
        ref={containerRef}
        className={`${style.gallery} ${withSpace && style.withSpace} 
        ${horizontal && style.horizontal}
        ${horizontal && big && style.big}
        gallery-con `}
      >
        {horizontal &&
          items.map((item, index) => (
            <Gallery.Horizontal key={index} video={video} src={item} />
          ))}
        {!horizontal &&
          !isTablet &&
          items.map((item, index) => (
            <Gallery.Vertical key={index} video={video} src={item} />
          ))}
        {!horizontal && isTablet && (
          <Swiper
            modules={[Scrollbar]}
            slidesPerView={'auto'}
            spaceBetween={15}
            className={style.slider}
            scrollbar={{ draggable: true, el: '.slider-gallery-scrollbar' }}
            // scrollbar={{
            //   draggable: true,
            //   el: `.gallery-con .slider-gallery-scrollbar`,
            // }}
            // scrollbar={{
            //   draggable: true,
            //   el: sliderScrollbarRef.current,
            // }}
          >
            {items.map((item, index) => (
              <SwiperSlide className={style.slide}>
                <Gallery.Vertical key={index} video={video} src={item} />
              </SwiperSlide>
            ))}
            {!horizontal && isTablet && (
              <div
                rel={sliderScrollbarRef}
                className={`${style.slider__scrollbar} slider-gallery-scrollbar`}
              ></div>
            )}
          </Swiper>
        )}
      </section>
    );
  },
  Horizontal: ({ src, video }) => {
    // const [fileType, setFileType] = useState(src.match(/\.([^.]+)$/)[1])
    const fileType = src.match(/\.([^.]+)$/)[1];
    const [isVideoPlay, stIsVideoPlay] = useState(false);
    const videoRef = useRef(null);

    const playVideo = () => {
      stIsVideoPlay(true);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      videoRef.current.controls = true;
    };

    useEffect(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 1;
      }
    }, []);

    return (
      <div className={`${style.item} ${style.horizontal}`}>
        <div className={style.img}>
          {video && !isVideoPlay && (
            <div className={style.overlay}>
              <button onClick={playVideo}>
                <svg
                  width='60'
                  height='70'
                  viewBox='0 0 60 70'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M60 35L-3.26266e-06 69.641L-2.34249e-07 0.358979L60 35Z'
                    fill='white'
                  />
                </svg>
              </button>
            </div>
          )}
          {video ? (
            <video ref={videoRef} src={src} />
          ) : fileType === 'mp4' ? (
            <video src={src} muted loop autoPlay playsInline />
          ) : (
            <img src={src} alt='' />
          )}
        </div>
      </div>
    );
  },
  Vertical: ({ src, video }) => {
    return (
      <div className={`${style.item} ${style.vertical}`}>
        <div className={style.img}>
          <img src={src} alt='' />
        </div>
      </div>
    );
  },
};

export default Gallery;
