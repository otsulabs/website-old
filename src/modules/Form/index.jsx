import { useForm } from 'react-hook-form';
import Button from '../../components/Button';
import File from '../../components/File';
import Input from '../../components/Input';
import style from './Form.module.scss';
import { useEffect, useRef, useState } from 'react';

const Form = ({ className }) => {
  const [fileName, setFileName] = useState(false);

  const fileInputRef = useRef();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [disabledInput, setDisabledInput] = useState(false);
  const handleFileInputName = () => {
    setFileName(fileInputRef.current.files[0].name);
  };
  const removeFileInput = () => {
    if (fileName) {
      setFileName(false);
      fileInputRef.current.value = '';
      let newControl = fileInputRef.current.cloneNode(true);
      fileInputRef.current.replaceWith(newControl);
      fileInputRef.current = newControl;
    }
  };

  useEffect(() => {
    setDisabledInput(fileName ? true : false);
  }, [fileName]);

  return (
    <form
      action=''
      onSubmit={handleSubmit(onSubmit)}
      className={`${style.form} ${className}`}
    >
      <div className={style.form__row}>
        <Input
          placeholder={'Your Name'}
          {...register('Name', { required: true, pattern: /^\S+@\S+$/i })}
          error={errors.Name}
        />
        <Input
          placeholder={'Your Email'}
          {...register('Email', { required: true })}
          error={errors.Email}
        />
      </div>
      <Input placeholder={'Write a message here'} textarea />
      <File
        handleRemove={removeFileInput}
        onChange={handleFileInputName}
        refEl={fileInputRef}
        className={style.form__file}
        fileName={fileName}
        disabledInput={disabledInput}
      />
      <Button className={style.form__btn} title={'Send now'} />
    </form>
  );
};

export default Form;
