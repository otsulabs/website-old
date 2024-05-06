import style from './Footer.module.scss';
import logo from './../../img/header/logo';
import LinkButton from '../LinkButton';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { siteContent } from '../../content';

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:991.98px)');

  return (
    <footer className={style.footer}>
      <div className={style.footerBody}>
        {!isMobile && (
          <div className={style.col}>
            <Link to={'/'} className={style.footerBody__logo}>
              {logo}
            </Link>
          </div>
        )}
        <div className={style.col}>
          <div className={style.col__title}>Menu</div>
          <ul>
            <li>
              <LinkButton white title={'about'} to={'/about'} sm={isMobile} />
            </li>
            <li>
              <LinkButton
                white
                title={'projects'}
                to={'/projects'}
                sm={isMobile}
              />
            </li>
            <li>
              <LinkButton
                white
                title={'careers'}
                to={'/careers'}
                pulse
                sm={isMobile}
              />
            </li>
            <li>
              <LinkButton
                white
                title={'contact'}
                to={'/contacts'}
                sm={isMobile}
              />
            </li>
          </ul>
        </div>
        <div className={style.col}>
          <div className={style.col__title}>Company</div>
          <ul>
            {siteContent.social.all.map((item, index) => (
              <li key={index}>
                <LinkButton
                  white
                  title={item.name}
                  href={item.href}
                  sm={isMobile}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className={style.col}>
          <div className={style.col__title}>Project</div>
          <ul>
            <li className={style.full}>
              <LinkButton
                white
                title={'ereneanimation'}
                href={siteContent.social.ereneAnimation}
                sm={isMobile}
              />
            </li>
            <li className={style.full}>
              <LinkButton
                white
                title={'thebookofnouns'}
                href={siteContent.social.theBookOfNouns}
                sm={isMobile}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.col}>
          <div className={style.footerBottom__cr}>
            © 2024 Otsu Labs. All rights reserved.
          </div>
        </div>
        <div className={style.col}>
          <LinkButton
            white
            title={siteContent.contacts.email}
            href={`mailto:${siteContent.contacts.email}}`}
            lg
            lowerCase
            className={style.footerBottom__mail}
          />
          {/* <a
            href={siteContent.contacts.email}
            className={style.footerBottom__mail}
          >
            {siteContent.contacts.email}
          </a> */}
        </div>
        {!isMobile && <div className={style.col}></div>}
        <div className={style.col}>
          {/* <Link to={'/privacy'} className={style.footerBottom__privacy}>
            Privacy Policy
          </Link> */}
          <LinkButton
            white
            title={'Privacy Policy'}
            to={'/privacy'}
            lg
            lowerCase
            className={style.footerBottom__privacy}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
