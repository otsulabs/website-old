import { useEffect, useState } from 'react';
import Text from '../Text';
import style from './File.module.scss';

const File = ({
  className,
  refEl,
  onChange,
  fileName,
  handleRemove,
  disabledInput,
}) => {
  useEffect(() => {});

  return (
    <div className={`${style.file} ${className} `}>
      {fileName && (
        <div className={style.file__remove} onClick={handleRemove}></div>
      )}
      <label>
        <input onChange={onChange} ref={refEl} type='file' />
        <div className={style.fileBody}>
          <div className={style.fileBody__icon}>
            <div className={style.circle}></div>
            {fileName ? (
              <svg
                width='26'
                height='26'
                viewBox='0 0 26 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.3622 7.63762L7.63777 18.3621M7.63777 7.63762L18.3622 18.3621'
                  stroke='black'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            ) : (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.9997 6.99996L8.4997 13.5C8.10188 13.8978 7.87838 14.4374 7.87838 15C7.87838 15.5626 8.10188 16.1021 8.4997 16.5C8.89753 16.8978 9.43709 17.1213 9.9997 17.1213C10.5623 17.1213 11.1019 16.8978 11.4997 16.5L17.9997 9.99996C18.7954 9.20432 19.2423 8.12518 19.2423 6.99996C19.2423 5.87475 18.7954 4.79561 17.9997 3.99996C17.2041 3.20432 16.1249 2.75732 14.9997 2.75732C13.8745 2.75732 12.7954 3.20432 11.9997 3.99996L5.4997 10.5C4.30623 11.6934 3.63574 13.3121 3.63574 15C3.63574 16.6878 4.30623 18.3065 5.4997 19.5C6.69318 20.6934 8.31188 21.3639 9.9997 21.3639C11.6875 21.3639 13.3062 20.6934 14.4997 19.5L20.9997 13'
                  // stroke='#181717'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            )}
          </div>
          <Text className={style.fileBody__title}>
            {fileName ? fileName : 'Attach files'}
          </Text>
        </div>
      </label>
    </div>
  );
};

export default File;
