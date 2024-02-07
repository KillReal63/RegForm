import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import { FC, useEffect } from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import Button from '../../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

type Props = {
  onClose: () => void;
  open: boolean;
  title?: string;
};

const Modal: FC<Props> = ({ onClose, open, title }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const closeByEscape = (event: KeyboardEventInit) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      };
    }
  }, [open, onClose]);

  if (title) {
    return <div></div>;
  }

  return createPortal(
    <>
      <ModalOverlay onClick={() => onClose()} />
      <div className={styles.wrapper}>
        <p className={styles.header}>Форма успешно отправлена</p>
        <div className={styles.img}>
          <svg
            width='80'
            height='80'
            viewBox='0 0 80 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect
              width='80'
              height='80'
              rx='40'
              fill='#05AE71'
              fillOpacity='0.15'
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M20.8 40C20.8 29.4016 29.4016 20.8 40 20.8C50.5985 20.8 59.2001 29.4016 59.2001 40C59.2001 50.5985 50.5985 59.2001 40 59.2001C29.4016 59.2001 20.8 50.5985 20.8 40ZM47.4093 32.9903C46.9678 32.6817 46.3556 32.7557 46.0058 33.16L37.8957 42.5311L33.715 38.7738C33.3165 38.4157 32.7008 38.4157 32.3023 38.7738L30.7329 40.1842C30.2891 40.5831 30.2891 41.264 30.7329 41.6629L36.5953 46.9314C36.7874 47.1041 37.0396 47.2001 37.3016 47.2001H38.9073C39.2144 47.2001 39.5058 47.0683 39.7033 46.8401L49.3568 35.6856C49.7452 35.2368 49.6585 34.5625 49.1684 34.2199L47.4093 32.9903Z'
              fill='#05AE71'
            />
          </svg>
        </div>
        <Button variant='forward' onClick={() => navigate('/')}>
          На главную
        </Button>
      </div>
    </>,
    document.body,
  );
};

export default Modal;
