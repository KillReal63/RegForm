import { ChangeEvent, FC } from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './Input.module.css';

type Props = {
  label?: string;
  name?: string;
  placeholder?: string;
  type: string;
  inputRef?: RefCallBack;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<Props> = ({
  label,
  placeholder,
  name,
  inputRef,
  onChange,
  ...props
}) => {
  return (
    <>
      {label}
      <input
        ref={inputRef}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Input;
