import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
// import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { useLocation } from 'react-router-dom';

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 150,
  glowColor: '#fff',
};

//   const overscrollOptions = {
//     enable: true,
//     effect: 'glow',
//     damping: 0.1,
//     maxOverscroll: 200,
//     glowColor: '#222a2d',
//   };

const options = {
  damping: 0.15,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  const location = useLocation();

  useEffect(() => {
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'instant',
    // });
    // setTimeout(() => {
    // Scrollbar.use(OverscrollPlugin);
    const noiseBg = document.querySelector('#noise-bg');

    const scrollbar = Scrollbar.init(document.body, options);

    scrollbar.addListener(({ offset }) => {
      noiseBg.style.top = offset.y + 'px';
    });

    return () => {
      if (Scrollbar) {
        scrollbar.scrollTo(0, 0, 0);
        Scrollbar.destroy(document.body);
      }
    };
    // }, 100);
  }, [location]);

  return null;
};

export default Scroll;
