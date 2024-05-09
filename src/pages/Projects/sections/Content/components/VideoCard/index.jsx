import { Link } from 'react-router-dom';
import Text from '../../../../../../components/Text';
import style from './VideoCard.module.scss';
import { useEffect, useRef } from 'react';

const VideoCard = ({ img, video, title, user, userType, className, to }) => {
  const videoRef = useRef();

  const playVideo = () => {
    videoRef.current.play();
  };
  const pauseVideo = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 1;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 1;
    }
  }, []);

  return (
    <Link
      onMouseEnter={playVideo}
      onMouseLeave={pauseVideo}
      to={to}
      className={`${style.card} ${className}`}
    >
      <div className={style.card__video}>
        {video && (
          <video
            ref={videoRef}
            muted
            preload={'metadata'}
            playsinline
            src={`${video}#t=0.1`}
            alt=''
          />
        )}
        {img && <img src={img} alt='' />}
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardInfo__row}>
          <Text lg bold>
            {title}
          </Text>
        </div>
        <div className={style.cardInfo__row}>
          <Text secondary>{user}</Text>
          <Text secondary>{userType}</Text>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
