import { FC, PropsWithChildren } from 'react';
import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  option?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  onClick,
  option,
  type,
}) => {
  return (
    <button
      type={type}
      className={` ${styles.button} ${
        option === 'forward' ? styles.button_forward : styles.button_back
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
