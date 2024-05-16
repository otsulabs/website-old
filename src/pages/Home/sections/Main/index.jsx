import Button from '../../../../components/Button';
import Text from '../../../../components/Text';
import style from './Main.module.scss';
import Title from '../../../../components/Title';
import { siteContent } from '../../../../content';
import { useMediaQuery } from 'usehooks-ts';
import videoMp4 from './assets/video/video.mp4';
import videoWebm from './assets/video/video.webm';

const MainSection = () => {
  const isTablet = useMediaQuery('(max-width:991.98px)');
  // const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  return (
    <section className={style.main}>
      {!isTablet && (
        <>
          <div className={style.main__elem}>
            <svg
              width='1043'
              height='535'
              viewBox='0 0 1043 535'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M263.814 95.786H540.469V137.838H243.386L263.814 95.786ZM336.772 222.527H527.045V262.828H336.772V222.527ZM336.188 351.021H535.216V392.489H336.188V351.021ZM314.593 109.219H359.534V535H314.593V109.219ZM285.993 4.67246L328.6 15.7697C295.332 108.635 244.553 200.333 190.857 260.491C184.436 252.898 166.927 237.129 157.004 230.12C210.118 175.802 257.394 90.5295 285.993 4.67246ZM145.915 0L187.938 13.4334C149.417 112.14 89.2999 212.014 25.681 277.429C21.5954 266.916 8.17124 243.553 0 233.04C58.366 176.386 112.646 88.7773 145.915 0ZM83.4633 150.688L126.654 106.883L127.821 107.467V534.416H83.4633V150.688Z'
                fill='black'
                fill-opacity='0.04'
              />
              <path
                d='M568.485 456.736H1000.98V498.788H568.485V456.736ZM526.461 36.2118H1043V77.6801H526.461V36.2118ZM544.555 136.086H587.162V535H544.555V136.086ZM983.467 136.086H1026.66V533.248H983.467V136.086ZM760.509 49.0611H804.867V161.785H760.509V49.0611ZM763.427 158.281H801.948V389.569H763.427V158.281ZM679.964 291.447V367.959H885.995V291.447H679.964ZM679.964 179.891V255.819H885.995V179.891H679.964ZM642.609 142.511H924.517V405.338H642.609V142.511Z'
                fill='black'
                fill-opacity='0.04'
              />
            </svg>
          </div>
          <div className={style.main__person}>
            {/* <img src={personImg} alt='' /> */}
            <video autoplay='autoplay' loop muted playsInline>
              <source src={videoMp4} type='video/mp4' />
              <source src={videoWebm} type='video/webm' />
              {/* {isSafari ? (
                <source src={videoMp4} type='video/mp4' />
              ) : (
                <source src={videoWebm} type='video/webm' />
              )} */}
            </video>
          </div>
        </>
      )}
      <div className='__container'>
        <div className={style.mainBody}>
          <div className={style.mainBody__title}>
            <Title.H1>
              <Title.Row>Otsu</Title.Row>
              <Title.Row>— labs</Title.Row>
            </Title.H1>
          </div>
        </div>
        {isTablet && (
          <>
            <div className={style.main__person}>
              <div className={style.main__elem}>
                <svg
                  width='1043'
                  height='535'
                  viewBox='0 0 1043 535'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M263.814 95.786H540.469V137.838H243.386L263.814 95.786ZM336.772 222.527H527.045V262.828H336.772V222.527ZM336.188 351.021H535.216V392.489H336.188V351.021ZM314.593 109.219H359.534V535H314.593V109.219ZM285.993 4.67246L328.6 15.7697C295.332 108.635 244.553 200.333 190.857 260.491C184.436 252.898 166.927 237.129 157.004 230.12C210.118 175.802 257.394 90.5295 285.993 4.67246ZM145.915 0L187.938 13.4334C149.417 112.14 89.2999 212.014 25.681 277.429C21.5954 266.916 8.17124 243.553 0 233.04C58.366 176.386 112.646 88.7773 145.915 0ZM83.4633 150.688L126.654 106.883L127.821 107.467V534.416H83.4633V150.688Z'
                    fill='black'
                    fill-opacity='0.04'
                  />
                  <path
                    d='M568.485 456.736H1000.98V498.788H568.485V456.736ZM526.461 36.2118H1043V77.6801H526.461V36.2118ZM544.555 136.086H587.162V535H544.555V136.086ZM983.467 136.086H1026.66V533.248H983.467V136.086ZM760.509 49.0611H804.867V161.785H760.509V49.0611ZM763.427 158.281H801.948V389.569H763.427V158.281ZM679.964 291.447V367.959H885.995V291.447H679.964ZM679.964 179.891V255.819H885.995V179.891H679.964ZM642.609 142.511H924.517V405.338H642.609V142.511Z'
                    fill='black'
                    fill-opacity='0.04'
                  />
                </svg>
              </div>
              <video autoplay='autoplay' loop muted playsInline>
                <source src={videoMp4} type='video/mp4' />
                <source src={videoWebm} type='video/webm' />
              </video>
              {/* <img src={personImg} alt='' /> */}
            </div>
          </>
        )}
        <div className={style.mainBottom}>
          <Text className={style.mainBottom__text}>
            A creative animation production studio driven by a collective of
            storytellers and their profound love for anime.
          </Text>
          {!isTablet && (
            <div className={style.mainBottom__social}>
              {siteContent.social.main.map((item, index) => (
                <Button key={index} social href={item.href} icon={item.icon} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
