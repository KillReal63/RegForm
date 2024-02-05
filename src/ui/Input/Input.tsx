import { FC } from 'react';
import styles from './Input.module.css';
import { RefCallBack } from 'react-hook-form';

type Props = {
  name?: string;
  placeholder: string;
  type?: string;
  inputRef?: RefCallBack;
};

const Input: FC<Props> = ({ placeholder, name, inputRef, ...props }) => {
  return (
    <input
      ref={inputRef}
      className={styles.input}
      placeholder={placeholder}
      {...props}
      name={name}
    />
  );
};

export default Input;
