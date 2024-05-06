import { useMediaQuery } from 'usehooks-ts';
import style from './Gallery.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';
import { useRef } from 'react';

const Gallery = {
  Base: ({ withSpace, horizontal, items, big }) => {
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
            <Gallery.Horizontal key={index} src={item} />
          ))}
        {!horizontal &&
          !isTablet &&
          items.map((item, index) => (
            <Gallery.Vertical key={index} src={item} />
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
                <Gallery.Vertical key={index} src={item} />
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
  Horizontal: ({ src }) => {
    return (
      <div className={`${style.item} ${style.horizontal}`}>
        <div className={style.img}>
          <img src={src} alt='' />
        </div>
      </div>
    );
  },
  Vertical: ({ src }) => {
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
