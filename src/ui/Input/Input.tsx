import { FC } from 'react';
import styles from './Input.module.css';

interface IProps {
  placeholder: string;
}

const Input: FC<IProps> = ({ placeholder, ...props }) => {
  return <input className={styles.input} placeholder={placeholder} {...props} />;
};

export default Input;
