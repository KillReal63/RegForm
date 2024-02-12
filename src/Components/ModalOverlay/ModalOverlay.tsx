import { FC, HTMLProps } from 'react';
import styles from './ModalOverlay.module.css';

const ModalOverlay: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return <div className={styles.modal_overlay} {...props} />;
};

export default ModalOverlay;
