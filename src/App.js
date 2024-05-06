import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import NoiseBg from './components/NoiseBg';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';
import Scroll from './components/Scroll';
import { useMediaQuery } from 'usehooks-ts';

function App() {
  const isTablet = useMediaQuery('(max-width:991.98px)');
  const scrollRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isTablet) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location, isTablet]);

  return (
    <>
      <main data-scroll-container ref={scrollRef}>
        <div className='wrapper' data-scroll-section>
          {!isTablet && <Scroll />}
          <NoiseBg />
          <Header />

          <div className='page'>
            <Outlet />
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
