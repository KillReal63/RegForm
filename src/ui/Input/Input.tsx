import { FC } from 'react';
import styles from './Input.module.css';

interface IProps {
  name?: string;
  placeholder: string;
  type?: string;
}

const Input: FC<IProps> = ({ placeholder, name, ...props }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      name={name}
      {...props}
    />
  );
};

export default Input;
