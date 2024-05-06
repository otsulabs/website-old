import style from './Picture.module.scss';

const PictureSection = ({ img }) => {
  return (
    <section className={style.img}>
      <img src={img} alt='' />
    </section>
  );
};

export default PictureSection;
