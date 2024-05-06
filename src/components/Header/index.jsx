import Button from '../Button';
import style from './Header.module.scss';
import logo from './../../img/header/logo';
import LinkButton from '../LinkButton';
import { useMediaQuery } from 'usehooks-ts';
import Text from './../Text';
import NoiseBg from './../NoiseBg';
import { useState } from 'react';
import { siteContent } from '../../content';
import { Link } from 'react-router-dom';

const Header = () => {
  const isMobile = useMediaQuery('(max-width:991.98px)');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = (type) => {
    if (type === 'close') {
      setIsMenuOpen(false);
      document.body.classList.remove('_lock');
    } else {
      setIsMenuOpen(!isMenuOpen);
      if (isMenuOpen) {
        document.body.classList.remove('_lock');
      } else {
        document.body.classList.add('_lock');
      }
    }
  };

  return (
    <header className={style.header}>
      <Link to={'/'} className={style.header__logo}>
        {logo}
      </Link>
      <div className={`${style.headerMenu} ${isMenuOpen && style.open}`}>
        {isMobile && <NoiseBg />}
        {isMobile && (
          <Text bold secondary upperCase className={style.menu__title}>
            Menu
          </Text>
        )}
        <div className={style.headerMenu__list}>
          <LinkButton
            onClick={() => handleMenu('close')}
            to={'about'}
            title={'About'}
          />
          <LinkButton
            onClick={() => handleMenu('close')}
            to={'projects'}
            title={'Projects'}
          />
          <LinkButton
            onClick={() => handleMenu('close')}
            to={'careers'}
            title={'Careers'}
            pulse
          />
          <LinkButton
            onClick={() => handleMenu('close')}
            to={'contacts'}
            title={'Contact'}
          />
        </div>
        {isMobile && (
          <div className={style.headerMenu__social}>
            {siteContent.social.main.map((item, index) => (
              <Button
                key={index}
                social
                className={style.socialBtn}
                href={item.href}
                icon={item.icon}
              />
            ))}
          </div>
        )}
      </div>
      <Button
        to={'/contacts'}
        className={style.header__btn}
        title={'Reach Out'}
      />
      {isMobile && (
        <button
          onClick={handleMenu}
          className={`${style.header__burger} ${isMenuOpen && style.open}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}
    </header>
  );
};

export default Header;
