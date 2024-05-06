import style from './Input.module.scss';

const Input = ({ name, placeholder, type = 'text', textarea, error }) => {
  return textarea ? (
    <textarea
      className={`${style.input} ${style.textarea}`}
      placeholder={placeholder}
      name={name}
    ></textarea>
  ) : (
    <label className={style.label}>
      <input
        className={style.input}
        type={type}
        placeholder={placeholder}
        name={name}
      />
      {error && <span className={style.error}>This field is required</span>}
    </label>
  );
};

export default Input;
