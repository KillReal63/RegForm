import { FC, InputHTMLAttributes } from 'react';
import { RefCallBack } from 'react-hook-form';
import styles from './Input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  inputRef?: RefCallBack;
}

const Input: FC<Props> = ({
  label,
  placeholder,
  name,
  inputRef,
  onChange,
  value,
  type,
  ...props
}) => {
  return (
    <>
      {label}
      <input
        type={type}
        ref={inputRef}
        name={name}
        className={styles.input}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        {...props}
      />
    </>
  );
};

export default Input;
